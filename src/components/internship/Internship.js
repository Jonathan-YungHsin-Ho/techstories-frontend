import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Container,
	Card,
	Grid,
	Divider,
	// Search,
	Loader,
	Segment,
} from 'semantic-ui-react';

import { InternshipForm, InternshipCard } from './';

export default function Internship() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_API}/internship`)
			.then((res) => {
				// console.log(res.data);
				setIsLoading(false);
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
				setError(true);
			});
	}, []);

	return (
		<Container>
			<Grid columns='equal'>
				<Grid.Column>
					<InternshipForm data={data} setData={setData} />
				</Grid.Column>
				{/* <Grid.Column>
					<Search />
				</Grid.Column> */}
			</Grid>
			<Divider />
			<Loader active={isLoading} />
			<Card.Group centered>
				{data.map((story, index) => (
					<InternshipCard story={story} key={index} />
				))}
			</Card.Group>
			{error && (
				<Segment textAlign='center' color='red' inverted secondary>
					Error retrieving stories!
				</Segment>
			)}
		</Container>
	);
}
