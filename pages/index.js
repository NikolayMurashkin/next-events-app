import Head from 'next/head';

import EventList from '../components/events/event-list';
import NewsletterRegistration from '../components/input/newsletter-registration';
import { getFeaturedEvents } from '../helpers/api-util';

export default function HomePage({ featuredEvents }) {
	return (
		<>
			<Head>
				<title>NextJS Events</title>
				<meta
					name='description'
					content='Find a lot of great events that allow you to evolve...'
				/>
			</Head>
			<NewsletterRegistration />
			<EventList events={featuredEvents} />
		</>
	);
}

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents();

	return {
		props: { featuredEvents },
		revalidate: 1800,
	};
}
