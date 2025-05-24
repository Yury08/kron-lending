import StarBackground from '@/components/starBack/StarBackground'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Kron',
	description: 'Kron is a platform for buisness tokens',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.variable}>
				<StarBackground />
				<div className='content'>{children}</div>
			</body>
		</html>
	)
}
