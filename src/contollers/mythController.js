import { Router } from "express";

import { isAuth } from "../middlewares/authMiddleware.js";
import { mythService }  from "../services/mythService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const mythController = Router();


mythController.get('/create', isAuth, (req, res) => {
    res.render('myths/create', { pageTitle: 'Create new Myth' });
});


mythController.post('/create', isAuth, async (req, res) => {
    const mythData = req.body;
    const userId = req.user.id;

    try {
        await mythService.create(mythData, userId);
        res.redirect('/myths'); 
    } catch (err) {
        res.render('myths/create', {
            pageTitle: 'Create new Myth',
            error: getErrorMessage(err),
            myth: mythData,
        });
    }
});


mythController.get('/', async (req, res) => {
    try {
        const myths = await mythService.getAll();
        
        res.render('myths/dashboard', { 
            pageTitle: 'Dashboard', 
            myths 
        });
    } catch (err) {
        res.render('myths/dashboard', {
            pageTitle: 'Dashboard',
            error: getErrorMessage(err),
            myths: []
        });
    }
});

mythController.get('/:id/details', async (req, res)=>{
    const mythID = req.params.id
    const myth = await mythService.getOne(mythID);

    res.render('myths/details', { 
            pageTitle: 'Details page', 
            myth
        })


})

export default mythController;
