import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default function Experience({ story }) {
	return (
		<Card.Content className='experience'>
			<div className='experience-content'>
				<div className='experience-padding'>
					<Icon name='quote left' />
					{story.experience} <Icon name='quote right' />
				</div>
			</div>
		</Card.Content>
	);
}
