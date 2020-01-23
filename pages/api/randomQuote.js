import allQuotes from '../../quotes.json';

export default (req, res) => {
	const quote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
	res.status(200).json(quote);
};
