export const getAllEvents = async () => {
	try {
		const response = await fetch(
			'https://next-events-app-4045a-default-rtdb.europe-west1.firebasedatabase.app/events.json'
		);

		const data = await response.json();

		const events = [];

		for (const key in data) {
			events.push({
				id: key,
				...data[key],
			});
		}

		return events;
	} catch (error) {
		throw new Error(error.message);
	}
};

export const getFeaturedEvents = async () => {
	const events = await getAllEvents();

	return events.filter((event) => event.isFeatured);
};

export const getFilteredEvents = async (dateFilter) => {
	const { year, month } = dateFilter;

	const events = await getAllEvents();
	const filteredEvents = events.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year &&
			eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
};

export const getEventById = async (id) => {
	const events = await getAllEvents();

	return events.find((event) => event.id === id);
};
