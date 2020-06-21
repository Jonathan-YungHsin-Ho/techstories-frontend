import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Container,
	Card,
	Grid,
	Divider,
	// Search,
} from 'semantic-ui-react';

// import { data } from '../tempdata';

import OnboardingForm from './OnboardingForm';
import OnboardingCard from './OnboardingCard';

export default function Onboarding() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get('https://techstories.herokuapp.com/api/onboarding')
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Container>
			<Grid columns='equal'>
				<Grid.Column>
					<OnboardingForm data={data} setData={setData} />
				</Grid.Column>
				{/* <Grid.Column>
					<Search />
				</Grid.Column> */}
			</Grid>
			<Divider />
			<Card.Group centered>
				{data.map((story, index) => (
					<OnboardingCard story={story} key={index} />
				))}
			</Card.Group>
		</Container>
	);
}
