import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('./images', express.static('images'));

app.get('/', (req, res) => {
  res.json(data);
});

app.post('/newItem', (req, res) => {
  res.send(`a post request with /newItem route on port ${PORT}`);
});

app.put('/item', (req, res) => {
  res.send(`a put request with /item route on port ${PORT}`);
});

app.delete('/item', (req, res) => {
  res.send(`a delete request with /item route on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on http://localhost:${PORT}`);
  console.log(data);
}
);

