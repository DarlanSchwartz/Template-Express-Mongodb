import express, { json } from 'express';
import cors from 'cors';
import router from './routes/index.routes.js';
import db from './database/database.connection.js'; // This is imported here just for the database console.log run when this scripts run for the first time


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());
app.use(router);

app.listen(PORT, () => console.log(`--------------- Server running on port ${PORT}`));