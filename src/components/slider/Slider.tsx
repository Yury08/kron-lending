import Image from 'next/image'
import styles from './Slider.module.css'

import coffeemainCoin from '../../../public/coins/coffeemaniacoin.svg'
import cofixCoin from '../../../public/coins/cofixcoin.svg'
import dodoCoin from '../../../public/coins/dodocoin.svg'
import macCoin from '../../../public/coins/maccoin.svg'
import ozoncoin from '../../../public/coins/ozoncoin.svg'
import sbercoin from '../../../public/coins/sbercoin.svg'
import tbankcoin from '../../../public/coins/tbankcoin.svg'
import wbcoin from '../../../public/coins/wbcoin.svg'
import yandexcoin from '../../../public/coins/yandexcoin.svg'

const images = [
	dodoCoin,
	macCoin,
	coffeemainCoin,
	cofixCoin,
	wbcoin,
	yandexcoin,
	tbankcoin,
	ozoncoin,
	sbercoin,
]

export default function Slider() {
	const allImages = [...images, ...images] // дублируем для бесконечного эффекта

	return (
		<div className={styles.sliderWrapper}>
			<div className={styles.sliderTrack}>
				{allImages.map((img, idx) => (
					<div className={styles.slide} key={idx}>
						<Image src={img} alt={`coin-${idx}`} width={150} height={150} />
					</div>
				))}
			</div>
		</div>
	)
}
