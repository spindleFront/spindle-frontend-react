export const setUserDataToLocalStorage = (userEmail: string, userId: string) => {
	window.localStorage.setItem('user', userEmail);
	window.localStorage.setItem('id', userId);
};
