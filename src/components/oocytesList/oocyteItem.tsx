import React from 'react';
import { SPINDLE_EUPLOIDY } from '../../common/enums/spindleEuploidy';
import { formatDate } from '../../common/helpers/formatDate';
import { Link } from 'react-router-dom';
import { ROUTE_NAMES } from '../../common/enums/routeNames';

export interface OocyteItemProps {
	initiateDeletion: (oocyteId: string) => void;
	patientID?: string;
	entityDate?: number;
	oocyteId?: string;
	oocyteAge?: string;
	img: string;
	aneuploid?: string;
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
	const aneuploidyLabel = () => {
		if (aneuploid === SPINDLE_EUPLOIDY.ANEUPLOID) {
			return `url(${require('../../common/assets/icons/uneuploid.svg').default})`;
		}
		if (aneuploid === SPINDLE_EUPLOIDY.UEPLOID) {
			return `url(${require('../../common/assets/icons/euploid.svg').default})`;
		}
		return `url(${require('../../common/assets/icons/undetected.svg').default})`;
	};
	return (
		<div className='oocytesList__wrap'>
			<Link
				className='oocytesList__dynamic-link'
				to={{ pathname: ROUTE_NAMES.DETAILS, search: `id=${photoId}` }}
			>
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
			</Link>
			<div className='oocytesList__item-footer'>
				<div
					className='oocytesList__item-status'
					style={{
						backgroundImage: aneuploidyLabel(),
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
