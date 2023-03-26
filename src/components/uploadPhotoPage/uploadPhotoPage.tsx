import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { sentImage } from '../../services/sentImage';
import { Logo } from '../logo';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import './uploadPhotoPage.scss';

export const UploadPhotoPage = () => {
	const navigate = useNavigate();
	const { mutate } = useMutation({
		mutationKey: ['sentImage'],
		mutationFn: sentImage,
		onSuccess: () => {
			navigate('/detection');
		},
	});
	const onDrop = useCallback((acceptedFiles: File[]) => {
		return mutate(acceptedFiles[0]);
	}, []);
	const { getRootProps, getInputProps } = useDropzone({ onDrop });
	return (
		<div className='container'>
			<div className='logo-container'>
				<Logo />
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
