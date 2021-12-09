const router = require("express").Router();
 const comment  = require ("./comment.js");
 const post  = require ("./post.js");
 const users = require ("./users.js");
 
 router.use("/user",users)
 router.use("/post",post)
 router.use("/comment",comment)

 module.exports = router