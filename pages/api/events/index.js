import fs from 'fs';
import path from 'path';

export function buildCommentsPath() {
	return path.join(process.cwd(), 'data', 'comments.json');
}

export function extractComment(filePath) {
	const fileData = fs.readFileSync(filePath);
	const data = JSON.parse(fileData);
	return data;
}

export default function handler(req, res) {
	if (req.method === 'POST') {
		const email = req.body.email;
		const name = req.body.name;
		const comment = req.body.text;
		const id = req.body.id;

		const newComment = {
			id,
			email,
			name,
			comment,
		};

		const filePath = buildCommentsPath();
		const data = extractComment(filePath);
		data.push(newComment);
		fs.writeFileSync(filePath, JSON.stringify(data));
		res.status(201).json({ message: 'Success!' });
	} else {
		res.status(200).json({
			message: 'You can only send POST request to this address',
		});
	}
}
