import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database/connect.js';
import router from './routes/index.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

connectDB();

app.use('/api', router);


app.get('/', (req, res) => {
  res.send('Hello World!');
}
);

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);

