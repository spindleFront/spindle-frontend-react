import React from 'react';
import './signUp.scss';
import { Logo } from '../logo';
import { Input } from '../input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../../common/interfaces/FormValues';

export const SignUp = () => {
	const { register, handleSubmit } = useForm<FormValues>();
	const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

	return (
		<main className='signUp'>
			<div className='signUp__logo'>
				<Logo />
			</div>
			<div className='signUp__card'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='signUp__input-container'>
						<Input name='email' register={register} type='e-mail' placeholder='email' />
						<Input name='password' register={register} type='password' placeholder='password' />
						<Input
							name='passwordRepeat'
							register={register}
							type='password'
							placeholder='repeat password'
						/>
					</div>
					<div className='signUp__button-container'>
						<button type='submit' className='button'>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};
