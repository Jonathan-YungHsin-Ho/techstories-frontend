import React from 'react';
import { Form } from 'semantic-ui-react';

export const initialFirstJobSearchInfo = {
	name: null,
	email: null,
	role: null,
	education: null,
	jobSearchDuration: null,
	applicationsSent: null,
	initialInterviews: null,
	followupInterviews: null,
	finalInterviews: null,
	jobOffers: null,
	experience: '',
};

export default function FirstJobSearchForm({ error, handleChange }) {
	return (
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
					label='Role(s) Applying For'
					placeholder='Role(s) Applying For'
					name='role'
					onChange={handleChange}
				/>
				<Form.Input
					fluid
					label='Education/Training'
					placeholder='Education/Training'
					name='education'
					onChange={handleChange}
				/>
			</Form.Group>
			<Form.Group widths='equal'>
				<Form.Input
					fluid
					label='Job Search Duration'
					placeholder='Job Search Duration'
					name='jobSearchDuration'
					onChange={handleChange}
				/>
				<Form.Input
					fluid
					label='Applications Sent'
					placeholder='Applications Sent'
					name='applicationsSent'
					onChange={handleChange}
				/>
			</Form.Group>
			<Form.Group widths='equal'>
				<Form.Input
					fluid
					label='Initial Interviews'
					placeholder='Initial Interviews'
					name='initialInterviews'
					onChange={handleChange}
				/>
				<Form.Input
					fluid
					label='Followup Interviewes'
					placeholder='Followup Interviewes'
					name='followupInterviews'
					onChange={handleChange}
				/>
			</Form.Group>
			<Form.Group widths='equal'>
				<Form.Input
					fluid
					label='Final Interviews'
					placeholder='Final Interviews'
					name='finalInterviews'
					onChange={handleChange}
				/>
				<Form.Input
					fluid
					label='Job Offers'
					placeholder='Job Offers'
					name='jobOffers'
					onChange={handleChange}
				/>
			</Form.Group>
			<Form.TextArea
				required
				label='Your Experience'
				placeholder='Please share your job search experience...'
				name='experience'
				error={
					error && {
						content: 'This field is required',
					}
				}
				onChange={handleChange}
			/>
		</Form>
	);
}
