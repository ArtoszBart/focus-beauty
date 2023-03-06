'use client';

import FormInput from '@/components/FormInput';
import useLoginForm from './useLoginForm';

export const metadata = {
	title: 'Logowanie',
};

export default function AdminPanel() {
	const { values, isLoggedIn, handleChange, handleSubmit, errorMessage } =
		useLoginForm();

	return (
		<main>
			{isLoggedIn ? (
				<h1 id='welcome-screen'>Logged in!</h1>
			) : (
				<form className='form' noValidate onSubmit={handleSubmit}>
					<h1>Logowanie</h1>
					<FormInput
						name='email'
						placeholder='Email'
						value={values.email}
						onChange={handleChange}
					/>
					<FormInput
						name='password'
						placeholder='Hasło'
						value={values.password}
						onChange={handleChange}
					/>
					<span>{errorMessage}</span>
					<button className='form-input-btn' type='submit'>
						Zaloguj się
					</button>
					<span className='form-input-login'>
						<a href='#'>Nie pamiętasz hasła?</a>
					</span>
				</form>
			)}
		</main>
	);
}
