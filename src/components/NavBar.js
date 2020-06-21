import React, { useState } from 'react';
import { Container, Header, Icon, Menu } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
	const location = useLocation();

	const initialLocation =
		location.pathname === '/about' ? 'about' : 'onboarding';

	const [activeItem, setActiveItem] = useState(initialLocation);

	const handleClick = (e, { name }) => setActiveItem(name);

	return (
		<header>
			<Container style={{ paddingTop: `1rem`, marginBottom: `1rem` }}>
				<Header as='h1'>
					<Icon name='book' />
					TechStories
				</Header>
				<Menu pointing secondary>
					<Menu.Item
						name='onboarding'
						active={activeItem === 'onboarding'}
						as={Link}
						to='/'
						onClick={handleClick}
					/>
					<Menu.Item
						name='about'
						active={activeItem === 'about'}
						as={Link}
						to='/about'
						position='right'
						onClick={handleClick}
					/>
				</Menu>
			</Container>
		</header>
	);
}
