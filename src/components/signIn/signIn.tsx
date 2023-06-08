import React from 'react';
import { Logo } from '../logo';
import './signIn.scss';

export const SignIn = () => {
	return (
		<main className='signIn'>
			<div className='signIn__logo'>
				<Logo />
			</div>
			<div className='signIn__card'>
				<form>
					<div className='signIn__input-container'>
						<input placeholder='e-mail' type='email' className='input' />
						<input placeholder='password' type='password' className='input' />
					</div>
					<div className='signIn__buttons-container'>
						<button type='submit' className='button signIn'>
							Sign In
						</button>
						<button className='button'>Sign Up</button>
					</div>
					<div className='signIn__separator-container'>
						<div className='signIn__horizontal-line'></div>
						<div className='signIn__or'>or</div>
						<div className='signIn__horizontal-line'></div>
					</div>
					<div className='signIn__social-container'>
						<button type='submit' className='signIn__social-container-item'>
							<div className='signIn__logo-container'>
								<img
									alt='Google logo'
									src={require('../../common/assets/icons/googleLogo.svg').default}
								/>
							</div>
							<div className='signIn__logo-description'>Sign in with Google</div>
						</button>
						<button type='submit' className='signIn__social-container-item'>
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
				<button className='signIn__noRegistration-button' type='button'>
					Proceed without registration
				</button>
			</div>
		</main>
	);
};
