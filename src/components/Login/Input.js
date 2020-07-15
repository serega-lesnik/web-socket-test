import React from 'react';

const Input = ({
	name,
	placeholder = '',
	type = 'text',
	className = 'login-input',
	label = true,
	labelText = '',
	value,
	inputChange,
}) => {

	const handleChange = e => {
		const { value } = e.target;
		inputChange(value, name);
	};

	const renderLabel = () => (
		<label htmlFor={name} key={`lbl_${name}`}>{`${labelText}: `}</label>
	);

	return ([
		label && renderLabel(),
		<input
			id={name}
			name={name}
			type={type}
			placeholder={placeholder}
			value={value}
			className={className}
			onChange={handleChange}
			key={`inp_${name}`}
		/>
	]);
};

export default Input;