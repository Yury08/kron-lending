'use client'

import { useEffect, useRef } from 'react'
import styles from './ScrollAnimation3D.module.css'

export default function ScrollAnimation3D() {
	const containerRef = useRef<HTMLDivElement>(null)
	const cardsRef = useRef<(HTMLDivElement | null)[]>([])
	const mouseRef = useRef({ x: 0, y: 0 })

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return

			const containerTop = containerRef.current.getBoundingClientRect().top
			const windowHeight = window.innerHeight
			const scrollProgress = Math.min(
				Math.max(1 - containerTop / windowHeight, 0),
				1
			)

			cardsRef.current.forEach((card, index) => {
				if (!card) return

				const delay = index * 0.1
				const elementProgress = Math.min(
					Math.max((scrollProgress - delay) * 1.5, 0),
					1
				)

				// 3D эффект при скролле
				const rotateX = (1 - elementProgress) * 45
				const translateZ = (1 - elementProgress) * 200
				const scale = 0.8 + elementProgress * 0.2

				card.style.transform = `
					perspective(1000px)
					rotateX(${rotateX}deg)
					translateZ(${translateZ}px)
					scale(${scale})
				`
				card.style.opacity = elementProgress.toString()
			})
		}

		const handleMouseMove = (e: MouseEvent) => {
			mouseRef.current = {
				x: (e.clientX / window.innerWidth - 0.5) * 2,
				y: (e.clientY / window.innerHeight - 0.5) * 2,
			}

			cardsRef.current.forEach((card, index) => {
				if (!card) return

				const delay = index * 0.05
				const rotateY = mouseRef.current.x * 15
				const rotateX = -mouseRef.current.y * 15

				card.style.transform = `
					perspective(1000px)
					rotateY(${rotateY}deg)
					rotateX(${rotateX}deg)
					translateZ(50px)
				`
			})
		}

		window.addEventListener('scroll', handleScroll)
		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return (
		<section className={styles.section} ref={containerRef}>
			<div className={styles.container}>
				<div
					className={styles.card}
					ref={el => {
						cardsRef.current[0] = el
					}}
				>
					<div className={styles.cardContent}>
						<h2>Инновации в мире криптовалют</h2>
						<p>Создаем будущее финансовых технологий</p>
					</div>
				</div>
				<div
					className={styles.card}
					ref={el => {
						cardsRef.current[1] = el
					}}
				>
					<div className={styles.cardContent}>
						<h2>Безопасность превыше всего</h2>
						<p>Ваши активы под надежной защитой</p>
					</div>
				</div>
				<div
					className={styles.card}
					ref={el => {
						cardsRef.current[2] = el
					}}
				>
					<div className={styles.cardContent}>
						<h2>Простота использования</h2>
						<p>Интуитивно понятный интерфейс для всех</p>
					</div>
				</div>
				<div
					className={styles.card}
					ref={el => {
						cardsRef.current[3] = el
					}}
				>
					<div className={styles.cardContent}>
						<h2>Мгновенные транзакции</h2>
						<p>Быстрые и надежные переводы</p>
					</div>
				</div>
				<div
					className={styles.card}
					ref={el => {
						cardsRef.current[4] = el
					}}
				>
					<div className={styles.cardContent}>
						<h2>Интеграция с Telegram</h2>
						<p>Удобный доступ через любимый мессенджер</p>
					</div>
				</div>
				<div
					className={styles.card}
					ref={el => {
						cardsRef.current[5] = el
					}}
				>
					<div className={styles.cardContent}>
						<h2>Уникальные токены</h2>
						<p>Каждый бизнес создает свой уникальный токен</p>
					</div>
				</div>
			</div>
			<div className={styles.gradientBottom}></div>
		</section>
	)
}
