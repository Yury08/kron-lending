'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Roadmap.module.css'

const RoadmapSection = () => {
	const sectionRef = useRef<HTMLElement>(null)
	const [activeCard, setActiveCard] = useState<number | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add(styles.visible)
					} else {
						entry.target.classList.remove(styles.visible)
					}
				})
			},
			{
				threshold: 0.1,
			}
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current)
			}
		}
	}, [])

	const toggleCard = (index: number) => {
		setActiveCard(activeCard === index ? null : index)
	}

	const roadmapData = [
		{
			title: 'Альфа-игра (Play-to-Earn Beta)',
			description:
				'Запуск раннего доступа к игре с фармом очков. Пользователи зарабатывают очки и соревнуются между собой. Привлечение первых пользователей через реферальную систему',
			icon: '🚀',
			date: 'Q1 2025',
			color: '#FF6B6B',
		},
		{
			title: 'Интеграция токенов компаний',
			description:
				'Первые компании подключают свои брендированные токены.  Начисление токенов за оплату покупок по QR-коду (оффлайн) и по карте онлайн. У компаний — личные кабинеты с аналитикой, выпуск токена через платформу. Токены можно использовать как бонусы: скидки, бесплатная доставка, товары.',
			icon: '⚡',
			date: 'Q2 2025',
			color: '#4ECDC4',
		},
		{
			title: 'Запуск биржи токенов (внутри Telegram Mini App)',
			description:
				'Появляется простая торговая площадка с модерацией. Пользователи могут продавать и покупать токены разных бизнесов. Вся информация о токенах проверяется и прозрачна.',
			icon: '🤝',
			date: 'Q3 2025',
			color: '#45B7D1',
		},
		{
			title: 'Масштабирование и web3-привычка',
			description:
				'Упрощённый переход в web3: без фраз, приватных ключей — только Telegram. Единый кошелек для всех токенов в приложении KRON. Витрина с подключенными бизнесами — каталог скидок и бонусов.',
			icon: '📱',
			date: 'Q4 2025',
			color: '#96CEB4',
		},
		{
			title: 'Сообщество и автоматизация',
			description:
				'Формирование лояльного сообщества пользователей — не только покупателей, но и трейдеров токенов. Автоматическая проверка проектов перед листингом токенов. Мобильные уведомления о новых компаниях, акциях и токенах',
			icon: '🌍',
			date: '2026',
			color: '#FFEEAD',
		},
	]

	return (
		<section ref={sectionRef} id='roadmap' className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>Roadmap</h2>
				<div className={styles.roadmap}>
					{roadmapData.map((item, index) => (
						<div key={index} className={styles.roadmap__item}>
							<div
								className={`${styles.roadmap__content} ${
									activeCard === index ? styles.active : ''
								}`}
								onClick={() => toggleCard(index)}
							>
								<div
									className={styles.roadmap__icon}
									style={{ backgroundColor: item.color }}
								>
									<span>{item.icon}</span>
								</div>
								<div className={styles.roadmap__info}>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
									<span className={styles.roadmap__date}>{item.date}</span>
								</div>
							</div>
							{index < roadmapData.length - 1 && (
								<div className={styles.roadmap__connector}>
									<div className={styles.roadmap__line}></div>
									<div className={styles.roadmap__dot}></div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default RoadmapSection
