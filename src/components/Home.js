import React from 'react';
import { Container, Segment, Header } from 'semantic-ui-react';

export default function Home() {
	return (
		<Container text>
			<Segment>
				<Header>Welcome!</Header>
				<p>Click on one of the images below to read and share experiences:</p>
			</Segment>
		</Container>
	);
}
