import styles from './event-summary.module.css';

export default function EventSummary({ title }) {
	return (
		<section className={styles.summary}>
			<h1>{title}</h1>
		</section>
	);
}

