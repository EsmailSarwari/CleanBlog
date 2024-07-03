import express from 'express';
import connect from 'mongoose';
const app = express();
import 'dotenv/config';

// import contollers
import * as blogController from './controllers/blogController.js';
import * as pagesController from './controllers/pagesController.js';
import mongoose from 'mongoose';

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

// blog routes
app.post('/add_blog', blogController.createBlog);
app.get('/', blogController.getAllBlogs);
app.get('/blog/:id', blogController.getSingleBlogPage);

//page routes
app.get('/add_post', pagesController.getAddPostpage);
app.get('/about', pagesController.getAboutPage);

// Run Server
app.listen(port, () => {
    console.log(`server start running on port: ${port}`);
});
