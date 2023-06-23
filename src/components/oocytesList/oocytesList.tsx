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
import { OocyteItem } from './oocyteItem';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import './oocytesList.scss';

export const OocytesList = () => {
	const id = window.localStorage.getItem('id') || '';
	const navigate = useNavigate();
	const [oocyteData, setOocyteData] = useState<Partial<FormValues>[] | []>([]);
	const [isVisible, setIsVisible] = useState(false);
	const initiateDeletion = () => setIsVisible(true);

	const closePopUp = useCallback(() => setIsVisible(false), []);

	const getQuery = query(collection(db, id));

	const getData = async (): Promise<any> => await getDocs(getQuery);

	const { data, isLoading } = useQuery({ queryKey: ['oocytes'], queryFn: getData });

	const storage = getStorage();

	const getImageUrls = async (oocyteID: string) => {
		return await getDownloadURL(ref(storage, `${id}/${oocyteID}`));
	};

	const renderImages = () => {
		return (
			<>
				{oocyteData.map(({ oocyteId, oocyteAge, entityDate, patientID, aneuploid, image }) => {
					return (
						<OocyteItem
							key={oocyteId}
							initiateDeletion={initiateDeletion}
							oocyteId={oocyteId || '0'}
							oocyteAge={oocyteAge || '0'}
							img={image || ''}
							entityDate={entityDate || '0'}
							patientID={patientID || '0'}
							aneuploid={aneuploid || false}
						/>
					);
				})}
			</>
		);
	};

	useEffect(() => {
		if (data) {
			data.forEach(async (doc: any) => {
				const image = await getImageUrls(doc.data().oocyteId);

				setOocyteData((state) => {
					return [...state, { ...doc.data(), image }];
				});
			});
		}
	}, [data]);

	useEffect(() => {
		return () => {
			queryClient.clear();
			setOocyteData([]);
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
			<div className='oocytesList__items-container'>{renderImages()}</div>
			{isVisible && <DeletePopUp closePopUp={closePopUp} />}
		</div>
	);
};
