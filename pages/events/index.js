import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../helpers/api-util';

export default function AllEventsPage({ allEvents }) {
	const router = useRouter();

	function findEventsHandler(year, month) {
		router.push(`/events/${year}/${month}`);
	}

	if (!allEvents) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList events={allEvents} />
		</>
	);
}

export async function getStaticProps() {
	const allEvents = await getAllEvents();

	return {
		props: {
			allEvents,
		},
		revalidate: 60,
	};
}
