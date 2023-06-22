import { signInWithPopup } from 'firebase/auth';
import { provider } from './googleProvider';
import { auth } from '../../../firebase';
import { NavigateFunction } from 'react-router-dom';

export const googleAuth = (navigate: NavigateFunction, location: string) => {
	signInWithPopup(auth, provider)
		.then((result) => {
			const user = result.user;
			if (user && user.email !== null) {
				window.localStorage.setItem('user', user.email);
				window.localStorage.setItem('id', user.uid);
				navigate(location);
			}
		})
		.catch(() => {});
};
