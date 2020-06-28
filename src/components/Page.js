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

import FormWrapper from './FormWrapper';

export default function Page(page, FormContent, initialInfo, CardComponent) {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_API}/${page}`)
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
	}, [page]);

	return (
		<Container>
			<Grid columns='equal'>
				<Grid.Column>
					<FormWrapper
						data={data}
						setData={setData}
						initialInfo={initialInfo}
						component={FormContent}
						page={page}
					/>
				</Grid.Column>
				{/* <Grid.Column>
					<Search />
				</Grid.Column> */}
			</Grid>
			<Divider />
			<Loader active={isLoading} />
			<Card.Group centered>
				{data.map((story, index) => (
					<CardComponent story={story} key={index} />
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
