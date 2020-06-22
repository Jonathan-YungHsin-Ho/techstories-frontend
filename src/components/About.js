import React from 'react';
import { Container, Segment, Header, List, Label } from 'semantic-ui-react';

export default function About() {
	return (
		<Container text>
			<Segment>
				<Header>About</Header>
				<p>
					Welcome! This site is for early-career developers, engineers, and
					other tech workers to share their experiences once hired. Right now
					visitors can read and share onboarding experiences. Future pages will
					be added based on suggestions and feedback!
				</p>
				<Header>Tech Stack</Header>
				<List bulleted>
					<List.Item>ReactJS</List.Item>
					<List.Item>Semantic UI</List.Item>
					<List.Item>axios</List.Item>
					<List.Item>Node.js</List.Item>
					<List.Item>PostgresQL</List.Item>
				</List>
				<Label
					attached='bottom right'
					as='a'
					href='https://www.jonathan-ho.dev'
					target='_blank'>
					Project by Jonathan Ho
				</Label>
			</Segment>
		</Container>
	);
}
