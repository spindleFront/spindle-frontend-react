import { Data } from '../../common/interfaces/data';
import { useNavigate } from 'react-router-dom';
import { createRef, useContext, useEffect, useMemo } from 'react';
import { FileContext } from '../../common/context/context';
import { useScreenshot } from 'use-react-screenshot';
import { getStorage, ref, uploadString } from 'firebase/storage';
import { doc, DocumentData, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { ROUTE_NAMES } from '../../common/enums/routeNames';

export const useDetectionPhoto = (navigateTo: ROUTE_NAMES, data?: Data, file?: File) => {
	const navigate = useNavigate();
	const imageRef = createRef();
	const id = window.localStorage.getItem('id');
	const { setFile, oocyteData } = useContext(FileContext);

	const [image, takeScreenshot] = useScreenshot();

	const storage = getStorage();
	const storageRef = ref(storage, `${id}/${oocyteData?.photoId}`);

	const response = useMemo(() => {
		if (data) {
			const dataKey = Object.keys(data.data);
			return data.data[dataKey[0]];
		}
	}, [data]);

	const uploadDetectionImage = async (image: string) => {
		if (id) {
			await uploadString(storageRef, image, 'data_url').then((snapshot) => {});
			await setDoc<DocumentData>(doc(db, `${id}`, oocyteData?.photoId as string), {
				...oocyteData,
				aneuploid: response?.labelName || 'not detected',
			});
		}
	};

	useEffect(() => {
		if (data) {
			takeScreenshot(imageRef.current);
		}
	}, [file, data]);

	useEffect(() => {
		//if user is registered saving photo to a database
		if (image && id) {
			setFile(image);
			uploadDetectionImage(image);
		}
		if (image) {
			setFile(image);
			navigate(navigateTo);
		}
	}, [image]);

	const objectUrl = useMemo(() => {
		if (file instanceof Blob) {
			return URL.createObjectURL(file);
		}
	}, [file]);

	return { response, objectUrl, imageRef };
};
