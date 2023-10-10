
import dotenv from "dotenv";
import express from "express";
import session from 'express-session';
import configViewEngine from "./configs/viewEngine.js";
import initWebRoute from "./route/webRoute.js";
import initAPIRoute from "./route/apiRotue.js";
import flash from 'connect-flash';
import path from 'path'
const app = express();
dotenv.config();
const port = process.env.PORT || 8080;

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(flash());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

configViewEngine(app);
initAPIRoute(app);
initWebRoute(app);

app.use(express.static(path.join(import.meta.url, 'public')));

app.listen( port, () => {
   console.log(`Example app listening http://localhost:${port}`);
})