import Blog from '../models/blog.js';

export const createBlog = async (req, res) => {
    try {
        const blog = new Blog({
            ...req.body,
        });
        await blog.save();
        res.redirect('/');
    } catch (error) {
        console.log('Error Creating Blog :', error);
        res.status(500).send('Internal Server Error');
    }
};
