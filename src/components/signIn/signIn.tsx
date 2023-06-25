import React from 'react';
import { Logo } from '../logo';
import { Input } from '../input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../../common/interfaces/FormValues';
import { Button } from '../button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import { auth } from '../../firebase';
import { googleAuth } from '../../common/auth/googleAuth/googleAuth';
import { faceBookLogin } from '../../common/auth/facebookAuth/facebookAuth';
import './signIn.scss';

export const SignIn = () => {
	const { register, handleSubmit } = useForm<FormValues>();
	const navigate = useNavigate();

	const onSubmit: SubmitHandler<FormValues> = (data) =>
		signInWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				if (user && user.email !== null) {
					window.localStorage.setItem('user', user.email);
					window.localStorage.setItem('id', user.uid);
					navigate(ROUTE_NAMES.OOCYTES_LIST);
				}
			})
			.catch(() => {});

	const onSignUpClick = () => navigate(ROUTE_NAMES.SIGN_UP);
	const onGoogleAuthClick = () => {
		googleAuth(navigate, ROUTE_NAMES.OOCYTE_FORM);
	};

	const onFacebookAuthClick = () => {
		faceBookLogin(navigate, ROUTE_NAMES.OOCYTES_LIST);
	};

	return (
		<main className='signIn'>
			<div className='signIn__logo'>
				<Logo />
			</div>
			<div className='signIn__card'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='signIn__input-container'>
						<Input name='email' register={register} type='e-mail' placeholder='email' />
						<Input name='password' register={register} type='password' placeholder='password' />
					</div>
					<div className='signIn__buttons-container'>
						<Button text='Sign In' style='contained' type='submit' />
						<Button onClick={onSignUpClick} text='Sign Up' style='regular' type='button' />
					</div>
					<div className='signIn__separator-container'>
						<div className='signIn__horizontal-line'></div>
						<div className='signIn__or'>or</div>
						<div className='signIn__horizontal-line'></div>
					</div>
					<div className='signIn__social-container'>
						<button
							onClick={onGoogleAuthClick}
							type='button'
							className='signIn__social-container-item'
						>
							<div className='signIn__logo-container'>
								<img
									alt='Google logo'
									src={require('../../common/assets/icons/googleLogo.svg').default}
								/>
							</div>
							<div className='signIn__logo-description'>Sign in with Google</div>
						</button>
						<button
							onClick={onFacebookAuthClick}
							type='button'
							className='signIn__social-container-item'
						>
							<div className='signIn__logo-container'>
								<img
									alt='Google logo'
									src={require('../../common/assets/icons/facebookLogo.svg').default}
								/>
							</div>
							<div className='signIn__logo-description'>Sign in with Facebook</div>
						</button>
					</div>
				</form>
			</div>
			<div className='signIn__noRegistration'>
				<Link to={ROUTE_NAMES.UPLOAD} className='signIn__noRegistration-button' type='button'>
					Proceed without registration
				</Link>
			</div>
		</main>
	);
};
