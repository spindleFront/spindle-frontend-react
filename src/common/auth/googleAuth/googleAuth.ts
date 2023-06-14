import { getAuth, signInWithPopup } from 'firebase/auth';
import { provider } from './googleProvider';
import { app } from '../../../firebase';
import { NavigateFunction } from 'react-router-dom';

export const googleAuth = (navigate: NavigateFunction, where: string) => {
	const auth = getAuth(app);
	signInWithPopup(auth, provider)
		.then((result) => {
			const user = result.user;
			if (user && user.email !== null) {
				window.localStorage.setItem('user', user.email);
				navigate(where);
			}
		})
		.catch(() => {});
};
