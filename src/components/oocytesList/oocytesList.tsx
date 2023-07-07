import React, { useCallback, useContext, useState } from 'react';
import { Header } from '../header';
import { useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import { DeletePopUp } from '../deletePopUp';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Loader } from '../loader';
import { OocyteItem } from './oocyteItem';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import { FormValues } from '../../common/interfaces/FormValues';
import { useLoadListOfOocytes } from '../../common/hooks/useLoadListOfOocytes';
import { FileContext } from '../../common/context/context';
import './oocytesList.scss';

export const OocytesList = () => {
	const id = window.localStorage.getItem('id') || '';
	const { setOocytesList, oocytesList, isLoading } = useLoadListOfOocytes(id);
	const { setContextOocytesList } = useContext(FileContext);
	const [dataForDeletion, setDataForDeletion] = useState<{ id: string; oocyteId: string }>({
		id: '',
		oocyteId: '',
	});
	const navigate = useNavigate();
	const [isVisible, setIsVisible] = useState(false);
	const initiateDeletion = (oocyteId: string) => {
		setDataForDeletion({ id, oocyteId });
		setIsVisible(true);
	};

	const storage = getStorage();

	const removeItemFromStorage = async () => {
		// Create a reference for the file to delete
		const desertRef = ref(storage, `${dataForDeletion.id}/${dataForDeletion.oocyteId}`);

		// Delete the file
		deleteObject(desertRef)
			.then(() => {
				// File deleted successfully
			})
			.catch((error) => {
				console.error(error.message);
			});

		await deleteDoc(doc(db, dataForDeletion.id, dataForDeletion.oocyteId));
		setOocytesList((prevState: Partial<FormValues>[]) =>
			prevState.filter((item) => item?.photoId !== dataForDeletion.oocyteId)
		);
		setIsVisible(false);
	};

	const closePopUp = useCallback(() => {
		setDataForDeletion({ id: '', oocyteId: '' });
		setIsVisible(false);
	}, []);

	const handleItemClick = () => {
		setContextOocytesList(oocytesList);
	};

	const renderImages = () => {
		return (
			<>
				{oocytesList.map(
					({ photoId, oocyteAge, entityDate, patientID, aneuploid, image, oocyteNumber }) => {
						return (
							<div onClick={handleItemClick} key={photoId}>
								<OocyteItem
									photoId={photoId || '0'}
									initiateDeletion={initiateDeletion}
									oocyteId={oocyteNumber || '0'}
									oocyteAge={oocyteAge || '0'}
									img={image || ''}
									entityDate={entityDate || 0}
									patientID={patientID || '0'}
									aneuploid={aneuploid || '0'}
								/>
							</div>
						);
					}
				)}
			</>
		);
	};

	const handleAddButtonClick = () => navigate(ROUTE_NAMES.OOCYTE_FORM);

	return (
		<div>
			{isLoading && <Loader />}
			<Header />
			<div className='oocytesList__addButton-container'>
				<button className='oocytesList__addButton' onClick={handleAddButtonClick} type='button'>
					<span className='oocytesList__addButton-plus'></span>
					Add a new oocyte for analysis
				</button>
			</div>
			<div className='oocytesList__items-container'>{renderImages()}</div>
			{isVisible && <DeletePopUp removeItem={removeItemFromStorage} closePopUp={closePopUp} />}
		</div>
	);
};
