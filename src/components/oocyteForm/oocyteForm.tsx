import React, { useContext } from 'react';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import { Input } from '../input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../../common/interfaces/FormValues';
import { Header } from '../header';
import { Loader } from '../loader';
import { DetectionPhoto } from '../detectionPhoto';
import { ROUTE_NAMES } from '../../common/enums/routeNames';
import { FileContext } from '../../common/context/context';
import { useSetImageForProcessing } from '../../common/hooks/useSetImageForProcessing';
import { UploadContainer } from '../uploadContainer';
import { v4 as uuid4 } from 'uuid';
import './oocyteForm.scss';

export const OocyteForm = () => {
	const photoId = uuid4();
	const {
		file,
		background,
		arrowIcon,
		mutate,
		data,
		isLoading,
		getRootProps,
		getInputProps,
		setFile,
	} = useSetImageForProcessing();

	const { setOocyteData } = useContext(FileContext);

	const { register, handleSubmit } = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		const entityDate = new Date().getTime();
		setOocyteData({ ...data, photoId, entityDate });
		await mutate(file as File);
	};

	const handleAnotherImageClick = () => setFile(undefined);

	return (
		<div className='oocyteForm'>
			{isLoading && <Loader />}
			<Header />
			<main className='oocyteForm__main'>
				<div className='oocyteForm__back-link-container'>
					<Link className='oocyteForm__backButton' to={ROUTE_NAMES.OOCYTES_LIST}>
						<div className='oocyteForm__backButton-arrow'>
							<img
								alt='Image of arrow'
								src={require('../../common/assets/icons/leftArrow.svg').default}
							/>
						</div>
						<div> Back to the Oocytes list</div>
					</Link>
				</div>
				<div className='oocyteForm__main-container'>
					<div className='oocyteForm__uploadContainer'>
						<UploadContainer
							file={file}
							background={background}
							getRootProps={getRootProps}
							getInputProps={getInputProps}
							arrowIcon={arrowIcon}
						/>
						{file && (
							<div className='delete-button-container'>
								<button onClick={handleAnotherImageClick} className='deletePhoto' type='button'>
									Upload another image
								</button>
							</div>
						)}
					</div>

					<div className='oocyteForm__oocyte-description'>
						<form onSubmit={handleSubmit(onSubmit)} className='oocyteForm__form'>
							<div className='oocyteForm__form-container'>
								<div className='oocyteForm__form-item'>
									<div className='oocyteForm__form-item-label'>
										<div className='formItem-1'></div>
										<div className='oocyteForm__form-item-text'>Patient ID</div>
									</div>
									<Input
										register={register}
										type='text'
										name='patientID'
										placeholder='Patient ID'
									/>
								</div>

								<div className='oocyteForm__form-item'>
									<div className='oocyteForm__form-item-label'>
										<div className='formItem-3'></div>
										<div className='oocyteForm__form-item-text'>Oocyte Number</div>
									</div>
									<Input
										register={register}
										type='text'
										name='oocyteNumber'
										placeholder='Oocyte Number'
									/>
								</div>

								<div className='oocyteForm__form-item'>
									<div className='oocyteForm__form-item-label'>
										<div className='formItem-4'></div>
										<div className='oocyteForm__form-item-text'>Oocyte Age</div>
									</div>
									<Input register={register} type='text' name='oocyteAge' placeholder='35 years' />
								</div>
							</div>
							<div className='oocyteForm__form-button-container'>
								<Button style='contained' text='Analyze' type='submit' />
							</div>
						</form>
					</div>
				</div>
			</main>
			<DetectionPhoto navigateTo={ROUTE_NAMES.RESULT} file={file as File} data={data} />
		</div>
	);
};
