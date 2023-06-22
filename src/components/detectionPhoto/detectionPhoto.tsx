import React from 'react';
import { Data } from '../../common/interfaces/data';
import { useDetectionPhoto } from './useDetectionPhoto';
import './detectionPhoto.scss';

interface DetectionPhoto {
	data?: Data;
	file?: File;
}

export const DetectionPhoto: React.FC<DetectionPhoto> = ({ data, file }) => {
	const { imageRef, objectUrl, response } = useDetectionPhoto(data, file);

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
