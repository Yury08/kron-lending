'use client'

import { useEffect, useRef } from 'react'
import styles from './ScrollAnimation.module.css'

export default function ScrollAnimation() {
	const containerRef = useRef<HTMLDivElement>(null)
	const elementsRef = useRef<(HTMLDivElement | null)[]>([])

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return

			const containerTop = containerRef.current.getBoundingClientRect().top
			const windowHeight = window.innerHeight
			const scrollProgress = Math.min(
				Math.max(1 - containerTop / windowHeight, 0),
				1
			)

			elementsRef.current.forEach((element, index) => {
				if (!element) return

				const delay = index * 0.1
				const elementProgress = Math.min(
					Math.max((scrollProgress - delay) * 1.5, 0),
					1
				)

				element.style.transform = `translateY(${
					(1 - elementProgress) * 100
				}px) scale(${0.8 + elementProgress * 0.2})`
				element.style.opacity = elementProgress.toString()
			})
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<section className={styles.section} ref={containerRef}>
			<div className={styles.container}>
				<div
					className={styles.element}
					ref={el => {
						elementsRef.current[0] = el
					}}
				>
					<h2>Инновации в мире криптовалют</h2>
					<p>Создаем будущее финансовых технологий</p>
				</div>
				<div
					className={styles.element}
					ref={el => {
						elementsRef.current[1] = el
					}}
				>
					<h2>Безопасность превыше всего</h2>
					<p>Ваши активы под надежной защитой</p>
				</div>
				<div
					className={styles.element}
					ref={el => {
						elementsRef.current[2] = el
					}}
				>
					<h2>Простота использования</h2>
					<p>Интуитивно понятный интерфейс для всех</p>
				</div>
				<div
					className={styles.element}
					ref={el => {
						elementsRef.current[3] = el
					}}
				>
					<h2>Мгновенные транзакции</h2>
					<p>Быстрые и надежные переводы</p>
				</div>
				<div
					className={styles.element}
					ref={el => {
						elementsRef.current[4] = el
					}}
				>
					<h2>Интеграция с Telegram</h2>
					<p>Удобный доступ через любимый мессенджер</p>
				</div>
				<div
					className={styles.element}
					ref={el => {
						elementsRef.current[5] = el
					}}
				>
					<h2>Уникальные токены</h2>
					<p>Каждый бизнес создает свой уникальный токен</p>
				</div>
				<div
					className={styles.element}
					ref={el => {
						elementsRef.current[6] = el
					}}
				>
					<h2>Прозрачность операций</h2>
					<p>Все транзакции доступны в блокчейне</p>
				</div>
				<div
					className={styles.element}
					ref={el => {
						elementsRef.current[7] = el
					}}
				>
					<h2>Масштабируемость</h2>
					<p>Готовы к росту и развитию</p>
				</div>
			</div>
			<div className={styles.gradientBottom}></div>
		</section>
	)
}
