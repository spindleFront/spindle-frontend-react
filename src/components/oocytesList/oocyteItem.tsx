import React from 'react';

export interface OocyteItemProps {
	initiateDeletion: () => void;
	patientID?: string;
	entityDate?: string;
	oocyteId?: string;
	oocyteAge?: string;
	img: string;
	aneuploid?: boolean;
}

export const OocyteItem: React.FC<OocyteItemProps> = ({
	initiateDeletion,
	oocyteId,
	oocyteAge,
	entityDate,
	patientID,
	img,
	aneuploid,
}) => {
	return (
		<div className='oocytesList__wrap'>
			<div className='oocytesList__item'>
				<div
					style={{
						backgroundImage: `url(${img})`,
					}}
					className='oocytesList__item-image'
				></div>
				<div className='oocytesList__item-info'>
					<div className='oocytesList__item-container'>
						<div className='oocytesList__icon-1'></div>
						<div>{patientID}</div>
					</div>
					<div className='oocytesList__item-container'>
						<div className='oocytesList__icon-2'></div>
						<div>{entityDate}</div>
					</div>
					<div className='oocytesList__item-container'>
						<div className='oocytesList__icon-3'></div>
						<div>{oocyteId}</div>
					</div>
					<div className='oocytesList__item-container'>
						<div className='oocytesList__icon-4'></div>
						<div>{oocyteAge}</div>
					</div>
				</div>
			</div>
			<div className='oocytesList__item-footer'>
				<div
					className='oocytesList__item-status'
					style={{
						backgroundImage: aneuploid
							? `url(${require('../../common/assets/icons/euploid.svg').default})`
							: `url(${require('../../common/assets/icons/uneuploid.svg').default})`,
					}}
				></div>
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
	);
};
