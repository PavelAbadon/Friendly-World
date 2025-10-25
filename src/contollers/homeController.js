import { Router } from "express";

const homeController = Router();

homeController.get('/', (req,res) =>{
   //Проверка дали authentication работи правилно
   //console.log(req.user);
   res.render('home', {pageTitle: 'Home Page'});
});

export default homeController;