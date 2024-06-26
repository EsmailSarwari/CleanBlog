import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

function main() {
    const blogSchema = new Schema({
        title: String,
        description: String,
    });

    const Blog = model('blog', blogSchema);
    module.exports = Blog;
}

main();
