import { useRef } from 'react';

import styles from './newsletter-registration.module.css';

export default function NewsletterRegistration() {
	const emailInputRef = useRef();

	function registrationHandler(event) {
		event.preventDefault();
		event.stopPropagation();

		const email = emailInputRef.current.value;
		console.log(email);

		if (email.length <= 0) {
			return;
		}

		fetch('/api/newsletter', {
			method: 'POST',
			body: JSON.stringify({ email }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		emailInputRef.current.value = '';
	}

	return (
		<section className={styles.newsletter}>
			<h2>Sign up to stay updated!</h2>
			<form onSubmit={registrationHandler}>
				<div className={styles.control}>
					<input
						required
						type='email'
						id='email'
						placeholder='Your email'
						aria-label='Your email'
						ref={emailInputRef}
					/>
					<button>Register</button>
				</div>
			</form>
		</section>
	);
}
