
import dotenv from "dotenv";
import express from "express";
import configViewEngine from "./configs/viewEngine.js";
import initWebRoute from "./route/webRoute.js";
import path from 'path'
const app = express();
dotenv.config();
const port = process.env.PORT
configViewEngine(app);
initWebRoute(app);
app.use(express.static(path.join(import.meta.url, 'public')));

app.listen( port, () => {
   console.log(`Example app listening on port ${port}`);
})