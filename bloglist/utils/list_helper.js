// const dummy = (blogs) => {
//   return 1;
// };

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

module.exports = { totalLikes, favoriteBlog };
