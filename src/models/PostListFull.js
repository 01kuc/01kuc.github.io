// ./models/Post
// Create and return a Post with List Layout


const m = require('mithril')
const LayoutPostList = require('../views/LayoutPostList')
const Post = require('./Post')


const PostListFull = (title, tags, url, date, content) =>
  m(LayoutPostList, {title: title, URL: url, date: date}, Post(' ', tags, url, 'date', content))


module.exports = PostListFull
