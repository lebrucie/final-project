const Blog = require("../models/Blog");
// const { validationResult } = require("express-validator");

const create_post = async (req, res, next) => {
  console.log("Blog-post");
  const { title, body, author } = req.body;
try{
    //Add Post to DB
    await Blog.create({
      title,body,author
    });

    res.status(200).send("Post Successfully Created");
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




module.exports = { create_post, get_Blogs };
