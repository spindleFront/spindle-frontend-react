import { SPINDLE_EUPLOIDY } from '../enums/spindleEuploidy';
import React from 'react';

export const markupOfDetection = (isSpindleDetected: SPINDLE_EUPLOIDY) => {
	if (isSpindleDetected === SPINDLE_EUPLOIDY.ANEUPLOID) {
		return <div className='aneuploid-img'></div>;
	}
	if (isSpindleDetected === SPINDLE_EUPLOIDY.UEPLOID) {
		return <div className='euploid-img'></div>;
	}
	return (
		<span className='euploid-noDetection'>
			Sorry, spindle not detected. <br /> Please try downloading the <br /> image with higher
			quality.
		</span>
	);
};
