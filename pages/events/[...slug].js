import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';
import { getFilteredEvents } from '../../helpers/api-util';

export default function FilteredEventsPage({ filteredEvents, hasError, date }) {
	if (!filteredEvents) {
		return <p>Loading...</p>;
	}

	if (hasError) {
		return (
			<>
				<ErrorAlert>
					Invalid filter. Please adjust your values!
				</ErrorAlert>
				<Button link={'/events'}>Show All Events</Button>
			</>
		);
	}

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<ErrorAlert>No events found for the chosen filter!</ErrorAlert>
				<Button link={'/events'}>Show All Events</Button>
			</>
		);
	}

	return (
		<>
			<ResultsTitle date={date} />
			<EventList events={filteredEvents} />
		</>
	);
}

export async function getServerSideProps(context) {
	const [year, month] = context.params.slug;

	const filteredEvents = await getFilteredEvents({
		year: +year,
		month: +month,
	});

	const humanReadableDate = new Date(year, month - 1).toLocaleDateString(
		'en-US',
		{
			month: 'long',
			year: 'numeric',
		}
	);

	if (
		isNaN(+year) ||
		isNaN(+month) | (year > 2030) ||
		(year < 2022) | (month < 1) ||
		month > 12 ||
		context.params.slug.length > 2
	) {
		return {
			props: {
				hasError: true,
			},
		};
	}

	return {
		props: {
			filteredEvents,
			date: humanReadableDate,
		},
	};
}
