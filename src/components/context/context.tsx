import React, { ReactNode, useState } from 'react';
import { FileContext, FileContextInterface } from '../../common/context/context';

interface ContextProps {
	children: ReactNode;
}

export const Context: React.FC<ContextProps> = ({ children }) => {
	const [file, setFile] = useState<FileContextInterface>();
	const value = { file, setFile };
	return <FileContext.Provider value={value}>{children}</FileContext.Provider>;
};
