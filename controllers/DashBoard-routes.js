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
        const filterPost = postData.map((post)=>{
            post.get({
                plain:true
            })
        })
    res.render("allPost",{
        layout:"dashboard",
        filterPost
    })
    
    }catch(error){res.redirect("login")}

})
router.get('/newPost',auth,(req, res) => {
res.render("newPost",{
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