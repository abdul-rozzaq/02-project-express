import express from 'express';
import { create } from 'express-handlebars';

import ApisController from './controllers/apis.js';

const app = express();

const hbs = create({
    defaultLayout: "main",
    extname: "hbs"
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.engine("hbs", hbs.engine)
app.set("view engine", "hbs")
app.set("views", "./views")

app.use(ApisController)


app.listen(8080, () => console.log('Server is running on 8080'));