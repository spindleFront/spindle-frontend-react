import axios from 'axios';

export const sentImage = async (file: File) => {
	const headers = {
		'Content-Type': 'multipart/form-data',
		apikey: '9rkht30f7g11k7ikoc5iygafipfrwbg',
		apisecret: '362z4dpd5fvyinrlxzvwp766ecr6svubj8eu71h7xigizjrfququ98oznry2uz',
	};
	return await axios.post(
		'https://predict.app.landing.ai/inference/v1/predict?endpoint_id=6a6cd444-6b4c-4fe4-a092-b71fa693e797',
		{ file: file },
		{
			headers: headers,
		}
	);
};
