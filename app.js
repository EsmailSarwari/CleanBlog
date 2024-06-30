import express from 'express';
import { connect } from 'mongoose';
const app = express();
import 'dotenv/config';

// import contollers
import * as blogController from './controllers/blogController.js';

//template engine
app.set('view engine', 'ejs');

// db connection
const port = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

connect(URI)
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

// new routes
app.post('/add_blog', blogController.createBlog);

// old routes
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/add_post', (req, res) => {
    res.render('add_post');
});
app.get('/post', (req, res) => {
    res.render('post');
});

// Run Server
app.listen(port, () => {
    console.log(`server start running on port: ${port}`);
});
