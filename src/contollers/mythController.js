import { Router } from "express";

import { isAuth } from "../middlewares/authMiddleware.js";
import { mythService }  from "../services/mythService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const mythController = Router();

// Create myth - GET
mythController.get('/create', isAuth, (req, res) => {
    res.render('myths/create', { pageTitle: 'Create new Myth' });
});

// Create myth - POST
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

// Dashboard / list myths
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

export default mythController;
