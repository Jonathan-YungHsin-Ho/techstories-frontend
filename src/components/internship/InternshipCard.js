import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default function InternshipCard({ story }) {
	return (
		<Card color={story.positiveInternship ? 'green' : 'red'}>
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
				{story.internshipDuration && (
					<div>
						<span className='bold'>Internship Duration:</span>{' '}
						{story.internshipDuration}
					</div>
				)}
				{story.mentorProvided && (
					<div>
						<span className='bold'>Mentor Provided:</span> Y
					</div>
				)}
				{story.jobOffered && (
					<div>
						<span className='bold'>Job Offered:</span> Y
					</div>
				)}
			</Card.Content>
			<Card.Content>
				<Icon name='quote left' />
				{story.experience} <Icon name='quote right' />
			</Card.Content>
		</Card>
	);
}
