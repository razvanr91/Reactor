import React from "react";
import { observer } from "mobx-react-lite";
import { Activity } from "../../../app/models/activity";
import { Button, Header, Image, Item, Segment } from "semantic-ui-react";

const activityImageStyle = {
	filter: "brightness(30%)",
};

const activityImageTextStyle = {
	position: "absolute",
	bottom: "5%",
	left: "5%",
	width: "100%",
	height: "auto",
	color: "white",
};

interface Props {
	activity: Activity;
}

export default observer(function ActivityDetailedHeader({ activity }: Props) {
	return (
		<Segment.Group>
			<Segment basic attached="top" style={{ padding: "0" }}>
				<Image src={`/assets/categoryImages/${activity.category}.jpg`} fluid style={activityImageStyle} />
				<Segment style={activityImageTextStyle} basic>
					<Item.Group>
						<Item>
							<Item.Content>
								<Header size="huge" style={{ color: "white" }}>
									{activity.title}
								</Header>
								<p>{activity.date}</p>
								<p>
									Hosted by <strong>Razvan</strong>
								</p>
							</Item.Content>
						</Item>
					</Item.Group>
				</Segment>
			</Segment>
			<Segment clearing attached="bottom">
				<Button color="teal" content="Attend" />
				<Button content="Cancel Attendance" />
				<Button color="orange" floated="right" content="Manage Event" />
			</Segment>
		</Segment.Group>
	);
});
