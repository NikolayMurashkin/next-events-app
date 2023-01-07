import EventItem from './event-item';
import styles from './event-list.module.css';

export default function EventList({ featuredEvents }) {
	return (
		<ul className={styles.list}>
			{featuredEvents.map((event) => (
				<EventItem key={event.id} {...event} />
			))}
		</ul>
	);
}
