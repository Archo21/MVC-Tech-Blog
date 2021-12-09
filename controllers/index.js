 const router = require("express").Router();
 const api  = require ("./api/");
 const home  = require ("./home-routes");
 const Dashboard  = require ("./DashBoard-routes");
 
 router.use("/",home)
 router.use("/api",api)
 router.use("/dashboard",Dashboard)

 module.exports = router