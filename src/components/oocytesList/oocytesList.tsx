import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../header';
import { useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import { DeletePopUp } from '../deletePopUp';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../loader';
import { FormValues } from '../../common/interfaces/FormValues';
import { queryClient } from '../../index';
import './oocytesList.scss';

interface OocyteItemProps {
	initiateDeletion: () => void;
	patientID?: string;
	entityDate?: string;
	oocyteId?: string;
	oocyteAge?: string;
	img: string;
	aneuploid?: boolean;
}

const OocyteItem: React.FC<OocyteItemProps> = ({
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
						backgroundImage: img,
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

export const OocytesList = () => {
	const id = window.localStorage.getItem('id') || '';
	const navigate = useNavigate();
	const [oocyteData, setOOcyteData] = useState<Partial<FormValues>[] | []>([]);
	const [isVisible, setIsVisible] = useState(false);
	const initiateDeletion = () => setIsVisible(true);

	const closePopUp = useCallback(() => setIsVisible(false), []);

	const getQuery = query(collection(db, id));

	const getData = async (): Promise<any> => await getDocs(getQuery);

	const { data, isLoading } = useQuery({ queryKey: ['oocytes'], queryFn: getData });

	useEffect(() => {
		if (data) {
			data.forEach((doc: any) => setOOcyteData((state) => [...state, doc.data()]));
		}
	}, [data]);

	useEffect(() => {
		return () => {
			queryClient.clear();
			setOOcyteData([]);
		};
	}, []);

	const handleAddButtonClick = () => navigate(ROUTE_NAMES.OOCYTE_FORM);
	return (
		<div>
			{isLoading && <Loader />}
			<Header />
			<div className='oocytesList__addButton-container'>
				<button className='oocytesList__addButton' onClick={handleAddButtonClick} type='button'>
					Add a new oocyte for analysis
				</button>
			</div>
			<div className='oocytesList__items-container'>
				{oocyteData.map(({ oocyteId, oocyteAge, entityDate, patientID, aneuploid }) => {
					return (
						<OocyteItem
							key={oocyteId}
							initiateDeletion={initiateDeletion}
							oocyteId={oocyteId || '0'}
							oocyteAge={oocyteAge || '0'}
							img='ss'
							entityDate={entityDate || '0'}
							patientID={patientID || '0'}
							aneuploid={aneuploid || false}
						/>
					);
				})}
			</div>
			{isVisible && <DeletePopUp closePopUp={closePopUp} />}
		</div>
	);
};
