import React from 'react';
import { Container, Card } from 'semantic-ui-react';

import { data } from '../tempdata';

import OnboardingCard from './OnboardingCard';

export default function Onboarding() {
	return (
		<Container>
			<Card.Group centered>
				{data.map((story) => (
					<OnboardingCard story={story} />
				))}
			</Card.Group>
		</Container>
	);
}
