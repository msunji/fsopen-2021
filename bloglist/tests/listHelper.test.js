const listHelper = require("../utils/list_helper");

const emptyBlogs = [];
const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0,
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0,
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0,
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0,
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0,
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0,
  },
];

describe("total likes", () => {
  test("of empty list is zero", () => {
    const result = listHelper.totalLikes(emptyBlogs);
    expect(result).toBe(0);
  });

  test("when list has only one blog equals the likes of that", () => {
    let singleBlog = blogs[1];
    const result = listHelper.totalLikes([singleBlog]);
    expect(result).toBe(singleBlog.likes);
  });

  test("of a bigger list is calculated right", () => {
    const result = listHelper.totalLikes(blogs);
    expect(result).toBe(36);
  });
});

describe("most likes", () => {
  test("of an empty list is zero", () => {
    const result = listHelper.favoriteBlog(emptyBlogs);
    expect(result).toEqual(0);
  });

  test("of a list with only one blog should be equal to the likes of that blog", () => {
    let oneBlog = blogs[2];
    const mostLikes = listHelper.favoriteBlog([oneBlog]);
    const blogWithMostLikes = blogs.find(
      ({ likes }) => likes === mostLikes.likes
    );
    expect(mostLikes).toEqual(blogWithMostLikes);
  });

  test("of a bigger list is calculated correctly", () => {
    const mostLikes = listHelper.favoriteBlog(blogs);
    expect(mostLikes).toEqual({
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0,
    });
  });
});

describe("most blogs", () => {
  test("should be zero if list is empty", () => {
    const result = listHelper.mostBlogs([]);
    expect(result).toBe(0);
  });

  test("should show the author who shows up the most in the bloglist", () => {
    const result = listHelper.mostBlogs(blogs);
    expect(result).toEqual({
      author: "Robert C. Martin",
      blogs: 3,
    });
  });
});

describe("most likes", () => {
  test("should be zero if list is empty", () => {
    const result = listHelper.mostLikes([]);
    expect(result).toBe(0);
  });

  test("should show the author with the most number of total likes", () => {
    const result = listHelper.mostLikes(blogs);
    expect(result).toEqual({
      author: "Edsger W. Dijkstra",
      likes: 17,
    });
  });
});
