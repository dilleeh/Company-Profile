import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import TeamRoute from "./routes/TeamRoute.js";
import NewsRoute from "./routes/NewsRoute.js";
import MagangRoute from "./routes/MagangRoute.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);
app.use(TeamRoute);
app.use(NewsRoute);
app.use(MagangRoute);

app.listen(5000, ()=> console.log('Server Up and Running...'));