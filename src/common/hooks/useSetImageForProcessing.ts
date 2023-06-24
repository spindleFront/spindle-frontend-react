import { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@tanstack/react-query';
import { sentImage } from '../../services/sentImage';

export const useSetImageForProcessing = () => {
	const [file, setFile] = useState<File | undefined>(undefined);

	const onDrop = useCallback((acceptedFiles: File[]) => {
		setFile(acceptedFiles[0]);
	}, []);

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	const { mutate, data, isLoading } = useMutation({
		mutationKey: ['sentImage'],
		mutationFn: sentImage,
	});

	const imageUrl = useMemo(() => {
		if (file instanceof Blob) {
			return URL.createObjectURL(file);
		}
	}, [file, setFile]);

	const background = useMemo(() => file && `url(${imageUrl})`, [file]);

	const arrowIcon = useMemo(
		() => (file ? '' : `url(${require('../../common/assets/icons/uploadIconNew.svg').default})`),
		[file]
	);

	return {
		file,
		background,
		arrowIcon,
		mutate,
		data,
		isLoading,
		getRootProps,
		getInputProps,
	};
};
