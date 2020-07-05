import React from 'react';
import {
	Grid,
	Container,
	Header,
	Segment,
	Image,
	Label,
} from 'semantic-ui-react';

export default function Home() {
	return (
		<Container text>
			<Header>Welcome!</Header>
			<p>Click on one of the images below to read and share experiences:</p>
			<Grid stackable columns={2}>
				<Grid.Row stretched>
					<Grid.Column>
						<Segment>
							<Image
								as='a'
								src='images/undraw_team_work_k80m.svg'
								href='/internship'
								size='medium'
							/>
							<Label attached='bottom'>Internship</Label>
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment>
							<Image
								as='a'
								src='images/undraw_interview_rmcf.svg'
								href='/firstJobSearch'
								size='medium'
							/>
							<Label attached='bottom'>First Job Search</Label>
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Column>
					<Segment>
						<Image
							as='a'
							src='images/undraw_team_chat_y27k.svg'
							href='/onboarding'
							size='medium'
						/>
						<Label attached='bottom'>Onboarding</Label>
					</Segment>
				</Grid.Column>
			</Grid>
		</Container>
	);
}
