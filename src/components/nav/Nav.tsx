import { Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import logo from '../../../public/logo.png'
import styles from './Nav.module.css'

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<nav className={styles.nav}>
			<div className={styles.nav__inner}>
				<Link href='/' className={styles.logo}>
					<Image src={logo} alt={'logo'} width={70} height={70} />
				</Link>
				<div
					className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}
				>
					<Link href='#about' className={styles.nav__link} onClick={closeMenu}>
						о нас
					</Link>
					<Link
						href='#solution'
						className={styles.nav__link}
						onClick={closeMenu}
					>
						решение
					</Link>
					<Link
						href='#roadmap'
						className={styles.nav__link}
						onClick={closeMenu}
					>
						roadmap
					</Link>
					<Link href='#beta' className={styles.nav__link} onClick={closeMenu}>
						beta
					</Link>
					<div className={`${styles.tgLink} ${styles.mobile}`}>
						<Link href='#' onClick={closeMenu}>
							<Send width={42} height={42} />
						</Link>
					</div>
				</div>
				<div className={styles.tgLink}>
					<Link href='#'>
						<Send width={42} height={42} />
					</Link>
				</div>
				<div
					className={`${styles.burger} ${isMenuOpen ? styles.active : ''}`}
					onClick={toggleMenu}
				>
					<div className={styles.burger__line}></div>
					<div className={styles.burger__line}></div>
					<div className={styles.burger__line}></div>
				</div>
			</div>
		</nav>
	)
}
