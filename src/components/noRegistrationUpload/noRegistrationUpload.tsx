import React from 'react';
import { Header } from '../header';
import { useSetImageForProcessing } from '../../common/hooks/useSetImageForProcessing';
import { Loader } from '../loader';
import { UploadContainer } from '../uploadContainer';
import { Button } from '../button';
import './noRegistrationUpload.scss';

export const NoRegistrationUpload = () => {
	const { file, background, arrowIcon, mutate, data, isLoading, getRootProps, getInputProps } =
		useSetImageForProcessing();

	const handleClick = () => {
		if (file) {
			mutate(file);
		}
	};

	return (
		<div>
			{isLoading && <Loader />}
			<Header />
			<div className='noRegistration'>
				<div className='noRegistration__background'>
					<UploadContainer
						file={file}
						background={background}
						getRootProps={getRootProps}
						getInputProps={getInputProps}
						arrowIcon={arrowIcon}
					/>
					<div className='noRegistration__button-container'>
						<Button style='contained' text='Analyze' onClick={handleClick} />
					</div>
				</div>
			</div>
		</div>
	);
};
