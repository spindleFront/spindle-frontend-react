import React from 'react';
import { Button } from '../button';
import './deletePopUp.scss';

interface DeletePopUpProps {
	closePopUp: () => void;
}

export const DeletePopUp: React.FC<DeletePopUpProps> = ({ closePopUp }) => {
	return (
		<div className='popUp__container'>
			<div className='popUp__message-container'>
				<div className='popUp__message'>
					The oocyte data you have selected will be permanently deleted. Please confirm if you wish
					to continue with this action.
				</div>
				<div className='popUp__buttons-container'>
					<Button style='contained' text='Delete' type='button' />
					<Button onClick={closePopUp} style='regular' text='Keep' type='button' />
				</div>
			</div>
		</div>
	);
};
