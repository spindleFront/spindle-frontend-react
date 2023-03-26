import axios from 'axios';

export const sentImage = async (file: File) => {
	const formData = new FormData();
	formData.append('file', file);
	const headers = {
		accept: 'application/json',
		'Content-Type': 'multipart/form-data',
	};
	return await axios.post(
		'https://ai-044.herokuapp.com/respindle',
		{ file: file },
		{
			headers: headers,
		}
	);
};
