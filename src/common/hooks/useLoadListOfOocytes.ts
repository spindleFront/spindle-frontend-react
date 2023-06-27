import { useEffect, useState } from 'react';
import { FormValues } from '../interfaces/FormValues';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../../index';

export const useLoadListOfOocytes = (id: string) => {
	const [oocytesList, setOocytesList] = useState<Partial<FormValues>[] | []>([]);
	const storage = getStorage();

	const getData = async (): Promise<any> => {
		const getQuery = query(collection(db, id));
		return await getDocs(getQuery);
	};

	const getImageUrls = async (oocyteID: string) => {
		return await getDownloadURL(ref(storage, `${id}/${oocyteID}`));
	};

	const { data, isLoading } = useQuery({ queryKey: ['oocytes'], queryFn: getData });

	useEffect(() => {
		if (data) {
			data.forEach(async (doc: any) => {
				const image = await getImageUrls(doc.data().oocyteId);
				setOocytesList((state) => {
					return [...state, { ...doc.data(), image }];
				});
			});
		}
	}, [data]);

	useEffect(() => {
		return () => {
			queryClient.clear();
		};
	}, []);

	return { oocytesList, isLoading, setOocytesList };
};
