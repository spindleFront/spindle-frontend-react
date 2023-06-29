import { queryClient } from '../../index';
import { useContext, useEffect, useMemo } from 'react';
import { FileContext } from '../context/context';
import { SPINDLE_EUPLOIDY } from '../enums/spindleEuploidy';

export const useResultHook = () => {
	const mutationCache = queryClient.getMutationCache().getAll();
	const { file, oocyteData } = useContext(FileContext);

	const isSpindleDetected = useMemo(() => {
		if (mutationCache.length > 0) {
			// @ts-ignore
			const key = Object.keys(mutationCache[0].state.data?.data)[0];
			// @ts-ignore
			const dataFromMutation = mutationCache[0].state.data?.data[key];
			if (dataFromMutation?.labelName) {
				return dataFromMutation.labelName;
			} else {
				return 'no spindle detected';
			}
		}
	}, [mutationCache]);

	const borderColor = useMemo(() => {
		if (isSpindleDetected === SPINDLE_EUPLOIDY.ANEUPLOID) {
			return 'rgba(213, 54, 91, 0.7)';
		}
		if (isSpindleDetected === SPINDLE_EUPLOIDY.UEPLOID) {
			return 'rgba(66, 232, 224, 0.7)';
		}
		return 'rgba(245, 149, 27, 1)';
	}, [isSpindleDetected]);

	useEffect(() => {
		return () => {
			queryClient.clear();
		};
	}, []);

	return { file, oocyteData, borderColor, isSpindleDetected };
};
