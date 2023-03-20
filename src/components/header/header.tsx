import React from 'react';
import { Logo } from '../logo';
import { TryDemoButton } from '../tryDemoButton';
import './header.scss';

export const Header = () => (
	<div className='header-container'>
		<div>
			<Logo />
		</div>
		<div>
			<TryDemoButton />
		</div>
	</div>
);
