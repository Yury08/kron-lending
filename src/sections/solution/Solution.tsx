import Image from 'next/image'
import { useEffect, useRef } from 'react'
import arrowSecond from '../../../public/solution-corner-right-down-sec.svg'
import arrowFirst from '../../../public/solution-corner-right-down.svg'
import styles from './Solution.module.css'

export default function Solution() {
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

	return (
		<div className={styles.container}>
			<section ref={sectionRef} id='solution' className={styles.section}>
				<div className={styles.solution__inner}>
					<div className={styles.solution__heading}>
						<h2>Как работает платформа</h2>
						<div>
							<Image src={arrowFirst} alt='arrow' />
							<Image src={arrowSecond} alt='arrow' />
						</div>
					</div>
					<div className={styles.solution__mainconent}>
						<div className={styles.solution__left}>
							<div className={styles.solution__card}>
								<div className={styles.solution__num}>1</div>
								<h3 className={styles.solution__text}>
									Покупаю товар или услугу — оплачиваю как обычно, картой.
								</h3>
							</div>
							<div className={styles.solution__line}></div>

							<div className={styles.solution__card}>
								<div className={styles.solution__num}>2</div>
								<h3 className={styles.solution__text}>
									Оплата проходит по QR коду через Telegram или сайт
								</h3>
							</div>
							<div className={styles.solution__line}></div>

							<div className={styles.solution__card}>
								<div className={styles.solution__num}>3</div>
								<h3 className={styles.solution__text}>
									Автоматически получаю бонусные токены от бизнеса — прямо в
									Telegram.
								</h3>
							</div>
							<div className={styles.solution__line}></div>

							<div className={styles.solution__card}>
								<div className={styles.solution__num}>4</div>
								<h3 className={styles.solution__text}>
									Использую токены: на скидки, частичную оплату, бесплатную
									доставку, или торгую ими на бирже.
								</h3>
							</div>
						</div>
						<div className={styles.solution__right}>
							<div className={styles.solution__card}>
								<div className={styles.solution__num}>1</div>
								<h3 className={styles.solution__text}>
									Запускаю свой токен через платформу KRON — это как бонусная
									программа, но в Telegram и на блокчейне TON.
								</h3>
							</div>
							<div className={styles.solution__line}></div>

							<div className={styles.solution__card}>
								<div className={styles.solution__num}>2</div>
								<h3 className={styles.solution__text}>
									Получаю оплату от клиентов по QR коду через Telegram
								</h3>
							</div>
							<div className={styles.solution__line}></div>

							<div className={styles.solution__card}>
								<div className={styles.solution__num}>3</div>
								<h3 className={styles.solution__text}>
									Платформа автоматически начисляет токены клиентам после оплаты
								</h3>
							</div>
							<div className={styles.solution__line}></div>

							<div className={styles.solution__card}>
								<div className={styles.solution__num}>4</div>
								<h3 className={styles.solution__text}>
									Рост лояльности, бесплатный маркетинг и новая аудитория через
									Web3-механики
								</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
