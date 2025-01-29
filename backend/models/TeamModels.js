import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Team = db.define('team',{
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    desription: DataTypes.TEXT,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});
 
export default Team;
 
// (async()=>{
//     await db.sync();
// })();