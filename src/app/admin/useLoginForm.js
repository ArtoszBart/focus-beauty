import { useState } from 'react';

const useLoginForm = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
	});
	const [errorMessage, setErrorMessage] = useState('');
	const [isLoggedIn, setIsLoggedId] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		})
			.then(async (res) => {
				if (res.status === 200) return setIsLoggedId(true);

				const error = await res.json();
				setErrorMessage(error.message);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return { values, isLoggedIn, handleChange, handleSubmit, errorMessage };
};

export default useLoginForm;
