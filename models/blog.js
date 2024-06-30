//mongoose: is a mongodb object modeling for node.js
import { Schema, model } from 'mongoose';

const blogSchema = new Schema({
    title: String,
    description: String,
});

const Blog = model('blog', blogSchema);

export default Blog;
