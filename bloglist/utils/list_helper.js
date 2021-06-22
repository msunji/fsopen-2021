const _ = require("lodash");

const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.reduce((sum, { likes }) => sum + likes, 0);
};

const favoriteBlog = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.reduce((a, b) => (a.likes > b.likes ? a : b));
};

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return 0;
  } else {
    let countBlogs = _(blogs)
      .countBy("author")
      .map((obj, key) => ({ author: key, blogs: obj }))
      .value();
    return _.maxBy(countBlogs, (obj) => obj.blogs);
  }
};

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return 0;
  } else {
    let groupedBlogs = _(blogs)
      .groupBy("author")
      .map((obj, key) => ({ author: key, likes: _.sumBy(obj, "likes") }))
      .value();
    return _.maxBy(groupedBlogs, (obj) => obj.likes);
  }
};

module.exports = { totalLikes, favoriteBlog, mostBlogs, mostLikes };
