export default function FormInput({ name, placeholder, value, onChange }) {
	return (
		<div className='form-input'>
			<input
				type={name}
				name={name}
				id={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}
