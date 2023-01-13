import Head from 'next/head';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import Comments from '../../components/input/comments';

export default function EventDetailPage({ event }) {
	return (
		<>
			<Head>
				<title>{event.title}</title>
				<meta name='description' content={event.description} />
			</Head>
			<EventSummary title={event.title} />
			<EventLogistics {...event} />
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
			<Comments eventId={event.id} />
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
