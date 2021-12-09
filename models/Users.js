const{ Model,DataTypes}= require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");
class Users extends Model{
    checkPassword(userlogin){
        return bcrypt.compareSync(userlogin,this.password)
    }
}
Users.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true

        },
        userName:{
            type:DataTypes.string,
            allowNull: false
        },
        password:{
            type:DataTypes.string,
            allowNull: false,
            validate:{
                len:[8]
            }
        }   
        
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
              updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
              return updatedUserData;
            },
        }
    },
    {
        sequelize:sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Users',
    
    }
)
module.exports=Users
