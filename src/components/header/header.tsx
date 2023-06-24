import React from 'react';
import { Logo } from '../logo';
import { Button } from '../button';
import { getAuth, signOut } from 'firebase/auth';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { queryClient } from '../../index';
import './header.scss';

export const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const email = localStorage.getItem('user');

	const logOut = () => {
		const auth = getAuth();
		window.localStorage.removeItem('user');
		window.localStorage.removeItem('id');
		queryClient.clear();
		signOut(auth)
			.then(() => {
				navigate(ROUTE_NAMES.SIGN_IN);
			})
			.catch((e) => console.log(e.message));
	};

	return (
		<header className='header'>
			<div>
				<Logo />
			</div>
			<div className='header__links'>
				{!email && (
					<>
						<div className='header__links-container'>
							<Link className='header__links-link' to={ROUTE_NAMES.SIGN_IN}>
								Sign in
							</Link>
						</div>
						<div className='header__links-container'>
							<Link className='header__links-link' to={ROUTE_NAMES.SIGN_UP}>
								Sign up
							</Link>
						</div>
					</>
				)}
				{location.pathname !== ROUTE_NAMES.HOME && (
					<Link className='header__links-link' to={ROUTE_NAMES.HOME}>
						Home
					</Link>
				)}
			</div>
			{email && (
				<div className='header__logged-user-container'>
					<div className='header__logged-user'>
						<div className='header__image-container'></div>
						<div className='header__logged-user-email'>{email}</div>
					</div>
					<div className='header__header-button-container'>
						<Button onClick={logOut} style='regular' text='Log out' type='button' />
					</div>
				</div>
			)}
		</header>
	);
};
