import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Image, Item, Label, List, Segment } from "semantic-ui-react";

export default observer(function ActivityDetailedSidebar() {
	return (
		<Fragment>
			<Segment textAlign="center" style={{ border: "none" }} attached="top" secondary inverted color="teal">
				3 People Going
			</Segment>
			<Segment attached>
				<List relaxed divided>
					<Item style={{ position: "relative" }}>
						<Label style={{ position: "absolute" }} color="orange" ribbon="right">
							Host
						</Label>
						<Image size="tiny" src={"/assets/user.png"} />
						<Item.Content verticalAlign="middle">
							<Item.Header as="h3">
								<Link to={"#"}>Razvan</Link>
							</Item.Header>
							<Item.Extra style={{ color: "orange" }}>Following</Item.Extra>
						</Item.Content>
					</Item>

					<Item style={{ position: "relative" }}>
						<Image size="tiny" src={"/assets/user.png"} />
						<Item.Content verticalAlign="middle">
							<Item.Header as="h3">
								<Link to={"#"}>Cristina</Link>
							</Item.Header>
							<Item.Extra style={{ color: "orange" }}>Following</Item.Extra>
						</Item.Content>
					</Item>

					<Item style={{ position: "relative" }}>
						<Image size="tiny" src={"/assets/user.png"} />
						<Item.Content verticalAlign="middle">
							<Item.Header as="h3">
								<Link to={"#"}>Andrei</Link>
							</Item.Header>
							<Item.Extra style={{ color: "orange" }}>Following</Item.Extra>
						</Item.Content>
					</Item>
				</List>
			</Segment>
		</Fragment>
	);
});
