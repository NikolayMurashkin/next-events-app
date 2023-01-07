import styles from './error-alert.module.css';

export default function ErrorAlert({ children }) {
	return <div className={styles.alert}>{children}</div>;
}

