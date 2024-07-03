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

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.render('index', {
            blogs: blogs,
        });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

export const getSingleBlogPage = async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.render('blog', {
        blog,
    });
};
