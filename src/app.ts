import express, { Express, Response } from 'express';
import cors from 'cors';
import productRouter from './routes/products/index';

const app: Express = express();
app.use(express.json());
app.use(cors());

// app routes
app.use('/products', productRouter);

app.get('/', (req, res: Response) => {
    res.status(200).send({
        message: 'Server is up ✅ - Environment: ' + process.env.ENV,
        data: undefined,
        error: false,
    });
});

export default app;
