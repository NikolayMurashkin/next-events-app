import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-util';

export default function HomePage({ featuredEvents }) {
	return (
		<div>
			<EventList events={featuredEvents} />
		</div>
	);
}

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents();

	return {
		props: { featuredEvents },
		revalidate: 1800,
	};
}
