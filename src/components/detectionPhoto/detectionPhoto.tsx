import React from 'react';
import { Data } from '../../common/interfaces/data';
import { useDetectionPhoto } from './useDetectionPhoto';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import './detectionPhoto.scss';

interface DetectionPhoto {
	data?: Data;
	file?: File;
	navigateTo: ROUTE_NAMES;
}

export const DetectionPhoto: React.FC<DetectionPhoto> = ({ data, file, navigateTo }) => {
	const { imageRef, objectUrl, response } = useDetectionPhoto(navigateTo, data, file);

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
