import styles from './event-content.module.css';

export default function EventContent({children}) {
  return <section className={styles.content}>{children}</section>;
}

