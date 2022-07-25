// run `node index.js` in the terminal
import express from 'express';
import bodyparser from 'body-parser';
import usersroutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyparser.json());

app.use('/users', usersroutes);
// app.get('/', (req, res) => {
//   console.log('test');
//   res.send('Hi im aravind');
// });

app.listen(PORT, () =>
  console.log(`my first node server is Running:http://localhost: ${PORT}`)
);
