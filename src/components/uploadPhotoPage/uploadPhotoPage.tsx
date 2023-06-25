import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { sentImage } from '../../services/sentImage';
import { Logo } from '../logo';
import { useMutation } from '@tanstack/react-query';
import { Loader } from '../loader';
import './uploadPhotoPage.scss';

export const UploadPhotoPage = () => {
	const [file, setFile] = useState<File | undefined>();

	const { mutate, data, isLoading } = useMutation({
		mutationKey: ['sentImage'],
		mutationFn: sentImage,
	});
	const onDrop = useCallback((acceptedFiles: File[]) => {
		setFile(acceptedFiles[0]);
		mutate(acceptedFiles[0]);
	}, []);
	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<div className='container'>
			{isLoading && <Loader />}
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
				{/*<DetectionPhoto file={file as File} data={data} />*/}
			</div>
		</div>
	);
};
