import BlackStarBackground from '@/components/starBack/BlackStarBackground'
import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
	const [formData, setFormData] = useState({
		username: '',
		mail: '',
		telegram: '',
		terms: false,
	})
	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Здесь можно добавить логику отправки данных на сервер
		console.log('Form submitted:', formData)

		// Очищаем форму
		setFormData({
			username: '',
			mail: '',
			telegram: '',
			terms: false,
		})

		// Показываем уведомление
		setIsSubmitted(true)

		// Скрываем уведомление через 3 секунды
		setTimeout(() => {
			setIsSubmitted(false)
		}, 3000)
	}

	return (
		<div>
			<section id='beta' className={styles.section}>
				<BlackStarBackground />
				<div className={styles.contact__inner}>
					<h2 className={styles.contact__heading}>Beta</h2>
					<form onSubmit={handleSubmit} className={styles.contact__form}>
						<input
							className={styles.contact__input}
							type='text'
							name='username'
							value={formData.username}
							onChange={handleChange}
							placeholder='username'
							required
						/>
						<input
							className={styles.contact__input}
							type='email'
							name='mail'
							value={formData.mail}
							onChange={handleChange}
							placeholder='mail'
							required
						/>
						<input
							className={styles.contact__input}
							type='text'
							name='telegram'
							value={formData.telegram}
							onChange={handleChange}
							placeholder='telegram'
							required
						/>
						<div className={styles.contact__checkboxWrapper}>
							<input
								className={styles.contact__checkbox}
								type='checkbox'
								name='terms'
								id='terms'
								checked={formData.terms}
								onChange={handleChange}
								required
							/>
							<label className={styles.contact__label} htmlFor='terms'>
								Я согласен с условиями передачи информации
							</label>
						</div>
						<button type='submit' className={styles.contact__button}>
							отправить
						</button>
					</form>
					{isSubmitted && (
						<div className={styles.contact__notification}>
							Форма успешно отправлена!
						</div>
					)}
				</div>
			</section>
		</div>
	)
}
