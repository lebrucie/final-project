const Blog = require("../models/Blog");
const User = require("../models/User");
// const { validationResult } = require("express-validator");

const create_post = async (req, res, next) => {
  console.log("Blog-post");
  const { title, body, userId } = req.body;

  try {
  const user = await User.findById(userId);
    //Add Post to DB
    if(user){
       await Blog.create({
      title,
      body,
      author: user.email,
      userId,
    });

    res.status(200).send("Post Successfully Created");
}
   
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const get_Blogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({});

    if (blogs) {
      res.status(200).json(blogs);
    } else {
      throw Error;
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const get_Blog_Details = async (req, res, next) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findById(id);

    if (blog) {
      res.status(200).json(blog);
    } else {
      throw Error;
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const delete_blog = async (req, res, next) => {
  console.log("delete");
  const id = req.params.id;
  try {
    const blog = await Blog.findByIdAndDelete(id);

    if (blog) {
      res.status(200).json({ msg: "Blog successfully deleted", blog });
    } else {
      throw Error;
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports = { create_post, get_Blogs, get_Blog_Details, delete_blog };
