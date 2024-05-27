import app from './app.js';
import mongoose from 'mongoose';

const { DB_HOST } = process.env;
const PORT = process.env.PORT || 5000;

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