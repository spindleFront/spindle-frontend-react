import React from 'react';
import './button.scss';

interface ButtonProps {
	style: 'contained' | 'regular';
	text: string;
	onClick?: () => void;
	type?: 'submit' | 'reset' | 'button';
}

export const Button: React.FC<ButtonProps> = ({ onClick, text, type, style }) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className={style === 'contained' ? 'button contained' : 'button'}
		>
			{text}
		</button>
	);
};
