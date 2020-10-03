const express = require("express")
const router = express.Router()
const BlogPost = require("../models/blogPost")

//Routes
//changed app to router
router.get("/", (req, res) => {
  BlogPost.find({})
    .then((data) => {
      console.log(data)
      res.json(data)
    })
    .catch((err) => {
      console.log(err)
    })  
})

router.post('/save', (req, res) => {
  const data = req.body;

  const newBlogPost = new BlogPost(data);

  newBlogPost.save((error) => {
      if (error) {
          res.status(500).json({ msg: 'Sorry, internal server errors' });
          return;
      }
      // BlogPost
      return res.json({
          msg: 'Your data has been saved!!!!!!'
      });
  });
});

router.get("/name", (req, res) => {
  const data = {
    username: "peterson",
    age: 5
  }
  res.json(data)
})
module.exports = router