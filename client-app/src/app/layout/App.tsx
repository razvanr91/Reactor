import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header, List } from "semantic-ui-react";
import { Activity } from "../models/activity";

function App() {
	const [activities, setActivities] = useState<Activity[]>([]);

	useEffect(() => {
		axios.get<Activity[]>("https://localhost:7206/api/activities").then((response) => {
			setActivities(response.data);
		});
	}, []);

	return (
		<div>
			<Header as="h2" icon="users" content="Reactor" />
			<List>
				{activities.map((activity) => {
					return <List.Item key={activity.id}>{activity.title}</List.Item>;
				})}
			</List>
		</div>
	);
}

export default App;
