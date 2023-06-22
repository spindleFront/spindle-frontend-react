import { signInWithPopup } from 'firebase/auth';
import { provider } from './facebookProvider';
import { NavigateFunction } from 'react-router-dom';
import { auth } from '../../../firebase';

export const faceBookLogin = (navigate: NavigateFunction, location: string) => {
	signInWithPopup(auth, provider)
		.then((result) => {
			const user = result.user;
			if (user && user.email !== null) {
				window.localStorage.setItem('user', user.email);
				navigate(location);
			}
		})
		.catch(() => {});
};
