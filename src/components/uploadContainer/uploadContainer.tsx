import { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';
import React from 'react';
import './uploadContainer.scss';

export interface UploadContainerProps {
	getRootProps: <T extends DropzoneRootProps>(props?: T) => T;
	getInputProps: <T extends DropzoneInputProps>(props?: T) => T;
	background: string | undefined;
	arrowIcon: string;
	file: File | undefined;
}

export const UploadContainer: React.FC<UploadContainerProps> = ({
	getRootProps,
	background,
	arrowIcon,
	getInputProps,
	file,
}) => {
	return (
		<div
			{...getRootProps()}
			className='upload__area'
			style={{
				backgroundImage: background,
			}}
		>
			<div
				style={{
					backgroundImage: arrowIcon,
				}}
				className='upload__area-image'
			></div>
			<input {...getInputProps()} />

			<div>{file ? '' : 'Upload an image of oocyte'}</div>
		</div>
	);
};
