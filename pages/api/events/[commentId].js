import { buildCommentsPath, extractComment } from '.';

export default function handler(req, res) {
	const commentId = req.query.commentId;
	const filepath = buildCommentsPath();
	const data = extractComment(filepath);
	const selectedComments = data.filter((comment) => comment.id === commentId);
	res.status(200).json({ comments: selectedComments });
}
