import mysql from 'mysql2/promise'; 
import { config } from 'dotenv';

config(); 

const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

console.log('Connected to the MySQL database.');

export default db;
