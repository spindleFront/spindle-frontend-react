import React, { useMemo } from 'react';
import { Logo } from '../logo';
import { Input } from '../input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../../common/interfaces/FormValues';
import { Button } from '../button';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import { app } from '../../firebase';
import { setUserDataToLocalStorage } from '../../common/helpers/setUserData';
import './signUp.scss';

export const SignUp = () => {
	const navigate = useNavigate();
	const { register, handleSubmit, watch, getFieldState } = useForm<FormValues>();
	const { isDirty } = getFieldState('password');
	const email = watch('email');
	const password = watch('password');
	const passwordRepeat = watch('passwordRepeat');

	const isPasswordsMatch = useMemo(() => {
		if (password && passwordRepeat) {
			return password === passwordRepeat;
		}
	}, [password, passwordRepeat]);

	const isEmailEntered = useMemo(() => {
		if (email) {
			return email.length > 0;
		}
		return false;
	}, [email]);

	const isPasswordLongEnough = useMemo(() => isDirty && password.length < 6, [password]);

	const auth = getAuth(app);
	const onSubmit: SubmitHandler<FormValues> = (data) =>
		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				const user = userCredential.user;
				if (user && user.email !== null) {
					setUserDataToLocalStorage(user.email, user.uid);
					navigate(ROUTE_NAMES.OOCYTE_FORM);
				}
			})
			.catch((error) => {
				console.error(error.message);
			});
	return (
		<main className='signUp'>
			<div className='signUp__logo'>
				<Link to={ROUTE_NAMES.HOME}>
					<Logo />
				</Link>
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
					{isPasswordLongEnough && (
						<div className='short-password'>Password should be at least 6 characters</div>
					)}
					<div className='signUp__button-container'>
						<Button
							disabled={!isPasswordsMatch}
							text='Sign Up'
							type='submit'
							style={!isPasswordsMatch || !isEmailEntered ? 'regular' : 'contained'}
						/>
					</div>
				</form>
			</div>
		</main>
	);
};
