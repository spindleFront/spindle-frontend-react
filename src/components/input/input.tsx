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
}

export const Input: React.FC<InputProps> = ({ type, placeholder, register, name, width }) => {
	return (
		<input
			style={{ width: width }}
			{...register(name)}
			placeholder={placeholder}
			type={type}
			className='input'
		/>
	);
};
