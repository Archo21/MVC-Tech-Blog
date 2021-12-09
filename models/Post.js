const{
    Sequelize,
    Model,
    DataTypes

}= require(sequelize)
const sequelize = require("../config/connection");
class Post extends Model{}
Post.init(
    {
        body:{
            type:DataTypes.string,
            allowNull: false

        },
        title:{
            type:DataTypes.string,
            allowNull: false
 
        }
    },
    {
        sequelize
    }
)
module.exports=Post