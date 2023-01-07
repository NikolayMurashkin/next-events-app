import { useRouter } from 'next/router';

import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';

export default function EventDetailPage() {
	const router = useRouter();

	const event = getEventById(router.query.eventId);

	if (!event) {
		return (
			<>
				<ErrorAlert>No event found!</ErrorAlert>
				<Button link={'/events'}>Show All Events</Button>
			</>
		);
	}
	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics {...event} />
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	);
}
