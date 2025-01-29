import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const News = db.define('news',{
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    desription: DataTypes.TEXT,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});
 
export default News;
 
// (async()=>{
//     await db.sync();
// })();