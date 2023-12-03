import express, { Express, Response } from 'express';
import productRouter from './routes/products/index.ts';

const app: Express = express();
app.use(express.json());

// app routes
app.use('/products', productRouter);

app.get('/', (_, res: Response) => {
    res.status(200).send({
        message: 'Server is up ✅ - Environment: ' + process.env.ENV,
        data: undefined,
        error: false,
    });
});

export default app;