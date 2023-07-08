import { signInWithPopup } from 'firebase/auth';
import { provider } from './googleProvider';
import { auth } from '../../../firebase';
import { NavigateFunction } from 'react-router-dom';
import { setUserDataToLocalStorage } from '../../helpers/setUserData';

export const googleAuth = (navigate: NavigateFunction, location: string) => {
	signInWithPopup(auth, provider)
		.then((result) => {
			const user = result.user;
			if (user && user.email !== null) {
				setUserDataToLocalStorage(user.email, user.uid);
				navigate(location);
			}
		})
		.catch((error) => {
			console.error(error.message);
		});
};
