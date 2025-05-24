import { Heart, ShieldCheck, Smile, Star } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import iphone16ProAbout from '../../../public/iPhone16pro-about.svg'
import styles from './About.module.css'

export default function About() {
	const aboutLeftRef = useRef<HTMLDivElement>(null)
	const aboutRightRef = useRef<HTMLDivElement>(null)
	const aboutImageRef = useRef<HTMLDivElement>(null)
	const [aboutVisible, setAboutVisible] = useState({
		left: false,
		right: false,
		image: false,
	})

	// Для поочередной анимации карточек
	const [leftCardsVisible, setLeftCardsVisible] = useState([false, false])
	const [rightCardsVisible, setRightCardsVisible] = useState([false, false])

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

	useEffect(() => {
		const observer = new window.IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						if (entry.target === aboutLeftRef.current)
							setAboutVisible(v => ({ ...v, left: true }))
						if (entry.target === aboutRightRef.current)
							setAboutVisible(v => ({ ...v, right: true }))
						if (entry.target === aboutImageRef.current)
							setAboutVisible(v => ({ ...v, image: true }))
					}
				})
			},
			{ threshold: 0.2 }
		)
		if (aboutLeftRef.current) observer.observe(aboutLeftRef.current)
		if (aboutRightRef.current) observer.observe(aboutRightRef.current)
		if (aboutImageRef.current) observer.observe(aboutImageRef.current)
		return () => observer.disconnect()
	}, [])

	// Поочередная анимация карточек после появления заголовка и изображения
	useEffect(() => {
		if (aboutVisible.left) {
			;[0, 1].forEach(i => {
				setTimeout(() => {
					setLeftCardsVisible(prev => {
						const arr = [...prev]
						arr[i] = true
						return arr
					})
				}, 400 + i * 400)
			})
		}
	}, [aboutVisible.left])

	useEffect(() => {
		if (aboutVisible.right) {
			;[0, 1].forEach(i => {
				setTimeout(() => {
					setRightCardsVisible(prev => {
						const arr = [...prev]
						arr[i] = true
						return arr
					})
				}, 400 + i * 400)
			})
		}
	}, [aboutVisible.right])

	return (
		<div className='container'>
			<section id='about' className={styles.section}>
				<div className={styles.about__inner}>
					<div ref={aboutLeftRef} className={styles.about__left}>
						<h3
							className={`${styles.about__heading} ${styles['fade-in']}${
								aboutVisible.left ? ` ${styles.visible}` : ''
							}`}
						>
							KRON — это платформа внутри Telegram, где:
						</h3>
						{leftCards.map((card, i) => (
							<div
								key={i}
								className={`${styles.about__card} ${styles['fade-in']}${
									leftCardsVisible[i] ? ` ${styles.visible}` : ''
								}`}
								style={{ transitionDelay: `${0.2 + i * 0.25}s` }}
							>
								{card.icon}
								<p className={styles.about__text}>{card.text}</p>
							</div>
						))}
					</div>
					<div
						ref={aboutImageRef}
						className={`${styles.about__image} ${styles['fade-in']}${
							aboutVisible.image ? ` ${styles.visible}` : ''
						}`}
					>
						<Image src={iphone16ProAbout} alt={'moco'} />
					</div>
					<div ref={aboutRightRef} className={styles.about__right}>
						<h3
							className={`${styles.about__heading} ${styles['fade-in']}${
								aboutVisible.right ? ` ${styles.visible}` : ''
							}`}
						>
							Чем KRON лучше аналогов (например, Blum)?
						</h3>
						{rightCards.map((card, i) => (
							<div
								key={i}
								className={`${styles.about__card} ${styles['fade-in']}${
									rightCardsVisible[i] ? ` ${styles.visible}` : ''
								}`}
								style={{ transitionDelay: `${0.2 + i * 0.25}s` }}
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
