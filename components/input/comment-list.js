import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './comment-list.module.css';

export default function CommentList() {
	const [comments, setComments] = useState([]);
	const router = useRouter();

	useEffect(() => {
		fetch(`/api/events/${router.query.eventId}`)
			.then((response) => response.json())
			.then((data) => setComments(data.comments));
	}, [router.query.eventId]);

	if (!comments) {
		return <p>Loading...</p>;
	}

	return (
		<ul className={styles.comments}>
			{comments.map((comment) => {
				return (
					<li key={comment.comment}>
						<p>{comment.comment}</p>
						<div>{comment.name}</div>
					</li>
				);
			})}
		</ul>
	);
}
