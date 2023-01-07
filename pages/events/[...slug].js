import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';

export default function FilteredEventsPage() {
	const router = useRouter();
	const filteredData = router.query.slug;

	if (!filteredData) {
		return <p className='center'>Loading...</p>;
	}
	const filteredYear = +filteredData[0];
	const filteredMonth = +filteredData[1];
	if (
		isNaN(filteredYear) ||
		isNaN(filteredMonth) | (filteredYear > 2030) ||
		(filteredYear < 2022) | (filteredMonth < 1) ||
		filteredMonth > 12 ||
		filteredData.length > 2
	) {
		return (
			<p className='center'>Invalid filter. Please adjust your values!</p>
		);
	}

	const filteredEvents = getFilteredEvents({
		year: filteredYear,
		month: filteredMonth,
	});
	if (!filteredEvents || filteredEvents.length === 0) {
		return <p className='center'>No events found for the chosen filter!</p>;
	}

	return <EventList events={filteredEvents} />;
}
