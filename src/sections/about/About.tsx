import { Heart, ShieldCheck, Smile, Star } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import iphone15ProAbout from '../../../public/iPhone15pro-about.png'
import styles from './About.module.css'

export default function About() {
	const sectionRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add(styles.visible)
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

	const leftCards = [
		{
			icon: <Star />,
			text: 'Бизнесы создают свои токены (как бонусные баллы) в сети TON',
		},
		{
			icon: <Heart />,
			text: 'Пользователи получают токены за покупки и активности - просто, как скидки в любимом магазине',
		},
	]
	const rightCards = [
		{
			icon: <Smile />,
			text: 'Только полезные токены. Каждый токен привязан к реальному бизнес. Никаких спекулятивных пустышек.',
		},
		{
			icon: <ShieldCheck />,
			text: 'Безопасность и модерация. Проверенные компании, прозрачная система — нет скамов и внезапного обесценивания.',
		},
	]

	return (
		<div className='container'>
			<section ref={sectionRef} id='about' className={styles.section}>
				<div className={styles.about__inner}>
					<div className={styles.about__left}>
						<h3 className={styles.about__heading}>
							KRON — это платформа внутри Telegram, где:
						</h3>
						{leftCards.map((card, i) => (
							<div
								key={i}
								className={styles.about__card}
								style={{ animationDelay: `${0.2 + i * 0.2}s` }}
							>
								{card.icon}
								<p className={styles.about__text}>{card.text}</p>
							</div>
						))}
					</div>
					<div className={styles.about__image}>
						<Image src={iphone15ProAbout} alt={'moco'} />
					</div>
					<div className={styles.about__right}>
						<h3 className={styles.about__heading}>
							Чем KRON лучше аналогов (например, Blum)?
						</h3>
						{rightCards.map((card, i) => (
							<div
								key={i}
								className={styles.about__card}
								style={{ animationDelay: `${0.2 + i * 0.2}s` }}
							>
								{card.icon}
								<p className={styles.about__text}>{card.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}
