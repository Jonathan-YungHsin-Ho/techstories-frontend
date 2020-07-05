import React, { useState, useEffect } from 'react';
import { Container, Header, Icon, Menu } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
	const location = useLocation();

	const initialLocation = location.pathname.split('/')[1];

	const [activeItem, setActiveItem] = useState(initialLocation);

	useEffect(() => {
		if (initialLocation === '') {
			setActiveItem('');
		}
	}, [initialLocation]);

	const handleClick = (e, { name }) => setActiveItem(name);

	return (
		<header>
			<Container style={{ paddingTop: `1rem`, marginBottom: `1rem` }}>
				<Link to='/'>
					<Header as='h1'>
						<Icon name='book' />
						TechStories
					</Header>
				</Link>
				<Menu pointing secondary>
					<Menu.Item
						name='internship'
						active={activeItem === 'internship'}
						as={Link}
						to='/internship'
						onClick={handleClick}
					/>
					{/* <Menu.Item
						name='firstJobSearch'
						active={activeItem === 'firstjobsearch'}
						as={Link}
						to='/firstjobsearch'
						onClick={handleClick}
					/> */}
					<Menu.Item
						name='onboarding'
						active={activeItem === 'onboarding'}
						as={Link}
						to='/onboarding'
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
