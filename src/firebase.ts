import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
	apiKey: 'AIzaSyDuY0vI4w0JacFlX6gNSh70nvppPIVgn-M',
	authDomain: 'respindle.firebaseapp.com',
	projectId: 'respindle',
	storageBucket: 'respindle.appspot.com',
	messagingSenderId: '528002794237',
	appId: '1:528002794237:web:1ed6e2ac6644e764927494',
	measurementId: 'G-609SSLM1PX',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
