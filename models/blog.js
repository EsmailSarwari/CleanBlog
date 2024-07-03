//mongoose: is a mongodb object modeling for node.js
import { Schema, model } from 'mongoose';

const blogSchema = new Schema({
    title: String,
    description: String,
    dateCreated: {
        type: Date,
        default: function () {
            const currentDate = new Date();
            return currentDate.toLocaleDateString('en-US');
        },
    },
});

const Blog = model('blog', blogSchema);

export default Blog;
