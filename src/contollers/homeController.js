import { Router } from "express";
import { mythService } from "../services/mythService.js";

const homeController = Router();

homeController.get('/', async (req,res) =>{
   const mythsLatestTree = await mythService.getLatestThree();
   res.render('home', {myths: mythsLatestTree, pageTitle: 'Home Page'});
});

export default homeController;