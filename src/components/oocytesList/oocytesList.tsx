import React, { useCallback, useState } from 'react';
import { Header } from '../header';
import { useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import { DeletePopUp } from '../deletePopUp';
import './oocytesList.scss';

export const OocytesList = () => {
	const navigate = useNavigate();
	const [isVisible, setIsVisible] = useState(false);

	const initiateDeletion = () => setIsVisible(true);

	const closePopUp = useCallback(() => setIsVisible(false), []);

	const handleAddButtonClick = () => navigate(ROUTE_NAMES.OOCYTE_FORM);
	return (
		<div>
			<Header />
			<div className='oocytesList__addButton-container'>
				<button className='oocytesList__addButton' onClick={handleAddButtonClick} type='button'>
					Add a new oocyte for analysis
				</button>
			</div>
			<div className='oocytesList__items-container'>
				<div className='oocytesList__wrap'>
					<div className='oocytesList__item'>
						<div
							style={{
								backgroundImage: `url(${
									require('../../common/assets/icons/oocyteImage.svg').default
								})`,
							}}
							className='oocytesList__item-image'
						></div>
						<div className='oocytesList__item-info'>
							<div className='oocytesList__item-container'>
								<div className='oocytesList__icon-1'></div>
								<div>Patient ID</div>
							</div>
							<div className='oocytesList__item-container'>
								<div className='oocytesList__icon-2'></div>
								<div>Date</div>
							</div>
							<div className='oocytesList__item-container'>
								<div className='oocytesList__icon-3'></div>
								<div>Oocyte ID</div>
							</div>
							<div className='oocytesList__item-container'>
								<div className='oocytesList__icon-4'></div>
								<div>Age</div>
							</div>
						</div>
					</div>
					<div className='oocytesList__item-footer'>
						<div className='oocytesList__item-status'></div>
						<div>
							<button onClick={initiateDeletion} className='oocytesList__item-delete' type='button'>
								<img
									alt='Trash icon'
									src={require('../../common/assets/icons/deleteIcon.svg').default}
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
			{isVisible && <DeletePopUp closePopUp={closePopUp} />}
		</div>
	);
};
