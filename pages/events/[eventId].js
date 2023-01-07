import { useRouter } from 'next/router';
import { Fragment } from 'react';

import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

export default function EventDetailPage() {
	const router = useRouter();

	const event = getEventById(router.query.eventId);
	console.log(event);

	if (!event) {
		return <p>No event found!</p>;
	}
	return (
		<Fragment>
			<EventSummary title={event.title} />
			<EventLogistics {...event} />
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</Fragment>
	);
}
