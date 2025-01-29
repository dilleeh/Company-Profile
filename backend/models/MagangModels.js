import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Magang = db.define('magang',{
    program: DataTypes.STRING,
    title: DataTypes.STRING,
    urlProgram: DataTypes.STRING,
    urlSyllabus: DataTypes.STRING,
    starDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    descRegis: DataTypes.TEXT,
    descBenefit: DataTypes.TEXT,
    descRec: DataTypes.TEXT,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});
 
export default Magang;
 
// (async()=>{
//     await db.sync();
// })();