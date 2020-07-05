import React from 'react';
import { Card } from 'semantic-ui-react';
import Experience from '../Experience';

export default function FirstJobSearchCard({ story }) {
	return (
		<Card>
			<Card.Content>
				{story.name && (
					<div>
						<span className='bold'>Name:</span> {story.name}
					</div>
				)}
				{story.role && (
					<div>
						<span className='bold'>Role(s):</span> {story.role}
					</div>
				)}
				{story.education && (
					<div>
						<span className='bold'>Education/Training:</span> {story.education}
					</div>
				)}
				{story.jobSearchDuration && (
					<div>
						<span className='bold'>First Job Search Duration:</span>{' '}
						{story.jobSearchDuration}
					</div>
				)}
				{story.applicationsSent && (
					<div>
						<span className='bold'>Applications Sent:</span>{' '}
						{story.applicationsSent}
					</div>
				)}
				{story.initialInterviews && (
					<div>
						<span className='bold'>Initial Interviews:</span>{' '}
						{story.initialInterviews}
					</div>
				)}
				{story.followupInterviews && (
					<div>
						<span className='bold'>Followup Interviews:</span>{' '}
						{story.followupInterviews}
					</div>
				)}
				{story.finalInterviews && (
					<div>
						<span className='bold'>Final Interviews:</span>{' '}
						{story.finalInterviews}
					</div>
				)}
				{story.jobOffers && (
					<div>
						<span className='bold'>Job Offers:</span> {story.jobOffers}
					</div>
				)}
			</Card.Content>
			<Experience story={story} />
		</Card>
	);
}
