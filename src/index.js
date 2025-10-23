import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import routes from './routes.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();
// Setup DATABASE  *** името на базата данни  dbname е хубаво да се промени

try {
    await mongoose.connect('mongodb://localhost:27017', {
    dbname: 'FriendlyWorld'
});

console.log("Перфектно базата данни е вързана успешно");
    
} catch (err) {
    console.log("Въй неще се прееба базата данни");
    console.err(err.message);
}



//Config hanlebars engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: { 
        allowProtoPropertiesByDefault: true, 
        allowProtoMethodsByDefault: true }
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');


//add static middleware
app.use(express.static('src/public'));

//add cookie-parser
app.use(cookieParser());

// Add body parser
app.use(express.urlencoded({extended: false}));

// Use Auth middleware
app.use(authMiddleware)

// Add route
app.use(routes); 

app.listen(5000, () => console.log('Express Server is listening on http://localhost:5000...')
);