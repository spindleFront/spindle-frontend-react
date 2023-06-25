import { queryClient } from '../../index';
import { useContext, useEffect, useMemo } from 'react';
import { FileContext } from '../context/context';

export const useResultHook = () => {
	const mutationCache = queryClient.getMutationCache().getAll();
	const { file, oocyteData } = useContext(FileContext);

	const isSpindleDetected = useMemo(() => {
		if (mutationCache.length > 0) {
			// @ts-ignore
			return Object.keys(mutationCache[0].state.data?.data).length > 0;
		}
	}, [mutationCache]);

	const borderColor = useMemo(
		() => (isSpindleDetected ? 'rgba(66, 232, 224, 0.7)' : 'rgba(213, 54, 91, 0.7)'),
		[isSpindleDetected]
	);

	useEffect(() => {
		return () => {
			queryClient.clear();
		};
	}, []);

	return { file, oocyteData, borderColor, isSpindleDetected };
};
