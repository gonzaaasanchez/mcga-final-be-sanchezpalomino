import { model, Schema } from 'mongoose';
import { ProductData } from '../types';

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: false,
    },
});

export default model<ProductData>('Product', productSchema);
