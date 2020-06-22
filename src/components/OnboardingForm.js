import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, Form } from 'semantic-ui-react';

const initialInfo = {
	name: null,
	email: null,
	company: null,
	companyURL: null,
	industry: null,
	companyType: null,
	companySize: null,
	onboardingDuration: null,
	mentorProvided: null,
	experience: '',
	positiveOnboarding: null,
};

export default function OnboardingForm({ data, setData }) {
	const [info, setInfo] = useState(initialInfo);
	const [error, setError] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	const handleChange = (e) =>
		setInfo({ ...info, [e.target.name]: e.target.value });

	const handleRadio = (field, value) => setInfo({ ...info, [field]: value });

	const handleSubmit = () => {
		if (!info.experience) {
			setError(true);
			return;
		}

		// console.log(info);
		axios
			.post('https://techstories.herokuapp.com/api/onboarding', info)
			.then((res) => {
				setData([...data, res.data.onboarding]);
				setInfo(initialInfo);
				setModalOpen(false);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Modal
			trigger={
				<Button onClick={() => setModalOpen(true)} content='Share Your Story' />
			}
			size='tiny'
			dimmer='inverted'
			open={modalOpen}
			onClose={() => setModalOpen(false)}
			closeIcon>
			<Modal.Header>Share Your Story</Modal.Header>
			<Modal.Content>
				<Form>
					<Form.Group widths='equal'>
						<Form.Input
							fluid
							label='Your Name'
							placeholder='Your name'
							name='name'
							onChange={handleChange}
						/>
						<Form.Input
							fluid
							label='Email'
							placeholder='Email'
							name='email'
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group widths='equal'>
						<Form.Input
							fluid
							label='Company'
							placeholder='Company'
							name='company'
							onChange={handleChange}
						/>
						<Form.Input
							fluid
							label='Industry'
							placeholder='Industry'
							name='industry'
							onChange={handleChange}
						/>
					</Form.Group>
					{/* <Form.Input
						label='Company Website'
						placeholder='Company Website'
						name='companyURL'
						onChange={handleChange}
					/> */}
					<Form.Group name='companyType' inline>
						<label>Company Type:</label>
						<Form.Radio
							label='Startup'
							// value='Startup'
							checked={info.companyType === 'Startup'}
							onChange={() => handleRadio('companyType', 'Startup')}
						/>
						<Form.Radio
							label='Enterprise'
							// value='Enterprise'
							checked={info.companyType === 'Enterprise'}
							onChange={() => handleRadio('companyType', 'Enterprise')}
						/>
					</Form.Group>
					<Form.Input
						label='Company Size'
						placeholder='Company Size'
						name='companySize'
						onChange={handleChange}
					/>
					<Form.Input
						label='Onboarding Duration'
						placeholder='Onboarding Duration'
						name='onboardingDuration'
						onChange={handleChange}
					/>
					<Form.Group inline>
						<label>Were you assigned a mentor?</label>
						<Form.Radio
							label='Yes'
							// value={true}
							checked={info.mentorProvided === true}
							onChange={() => handleRadio('mentorProvided', true)}
						/>
						<Form.Radio
							label='No'
							// value={false}
							checked={info.mentorProvided === false}
							onChange={() => handleRadio('mentorProvided', false)}
						/>
					</Form.Group>
					<Form.TextArea
						required
						label='Your Experience'
						placeholder='Please share your onboarding experience...'
						name='experience'
						error={
							error && {
								content: 'This field is required',
							}
						}
						onChange={handleChange}
					/>
					<Form.Group inline>
						<label>Did you have a positive onboarding experience?</label>
						<Form.Radio
							label='Yes'
							// value={true}
							checked={info.positiveOnboarding === true}
							onChange={() => handleRadio('positiveOnboarding', true)}
						/>
						<Form.Radio
							label='No'
							// value={false}
							checked={info.positiveOnboarding === false}
							onChange={() => handleRadio('positiveOnboarding', false)}
						/>
					</Form.Group>
				</Form>
			</Modal.Content>
			<Modal.Actions>
				<Button content='Submit' onClick={handleSubmit} />
			</Modal.Actions>
		</Modal>
	);
}
