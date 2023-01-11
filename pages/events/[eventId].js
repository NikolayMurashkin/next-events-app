import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';

export default function EventDetailPage({ event }) {
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

export async function getStaticProps(context) {
	const eventId = context.params.eventId;

	const event = await getEventById(eventId);

	if (!event) {
		return { notFound: true };
	}

	return {
		props: {
			event,
		},
		revalidate: 30,
	};
}

export async function getStaticPaths() {
	const data = await getFeaturedEvents();

	const paths = data.map((event) => {
		return {
			params: {
				eventId: event.id,
			},
		};
	});

	return {
		paths,
		fallback: 'blocking',
	};
}
