import Image from 'next/image';

import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import styles from './event-logistics.module.css';

export default function EventLogistics({ date, location, image, title }) {
	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const addressText = location.replace(', ', '\n');

	return (
		<section className={styles.logistics}>
			<div className={styles.image}>
				<Image src={`/${image}`} alt={title} width={500} height={500} />
			</div>
			<ul className={styles.list}>
				<LogisticsItem icon={DateIcon}>
					<time>{humanReadableDate}</time>
				</LogisticsItem>
				<LogisticsItem icon={AddressIcon}>
					<address>{addressText}</address>
				</LogisticsItem>
			</ul>
		</section>
	);
}
