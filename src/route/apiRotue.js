import express from 'express';
import APIControllers from '../controllers/APIControllers.js'


let router = express.Router();


const initAPIRoute = (app) => {
  router.get('/users', APIControllers.getAllUser);
  router.post('/create-user', APIControllers.createNewUser);
  router.put('/update-user', APIControllers.updateUser);
  router.delete('/delete-user/:stt', APIControllers.deleteUser);
  return app.use('/api/v12/', router);
 
};

export default initAPIRoute;