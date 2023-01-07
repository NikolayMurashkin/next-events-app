import Link from 'next/link';
import { useRouter } from 'next/router';
useRouter;

export default function AllEventsPage() {
	const router = useRouter();

	const events = [
		{ id: 1, name: 'firstEvent' },
		{ id: 2, name: 'secondEvent' },
	];

	function toHomePageHandler() {
		router.replace('/');
	}

	return (
		<div>
			<h1>Events Page</h1>
			<ul>
				{events.map((event) => (
					<li key={event.id}>
						<Link
							href={{
								pathname: '/events/[eventId]',
								query: { eventId: event.id },
							}}
						>
							{event.name}
						</Link>
					</li>
				))}
			</ul>
			<button onClick={toHomePageHandler}>To Home Page</button>
		</div>
	);
}
