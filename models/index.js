const Users =require ("./Users")
const Post =require ("./Post")
const Comments =require ("./Comments")
const Comment = require("./Comments")

Post.belongsTo(Users,{
    foreignKey:"userId",
    onDelete:"CASCADE"
})
Post.hasMany(Comments,{
    foreignKey:"postId",
    onDelete:"CASCADE"
})
Comments.belongsTo(Users,{
    foreignKey:"userId",
    onDelete:"CASCADE"
})
module.exports={Users,Post,Comments}