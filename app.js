import express from "express"

const app = express();

app.use(express.static('public'))

app.get('/trouble', (req, res) => {
	throw new Error('we ran into a little trouble');
});

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send(err.message);
});

app.listen('3000', () => {
	console.log('app listening on port 3000');
}); 
