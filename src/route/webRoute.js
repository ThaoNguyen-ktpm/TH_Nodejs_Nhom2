import express  from 'express'
import getHomePage from '../controllers/HomeController.js'
import aboutPage from '../controllers/AboutController.js'
import handleNotFound from "../controllers/ErrorController.js";
import register from "../controllers/newUser.js";
import userController from "../controllers/UserController.js";


const router = express.Router()
const initWebRoute = (app) => {
    
    router.get('/', getHomePage)
    router.get('/about', aboutPage)
    router.get('/register', register );
    router.get('/list-user',userController.getAllUser);  
    router.use(handleNotFound);
    return app.use('/',router)
}
export default initWebRoute