import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";
import { Header, Segment, Comment, Form, Button } from "semantic-ui-react";

export default observer(function ActivityDetailedChat() {
	return (
		<Fragment>
			<Segment textAlign="center" attached="top" inverted color="teal" style={{ border: "none" }}>
				<Header>Chat about this event</Header>
			</Segment>
			<Segment attached>
				<Comment.Group>
					<Comment>
						<Comment.Avatar src="/assets/user.png" />
						<Comment.Content>
							<Comment.Author as="a">Razvan</Comment.Author>
							<Comment.Metadata>
								<div>Today at 5:42PM</div>
							</Comment.Metadata>
							<Comment.Text>How artistic</Comment.Text>
							<Comment.Actions>
								<Comment.Action>Reply</Comment.Action>
							</Comment.Actions>
						</Comment.Content>
					</Comment>

					<Comment>
						<Comment.Avatar src="/assets/user.png" />
						<Comment.Content>
							<Comment.Author as="a">Ion</Comment.Author>
							<Comment.Metadata>
								<div>3 days ago</div>
							</Comment.Metadata>
							<Comment.Text>Awesome!!!</Comment.Text>
							<Comment.Actions>
								<Comment.Action>Reply</Comment.Action>
							</Comment.Actions>
						</Comment.Content>
					</Comment>

					<Form reply>
						<Form.TextArea />
						<Button content="Add Reply" labelPosition="left" icon="edit" primary />
					</Form>
				</Comment.Group>
			</Segment>
		</Fragment>
	);
});
