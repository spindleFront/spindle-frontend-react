import React from 'react';
import { RoutesType } from '../interfaces/routesType';
import { ROUTE_NAMES } from '../enums/routeNames';
import { AneuploidyDetection } from '../../components/aneuploidyDetection';
import { Preclinical } from '../../components/preclinical';
import { About } from '../../components/about';
import { SignIn } from '../../components/signIn';
import { SignUp } from '../../components/signUp';
import { OocyteForm } from '../../components/oocyteForm';
import { OocytesList } from '../../components/oocytesList';
import { EuploidResult } from '../../components/aneuploid';
import { NoRegistrationUpload } from '../../components/noRegistrationUpload';
import { NoRegistrationResult } from '../../components/noRegistrationResult';

export const ROUTES: RoutesType[] = [
	{ path: ROUTE_NAMES.UPLOAD, element: <NoRegistrationUpload />, hidden: false },
	{
		path: ROUTE_NAMES.DETECTION,
		element: <AneuploidyDetection />,
		hidden: false,
	},
	{
		path: ROUTE_NAMES.PRECLINICAL,
		element: <Preclinical />,
		hidden: false,
	},
	{
		path: ROUTE_NAMES.HOME,
		element: <About />,
		hidden: false,
	},
	{
		path: ROUTE_NAMES.SIGN_IN,
		element: <SignIn />,
		hidden: false,
	},
	{
		path: ROUTE_NAMES.SIGN_UP,
		element: <SignUp />,
		hidden: false,
	},
	{
		path: ROUTE_NAMES.OOCYTE_FORM,
		element: <OocyteForm />,
		hidden: true,
	},
	{
		path: ROUTE_NAMES.OOCYTES_LIST,
		element: <OocytesList />,
		hidden: true,
	},

	{
		path: ROUTE_NAMES.RESULT,
		element: <EuploidResult />,
		hidden: true,
	},
	{
		path: ROUTE_NAMES.UNREGISTERED_RESULT,
		element: <NoRegistrationResult />,
		hidden: false,
	},
];
