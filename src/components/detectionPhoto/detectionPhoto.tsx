import React, { createRef, useEffect, useMemo } from 'react';
import { queryClient } from '../../index';
import { useScreenshot } from 'use-react-screenshot';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import './detectionPhoto.scss';

type Data = AxiosResponse | undefined;

interface DetectionPhoto {
	data?: Data;
	file?: File;
}

export const DetectionPhoto: React.FC<DetectionPhoto> = ({ data, file }) => {
	const navigate = useNavigate();
	const imageRef = createRef();

	const [image, takeScreenshot] = useScreenshot();

	useEffect(() => {
		if (file && data) {
			takeScreenshot(imageRef.current);
		}
	}, [file, data]);

	useEffect(() => {
		if (image) {
			navigate(ROUTE_NAMES.DETECTION);
		}
	}, [image]);

	queryClient.setQueryData(['image'], image);

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
