import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { sentImage } from '../../services/sentImage';
import './uploadPhotoPage.scss';

export const UploadPhotoPage = () => {
	const onDrop = useCallback((acceptedFiles: File[]) => sentImage(acceptedFiles[0]), []);
	const { getRootProps, getInputProps } = useDropzone({ onDrop });
	return (
		<div className='container'>
			<div className='logo-container'>
				<img alt='Spindle logo' src={require('../../common/assets/icons/logo.svg').default} />
			</div>
			<div>
				<form className='upload-container'>
					<div className='dropzone' {...getRootProps()}>
						<div>
							<img
								alt='Upload image'
								src={require('../../common/assets/icons/Upload.svg').default}
							/>
						</div>
						<input {...getInputProps()} />
					</div>
					<div className='upload-text'>Upload a photo of your oocyte</div>
				</form>
			</div>
		</div>
	);
};
