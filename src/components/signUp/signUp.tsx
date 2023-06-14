import React from 'react';
import { Logo } from '../logo';
import { Input } from '../input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../../common/interfaces/FormValues';
import { Button } from '../button';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import './signUp.scss';

export const SignUp = () => {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm<FormValues>();

	const auth = getAuth();
	const onSubmit: SubmitHandler<FormValues> = (data) =>
		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				const user = userCredential.user;
				if (user) {
					window.localStorage.setItem('user', user.uid);
					navigate(ROUTE_NAMES.OOCYTE_FORM);
				}
			})
			.catch((error) => {
				// const errorCode = error.code;
				// const errorMessage = error.message;
				// ..
			});
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
						<Button text='Sign Up' type='submit' style='regular' />
					</div>
				</form>
			</div>
		</main>
	);
};
