import Button from '../ui/button';
import styles from './results-title.module.css';

export default function ResultsTitle({ date }) {
	return (
		<section className={styles.title}>
			<h1>Events in {date}</h1>
			<Button link='/events'>Show all events</Button>
		</section>
	);
}
