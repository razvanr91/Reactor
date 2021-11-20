import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";

function App() {
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		axios.get("https://localhost:7206/api/activities").then((response) => {
			console.log(response);
			setActivities(response.data);
		});
	}, []);

	return (
		<div>
			<Header as="h2" icon="users" content="Reactor" />
			<List>
				{activities.map((activity: any) => {
					return <List.Item key={activity.id}>{activity.title}</List.Item>;
				})}
			</List>
		</div>
	);
}

export default App;
