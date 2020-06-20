import React from 'react';
import {
	Container,
	Header,
	// Menu
} from 'semantic-ui-react';

export default function NavBar() {
	return (
		<header>
			<Container style={{ paddingTop: `1rem`, marginBottom: `2rem` }}>
				<Header as='h1'>TechStories</Header>
				<Header as='h4' dividing>
					Onboarding
				</Header>
				{/* <Menu
					items={[{ key: '1', name: 'link-1', content: 'Onboarding' }]}
					pointing
					secondary
				/> */}
			</Container>
		</header>
	);
}
