import React from 'react';

export interface OocyteItemProps {
	initiateDeletion: (oocyteId: string) => void;
	patientID?: string;
	entityDate?: number;
	oocyteId?: string;
	oocyteAge?: string;
	img: string;
	aneuploid?: boolean;
	photoId?: string;
}

export const OocyteItem: React.FC<OocyteItemProps> = ({
	initiateDeletion,
	oocyteId,
	oocyteAge,
	entityDate,
	patientID,
	img,
	aneuploid,
	photoId,
}) => {
	const formatDate = (date: number | undefined) => {
		if (date) {
			return new Date(date).toLocaleString('en-US', {
				month: 'numeric',
				day: 'numeric',
				year: 'numeric',
			});
		}
	};
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
						<div>{formatDate(entityDate)}</div>
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
					<button
						onClick={() => initiateDeletion(photoId as string)}
						className='oocytesList__item-delete'
						type='button'
					>
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
