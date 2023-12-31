import app from '../src/app';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import admin from 'firebase-admin';

dotenv.config();
databaseConnection();

const serviceAccount = require('./middleware/firebase.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

async function databaseConnection() {
    if (process.env.DB_CONNECTION_STRING) {
        await mongoose
            .connect(process.env.DB_CONNECTION_STRING)
            .then(() => {
                console.log({
                    level: 'info',
                    message: '✅ Database connected',
                    label: 'mongo',
                });
                app.listen(process.env.PORT, () => {
                    console.log({
                        level: 'info',
                        message: `Server listening on port ${process.env.PORT}`,
                        label: 'server',
                    });
                });
            })
            .catch((error) =>
                console.log({
                    level: 'error',
                    message: '🔴 Database error: ',
                    errorData: error,
                    label: 'mongo',
                }),
            );
    } else {
        console.log("Missing DB Connection String");
    }
}


