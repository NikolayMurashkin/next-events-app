import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

export default function AllEventsPage({ allEvents }) {
	const router = useRouter();
	// const allEvents = getAllEvents();

	function findEventsHandler(year, month) {
		router.push(`/events/${year}/${month}`);
	}
	return (
		<>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList events={allEvents} />
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch(
		'https://next-events-app-4045a-default-rtdb.europe-west1.firebasedatabase.app/events.json'
	);
	const allEvents = await res.json();

	return {
		props: {
			allEvents,
		},
	};
}
