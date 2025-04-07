import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';

configDotenv({ path: './.env' });
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected successfully!');
        console.log("App is running on port " + PORT);

    }).catch((err) => {
        console.error('MongoDB connection error:', err);
    });



