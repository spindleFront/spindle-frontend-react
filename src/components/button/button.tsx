import React from 'react';
import './button.scss';

interface ButtonProps {
	style: 'contained' | 'regular';
	text: string;
	onClick?: () => void;
	type?: 'submit' | 'reset' | 'button';
	disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onClick, text, type, style, disabled }) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			type={type}
			className={style === 'contained' ? 'button contained' : 'button'}
		>
			{text}
		</button>
	);
};
