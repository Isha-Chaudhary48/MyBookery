import express from 'express';
const app = express();
import expressEjsLayouts from 'express-ejs-layouts';

app.set('view engine', 'ejs');
app.set('views', __dirname +'/views');
app.set('layout', 'layouts/layout');
app.use(expressEjsLayouts);
app.use(express.static('public'));//stylesheet , images

app.listen(process.env.PORT || 3000);




