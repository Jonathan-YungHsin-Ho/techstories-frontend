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
	internshipDuration: null,
	mentorProvided: null,
	positionOffered: null,
	experience: '',
	positiveInternship: null,
};

export default function InternshipForm({ data, setData }) {
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

		console.log(info);
		axios
			.post(`${process.env.REACT_APP_BACKEND_API}/internship`, info)
			.then((res) => {
				setData([...data, res.data.internship]);
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
							checked={info.companyType === 'Startup'}
							onChange={() => handleRadio('companyType', 'Startup')}
						/>
						<Form.Radio
							label='Enterprise'
							checked={info.companyType === 'Enterprise'}
							onChange={() => handleRadio('companyType', 'Enterprise')}
						/>
						<Form.Radio
							label='Other'
							checked={info.companyType === 'Other'}
							onChange={() => handleRadio('companyType', 'Other')}
						/>
					</Form.Group>
					<Form.Input
						label='Company Size'
						placeholder='Company Size'
						name='companySize'
						onChange={handleChange}
					/>
					<Form.Input
						label='Internship Duration'
						placeholder='Internship Duration'
						name='internshipDuration'
						onChange={handleChange}
					/>
					<Form.Group inline>
						<label>Were you assigned a mentor?</label>
						<Form.Radio
							label='Yes'
							checked={info.mentorProvided === true}
							onChange={() => handleRadio('mentorProvided', true)}
						/>
						<Form.Radio
							label='No'
							checked={info.mentorProvided === false}
							onChange={() => handleRadio('mentorProvided', false)}
						/>
					</Form.Group>
					<Form.Group inline>
						<label>
							Were you offered a position following your internship?
						</label>
						<Form.Radio
							label='Yes'
							checked={info.positionOffered === true}
							onChange={() => handleRadio('positionOffered', true)}
						/>
						<Form.Radio
							label='No'
							checked={info.positionOffered === false}
							onChange={() => handleRadio('positionOffered', false)}
						/>
					</Form.Group>
					<Form.TextArea
						required
						label='Your Experience'
						placeholder='Please share your internship experience...'
						name='experience'
						error={
							error && {
								content: 'This field is required',
							}
						}
						onChange={handleChange}
					/>
					<Form.Group inline>
						<label>Did you have a positive internship experience?</label>
						<Form.Radio
							label='Yes'
							checked={info.positiveInternship === true}
							onChange={() => handleRadio('positiveInternship', true)}
						/>
						<Form.Radio
							label='No'
							checked={info.positiveInternship === false}
							onChange={() => handleRadio('positiveInternship', false)}
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
