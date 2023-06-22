import React, { createRef, useContext, useEffect, useMemo } from 'react';
import { useScreenshot } from 'use-react-screenshot';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { FileContext } from '../../common/context/context';
import { getStorage, ref, uploadString } from 'firebase/storage';
import './detectionPhoto.scss';

type Data = AxiosResponse | undefined;

interface DetectionPhoto {
	data?: Data;
	file?: File;
}

export const DetectionPhoto: React.FC<DetectionPhoto> = ({ data, file }) => {
	const navigate = useNavigate();
	const imageRef = createRef();
	const id = window.localStorage.getItem('id');
	const { setFile, oocyteData } = useContext(FileContext);

	const [image, takeScreenshot] = useScreenshot();

	const storage = getStorage();
	const storageRef = ref(storage, `${id}/${oocyteData?.oocyteId}`);

	const uploadDetectionImage = async (image: string) => {
		uploadString(storageRef, image, 'data_url').then((snapshot) => {
			console.log('Uploaded a data_url string!');
		});
	};

	useEffect(() => {
		if (data) {
			takeScreenshot(imageRef.current);
		}
	}, [file, data]);

	useEffect(() => {
		if (image) {
			setFile(image);
			uploadDetectionImage(image);
			navigate(ROUTE_NAMES.RESULT);
		}
	}, [image]);

	const objectUrl = useMemo(() => {
		if (file instanceof Blob) {
			return URL.createObjectURL(file);
		}
	}, [file]);

	const response = useMemo(() => {
		if (data) {
			const dataKey = Object.keys(data.data);
			return data.data[dataKey[0]];
		}
	}, [data]);

	return (
		<div>
			<div className='hide'>
				<div className='spindle-container' ref={imageRef as React.RefObject<HTMLDivElement>}>
					<img alt='spindle-image' src={objectUrl} />
					<div
						style={{
							top: response && response.coordinates.ymin,
							left: response && response.coordinates.xmin,
						}}
						className='spindle-locator'
					></div>
				</div>
			</div>
		</div>
	);
};
