import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Search, Loader, Segment } from 'semantic-ui-react';

import FormWrapper from './FormWrapper';

export default function Page(page, FormContent, initialInfo, CardComponent) {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);

	const [isSearching, setIsSearching] = useState(false);
	const [results, setResults] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const handleSearchChange = (e, { value }) => {
		setIsSearching(true);
		setSearchValue(value);

		setTimeout(() => {
			setIsSearching(false);

			const filteredData = data.filter((story) => {
				const values = Object.values(story);
				const stringValues = values.filter(
					(value) => typeof value === 'string',
				);
				const matchSearch = (text) =>
					text.toLowerCase().includes(value.toLowerCase());
				return stringValues.some(matchSearch);
			});

			setResults(filteredData);
		}, 300);
	};

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_API}/${page}`)
			.then((res) => {
				// console.log(res.data);
				setIsLoading(false);
				setData(res.data);
				setResults(res.data);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
				setError(true);
			});
	}, [page]);

	return (
		<Container>
			<Segment basic>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}>
					<FormWrapper
						data={data}
						setData={setData}
						initialInfo={initialInfo}
						component={FormContent}
						page={page}
						setResults={setResults}
					/>
					<Search
						loading={isSearching}
						onSearchChange={handleSearchChange}
						showNoResults={false}
						value={searchValue}
					/>
				</div>
			</Segment>
			<Loader active={isLoading} />
			<Card.Group centered>
				{results.map((story, index) => (
					<CardComponent story={story} key={index} />
				))}
			</Card.Group>
			{!error && !isLoading && !results.length && (
				<Segment textAlign='center' basic>
					No stories found
				</Segment>
			)}
			{error && (
				<Segment
					// circular
					textAlign='center'
					// style={{ width: 175, height: 175, margin: '0 auto' }}
					color='red'
					inverted
					secondary>
					Error retrieving stories!
				</Segment>
			)}
		</Container>
	);
}
