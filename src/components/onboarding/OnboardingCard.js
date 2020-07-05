import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default function OnboardingCard({ story }) {
	return (
		<Card color={story.positiveOnboarding ? 'green' : 'red'}>
			<Card.Content>
				{story.name && (
					<div>
						<span className='bold'>Name:</span> {story.name}
					</div>
				)}
				{story.company && (
					<div>
						<span className='bold'>Company:</span> {story.company}
					</div>
				)}
				{story.industry && (
					<div>
						<span className='bold'>Industry:</span> {story.industry}
					</div>
				)}
				{story.companyType && (
					<div>
						<span className='bold'>Company Type:</span> {story.companyType}
					</div>
				)}
				{story.companySize && (
					<div>
						<span className='bold'>Company Size:</span> {story.companySize}
					</div>
				)}
				{story.onboardingDuration && (
					<div>
						<span className='bold'>Onboarding Duration:</span>{' '}
						{story.onboardingDuration}
					</div>
				)}
				{story.mentorProvided && (
					<div>
						<span className='bold'>Mentor Provided:</span> Y
					</div>
				)}
			</Card.Content>
			<Card.Content className='experience'>
				<div className='experience-content'>
					<div className='experience-padding'>
						<Icon name='quote left' />
						{story.experience} <Icon name='quote right' />
					</div>
				</div>
			</Card.Content>
		</Card>
	);
}
