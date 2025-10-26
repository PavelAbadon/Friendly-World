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
        res.redirect('/myths'); // или където е списъкът с митове
    } catch (err) {
        res.render('myths/create', {
            pageTitle: 'Create new Myth',
            error: getErrorMessage(err),
            myth: mythData,
        });
    }
});

export default mythController;
