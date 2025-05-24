'use client'

import { Star } from '@/types/global.types'
import { FC, useEffect, useRef } from 'react'
import styles from './StarBackground.module.css'

interface StarBackgroundProps {
	starColor?: 'black' | 'white'
}

const StarBackground: FC<StarBackgroundProps> = ({ starColor = 'white' }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const starsRef = useRef<Star[]>([])
	const animationFrameRef = useRef<number | undefined>(undefined)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		// Устанавливаем размеры canvas
		const setCanvasSize = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}

		// Инициализируем звезды только один раз
		const initStars = () => {
			starsRef.current = Array.from({ length: 150 }, () => ({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				radius: Math.random() * 1.5,
				alpha: Math.random(),
				velocity: Math.random() * 0.15,
			}))
		}

		const animate = () => {
			ctx.fillStyle =
				starColor === 'black'
					? 'rgba(255, 255, 255, 0.8)'
					: 'rgba(0, 0, 0, 0.8)'
			ctx.fillRect(0, 0, canvas.width, canvas.height)

			starsRef.current.forEach(star => {
				// Обновляем позицию
				star.y += star.velocity
				star.alpha = Math.sin(Date.now() * 0.001 + star.x) * 0.5 + 0.5

				// Возвращаем звезду наверх если она вышла за пределы
				if (star.y > canvas.height) {
					star.y = 0
					star.x = Math.random() * canvas.width
				}

				// Рисуем звезду
				ctx.beginPath()
				ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
				ctx.fillStyle = `rgba(${
					starColor === 'black' ? '0, 0, 0' : '255, 255, 255'
				}, ${star.alpha})`
				ctx.fill()
			})

			animationFrameRef.current = requestAnimationFrame(animate)
		}

		// Обработчик изменения размера окна
		const handleResize = () => {
			setCanvasSize()
			initStars()
		}

		setCanvasSize()
		initStars()
		animate()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current)
			}
		}
	}, [starColor])

	return <canvas ref={canvasRef} className={styles.canvas} />
}

export default StarBackground
