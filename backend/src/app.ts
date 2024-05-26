import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { config } from 'dotenv';

import appRouter from './routes/index.js';

config();

const app = express();

const formatLogger = app.get('env') === "development" ? "dev" : "short";

app.use(cors());
app.use(logger(formatLogger));
app.use(express.json());

app.use("/api", appRouter);


app.get("/welcome", (req, res, next) => {
    return res.send("Hello World!");
})

export default app;