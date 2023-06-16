import React from 'react';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import { Input } from '../input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../../common/interfaces/FormValues';
import { Header } from '../header';
import './oocyteForm.scss';

export const OocyteForm = () => {
	const { register, handleSubmit } = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

	return (
		<div className='oocyteForm'>
			<Header />
			<main className='oocyteForm__main'>
				<div className='oocyteForm__back-link-container'>
					<Link className='oocyteForm__backButton' to={'/oocyte-list'}>
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
						<div className='oocyteForm__dropArea'>
							<div className='oocyteForm__dropArea-image'></div>
							<div>Upload an image of oocyte</div>
						</div>
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
										<div className='formItem-2'></div>
										<div className='oocyteForm__form-item-text'>Entity Date</div>
									</div>
									<Input
										register={register}
										type='text'
										name='entityDate'
										placeholder='XX/YY/2023'
									/>
								</div>

								<div className='oocyteForm__form-item'>
									<div className='oocyteForm__form-item-label'>
										<div className='formItem-3'></div>
										<div className='oocyteForm__form-item-text'>Oocyte ID</div>
									</div>
									<Input register={register} type='text' name='oocyteId' placeholder='Oocyte ID' />
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
		</div>
	);
};
