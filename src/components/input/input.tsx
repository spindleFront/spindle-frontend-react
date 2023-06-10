import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import './input.scss';
import { SignInFormValues } from '../../common/interfaces/signInFormValues';

export interface InputProps {
	type: string;
	placeholder: Path<SignInFormValues>;
	register: UseFormRegister<SignInFormValues>;
}

export const Input: React.FC<InputProps> = ({ type, placeholder, register }) => {
	return (
		<input {...register(placeholder)} placeholder={placeholder} type={type} className='input' />
	);
};
