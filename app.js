import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
const app = express();

// Routers
import pageRoutes from './routes/pageRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

//template engine
app.set('view engine', 'ejs');

// db connection
const port = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;
mongoose
    .connect(URI)
    .then(() => {
        console.log('DB Connected Successfully');
    })
    .catch((error) => {
        console.log('Error occured connectiong to db', error);
    });

// Middlewarew
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', pageRoutes);
app.use('/', blogRoutes);

// Run Server
app.listen(port, () => {
    console.log(`server start running on port: ${port}`);
});
