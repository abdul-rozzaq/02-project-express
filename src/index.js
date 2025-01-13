import express from 'express';
import { create } from 'express-handlebars';

import multer from 'multer';
import ApisController from './controllers/apis.js';

const app = express();

const hbs = create({
    defaultLayout: "main",
    extname: "hbs"
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(multer().any());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

app.engine("hbs", hbs.engine)
app.set("view engine", "hbs")
app.set("views", "./views")

app.use(ApisController)


app.listen(8080, () => console.log('Server is running on 8080'));