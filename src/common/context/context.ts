import { createContext } from 'react';

export interface FileContextInterface {
	file: any;
	setFile: (prevState: undefined) => void;
}

export const FileContext = createContext<FileContextInterface>({
	file: '',
	setFile: () => {},
});
