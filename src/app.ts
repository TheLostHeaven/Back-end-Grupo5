import express from 'express'
import cors from 'cors'
import { router } from './routers';

const app = express();


//AppUse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router)


app.use(
    cors({
        origin: "http://localhost:4200",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 204,
    })
);

export default app;


