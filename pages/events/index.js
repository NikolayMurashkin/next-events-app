import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

export default function AllEventsPage() {
	const router = useRouter();
	const allEvents = getAllEvents();

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
