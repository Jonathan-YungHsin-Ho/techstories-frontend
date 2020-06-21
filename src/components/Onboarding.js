import React from 'react';
import {
	Container,
	Card,
	Grid,
	Divider,
	// Search,
} from 'semantic-ui-react';

import { data } from '../tempdata';

import OnboardingForm from './OnboardingForm';
import OnboardingCard from './OnboardingCard';

export default function Onboarding() {
	return (
		<Container>
			<Grid columns='equal'>
				<Grid.Column>
					<OnboardingForm />
				</Grid.Column>
				{/* <Grid.Column>
					<Search />
				</Grid.Column> */}
			</Grid>
			<Divider />
			<Card.Group centered>
				{data.map((story, index) => (
					<OnboardingCard story={story} key={index} />
				))}
			</Card.Group>
		</Container>
	);
}
