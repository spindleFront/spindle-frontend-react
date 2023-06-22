import React, { ReactNode, useState } from 'react';
import { FileContext, FileContextInterface } from '../../common/context/context';
import { FormValues } from '../../common/interfaces/FormValues';

interface ContextProps {
	children: ReactNode;
}

export const Context: React.FC<ContextProps> = ({ children }) => {
	const [file, setFile] = useState<FileContextInterface>();
	const [oocyteData, setOocyteData] = useState<Partial<FormValues>>();
	const value = { file, setFile, oocyteData, setOocyteData };
	return <FileContext.Provider value={value}>{children}</FileContext.Provider>;
};
