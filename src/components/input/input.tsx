import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../common/interfaces/FormValues';
import './input.scss';

export interface InputProps {
	type: string;
	placeholder: string;
	name: Path<FormValues>;
	register: UseFormRegister<FormValues>;
	width?: string;
	required?: boolean;
}

export const Input: React.FC<InputProps> = ({
	type,
	placeholder,
	register,
	name,
	width,
	required = false,
}) => {
	return (
		<input
			style={{ width: width }}
			{...register(name, { required: required })}
			placeholder={placeholder}
			type={type}
			className='input'
		/>
	);
};
