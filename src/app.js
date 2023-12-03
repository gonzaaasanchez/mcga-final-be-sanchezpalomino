import express from 'express';
import productRouter from './routes/products/index.js';

const app = express();
app.use(express.json());

// app routes
app.use('/products', productRouter);

app.get('/', (_, res) => {
    res.status(200).send({
        message: 'Server is up ✅ - Environment: ' + process.env.ENV,
        data: undefined,
        error: false,
    });
});

export default app;
