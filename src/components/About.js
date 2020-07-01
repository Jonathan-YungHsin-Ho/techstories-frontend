import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';

export default function About() {
	return (
		<Container text>
			<Header>About</Header>
			<p>
				This site is for developers, engineers, and other tech workers to share
				their early-career experiences once hired. All suggestions and feedback
				welcome!
			</p>
			<p>
				Project by{' '}
				<a
					href='https://www.jonathan-ho.dev'
					target='_blank'
					rel='noopener noreferrer'>
					Jonathan Ho
				</a>
				.
			</p>
			<Header>Tech Stack</Header>
			<List bulleted>
				<List.Item>ReactJS</List.Item>
				<List.Item>Semantic UI</List.Item>
				<List.Item>axios</List.Item>
				<List.Item>Express.js</List.Item>
				<List.Item>PostgreSQL</List.Item>
			</List>
		</Container>
	);
}
