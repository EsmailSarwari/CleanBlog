import express from "express";
const router = express.Router();

import * as blogController from '../controllers/blogController.js';

router.route('/').get(blogController.getAllBlogs);
router.route('/add_blog').post(blogController.createBlog);
router.route('/blog/:id').get(blogController.getSingleBlogPage);

export default router;