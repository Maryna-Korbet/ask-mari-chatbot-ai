import app from './app.js';
import mongoose from 'mongoose';

const { DB_HOST, PORT } = process.env;

if (!DB_HOST) {
    throw new Error('DB_HOST is not defined');
}

mongoose.set("strictQuery", false);

mongoose
    .connect( DB_HOST as string )
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server open & Connected to database');
        });
    })
    .catch((error) => {
        console.log(error.message);
        throw new Error('Failed to connect to database');
    })