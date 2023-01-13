import { useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import styles from './comments.module.css';

export default function Comments({ eventId }) {
	const [showComments, setShowComments] = useState(false);

	function toggleCommentsHandler() {
		setShowComments((prevStatus) => !prevStatus);
	}

	function addCommentHandler(commentData) {
		fetch('/api/events', {
			method: 'POST',
			body: JSON.stringify(commentData),
			headers: {
				'Content-type': 'application/json',
			},
		});

	}

	return (
		<section className={styles.comments}>
			<button onClick={toggleCommentsHandler} className={styles.button}>
				{showComments ? 'Hide' : 'Show'} Comments
			</button>
			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && <CommentList />}
		</section>
	);
}
