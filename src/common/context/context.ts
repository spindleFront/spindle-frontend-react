import { createContext } from 'react';
import { FormValues } from '../interfaces/FormValues';

export interface FileContextInterface {
	file: any;
	oocyteData?: Partial<FormValues>;
	setFile: (prevState: undefined) => void;
	setOocyteData: (prevState: Partial<FormValues>) => void;
}

const oocyteData = {
	patientID: '',
	entityDate: 0,
	oocyteId: '',
	oocyteAge: '',
};

export const FileContext = createContext<FileContextInterface>({
	file: '',
	oocyteData,
	setOocyteData: () => {},
	setFile: () => {},
});
