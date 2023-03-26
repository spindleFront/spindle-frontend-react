import React, { useCallback, useMemo } from 'react';
import { queryClient } from '../../index';
import { useNavigate } from 'react-router-dom';
import './aneuploidyDetection.scss';

export const AneuploidyDetection: React.FC = () => {
	const navigate = useNavigate();
	const handleCheckButtonClick = useCallback(() => navigate('/preclinical'), []);
	const mutations = queryClient.getMutationCache().getAll();
	const file = useMemo(() => {
		if (mutations.length > 0) {
			return mutations[0].state.variables;
		}
		return {};
	}, [mutations]);

	const objectUrl = useMemo(() => {
		if (file instanceof Blob) {
			return file && URL.createObjectURL(file);
		}
	}, [file]);

	return (
		<div>
			<div className='info-container'>
				<div style={{ backgroundImage: `url(${objectUrl})` }} className='image-container'></div>
				<div className='info'>
					<h3 className='info__header'> Spindle detected </h3>
					<p className='info__description'>
						It assembles around the chromosomes and distributes the duplicated genome to the
						daughter cells during mitosis.
					</p>
					<ul className='info__list'>
						<li className='info__list--item'>
							<div className='info__list--circle'>
								<div className='info__list--circle--number'>1</div>
							</div>
							<p className='info__list--text'>
								Spindles are different between euploid and aneuploid oocytes
							</p>
						</li>
						<li className='info__list--item'>
							<div className='info__list--circle'>
								<div className='info__list--circle--number'>2</div>
							</div>
							<p className='info__list--text'>
								Visual assessment of oocytes’ spindles can predict aneuploidy
							</p>
						</li>
						<li className='info__list--item'>
							<div className='info__list--circle'>
								<div className='info__list--circle--number'>3</div>
							</div>
							<p className='info__list--text'>ReSpindle’s AI can automate aneuploidy prediction</p>
						</li>
					</ul>
					<div className='check-button-container'>
						<button onClick={handleCheckButtonClick} className='check-button'>
							Check aneuploidy status
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
