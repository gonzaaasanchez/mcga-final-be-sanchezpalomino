import { model, Schema } from 'mongoose';

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

export default model('Product', productSchema);
