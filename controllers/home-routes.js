const router = require("express").Router()
const { compareSync } = require("bcrypt")
const {Post,Users,Comments}= require("../models") 
router.get("/",async(req,res)=>{
    try{
        const postData = await Post.findAll({
            include: [Users]
        })
        const posts = postData.map((post)=>
            post.get({
                plain:true
            })
        )
    res.render("allPost",{posts})
    
    }catch(error){res.status(500).json(error)}
})
router.get("/post/:id",async(req,res)=>{
    try{
        const postData = await Post.findByPk(req.params.id,{
            include: [Users,{
                model:Comments,
                include:[Users]
            }]
        })
        if (postData){
            const post = postData.get({
                plain:true
            })
            res.render("singlePost",{post});
        }else{
            res.status(404).end();
        }
        
    }catch(error){res.status(500).json(error)}
})
router.get('/login', (req, res) => {
if (req.session.loggedIn){
    res.redirect("/")
    return
}
res.render("login");
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn){
        res.redirect("/")
        return
    }
    res.render("signup");
    });
    module.exports=router
    