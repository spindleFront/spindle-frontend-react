import { getAuth, signInWithPopup } from 'firebase/auth';
import { provider } from './facebookProvider';
import { NavigateFunction } from 'react-router-dom';

export const faceBookLogin = (navigate: NavigateFunction, location: string) => {
	const auth = getAuth();
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
