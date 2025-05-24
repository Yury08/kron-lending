'use client'

import Nav from '@/components/nav/Nav'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import ScrollAnimation3D from '@/components/scroll-animation/ScrollAnimation3D'
import Slider from '@/components/slider/Slider'
import About from '@/sections/about/About'
import Contact from '@/sections/contact/Contact'
import Roadmap from '@/sections/roadmap/Roadmap'
import Solution from '@/sections/solution/Solution'
import logoFooter from '../../public/logo-footer.svg'

export default function Home() {
	const [displayText, setDisplayText] = useState('')
	const fullText = 'Превратите Лояльность в Ценность'

	useEffect(() => {
		let currentIndex = 0
		const typingInterval = setInterval(() => {
			if (currentIndex <= fullText.length) {
				setDisplayText(fullText.slice(0, currentIndex))
				currentIndex++
			} else {
				clearInterval(typingInterval)
			}
		}, 100)

		return () => clearInterval(typingInterval)
	}, [])

	return (
		<>
			<div className='container'>
				<Nav />
				<div className='herosection'>
					<div className='herosection__maincontent'>
						<div className='herosection__heading'>
							<h2>
								{displayText}
								<span className='cursor'></span>
							</h2>
							<button>
								<Link href='#beta'>
									<p>BETA</p>
								</Link>
							</button>
						</div>
					</div>
					<Slider />
				</div>
			</div>
			<main>
				<About />
				<ScrollAnimation3D />
				<Solution />
				<Roadmap />
				<Contact />
			</main>
			<footer>
				<div className='footer__inner'>
					<Image src={logoFooter} alt='logo' className='footer__image' />
					<h3 className='footer__text'>
						KRON — экосистема, где бизнес и пользователи выигрывают
					</h3>
				</div>
			</footer>
		</>
	)
}
