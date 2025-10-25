import { Router } from "express";

const errorController = Router();

errorController.all('/*path', (req,res) =>{

    res.render('404', {pageTitle: 'Page Not Found'});
});

export default errorController;