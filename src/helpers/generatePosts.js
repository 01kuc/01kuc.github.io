// ./helpers/newGeneratePosts/
// Generate lists of posts and add them to the routes FROM CONTENT folder
// A post is generated through m() so it can be displayed in a 'view' property
// This is a very easy function to generate a list of posts.
// It will usually be needed to generate posts for a page, or to generate all posts in a blog-manner

const posts = require('../../content/all_posts.js')
const PostListFull = require('../models/PostListFull')


const generatePosts = () => posts.map(post=>PostListFull(post.title, post.tags, post.url, post.date, post.markdown))


module.exports = generatePosts;
