import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export default function Navbar() {
	return (
		<Menu inverted fixed="top">
			<Container>
				<Menu.Item header>
					<img />
					Reactor
				</Menu.Item>
				<Menu.Item name="Activities" />
				<Menu.Item>
					<Button positive content="Create Activity" />
				</Menu.Item>
			</Container>
		</Menu>
	);
}
