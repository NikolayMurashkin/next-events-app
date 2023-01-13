import fs from 'fs';
import path from 'path';

export function buildNewsletterPath() {
	return path.join(process.cwd(), 'data', 'newsletter.json');
}

export default function handler(req, res) {
	if (req.method === 'POST') {
		const email = req.body.email;
		const newSubscribe = {
			id: new Date().toISOString(),
			email,
		};

		const filePath = buildNewsletterPath();
		const fileData = fs.readFileSync(filePath);
		const data = JSON.parse(fileData);
		data.push(newSubscribe);
		fs.writeFileSync(filePath, JSON.stringify(data));
		res.status(201).json({ status: 'Subscribed!' });
	} else {
		res.status(200).json({
			message: 'You can only send POST request to this address',
		});
	}
}
