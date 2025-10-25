import { Router } from "express";
import { userService } from "../services/index.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const userController = Router();

userController.get('/register', isGuest, (req,res) =>{

   res.render('users/register', {pageTitle: 'Register Page'});
});

userController.post('/register', isGuest, async(req, res) => {
    const {email, password} = req.body;
    
    try {
        const token = await userService.register(email, password);

        res.cookie('auth', token);
        res.redirect('/');

    } catch (err) {
        res.render('users/register', {
            error: getErrorMessage(err), 
            user:{email}});
    }    
   
});

userController.get('/login', isGuest, (req,res) =>{

   res.render('users/login', {pageTitle: 'Login Page'});
});

userController.post('/login', isGuest, async(req, res) => {
    const {email, password} = req.body;
    const token = await userService.login(email, password);
    res.cookie('auth', token);

    res.redirect('/');
   
});

userController.get('/logout', isAuth, async(req, res) =>{
    res.clearCookie('auth');
    res.redirect('/');
})

export default userController;