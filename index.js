import express from 'express';
import data from './data/data.json'

const app = express()
const PORT = 3000

app.listen(PORT, () => {
  console.log(`Your server is running on http://localhost:${PORT}`);
  console.log(data);
}
);

