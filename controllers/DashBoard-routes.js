const router = require("express").Router()
const auth =require("../utils/auth")
const {Post}= require("../models") 
router.get("/",auth,async(req,res)=>{
    try{
        const postData = await Post.findAll({
            where: {
                userId:req.session.userId
            }
        })
        const posts = postData.map((post)=>
            post.get({
                plain:true
            })
        )
    res.render("allPostDashboard",{
        layout:"dashboard",
        posts
    })
    
    }catch(error){res.redirect("login")}

})
router.get('/new',auth,(req, res) => {
res.render("new-post",{
    layout:"dashboard"
});
});
router.get("/edit/:id",auth,async(req,res)=>{
    try{
        const postData = await Post.findByPk(req.params.id)
        if(postData){
            const posts =postData.get({
                plain:true
            })
        
        console.log(posts)
    res.render("editPost",{
        layout:"dashboard",
        posts
    })
    }
    else{
        res.status(404).end();
    }
    }catch(error){res.redirect("login")}

})
module.exports = router