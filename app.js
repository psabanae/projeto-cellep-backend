const express= require('express');

const noticiasRoutes = require('./routes/noticias');
const adminRoutes = require('./routes/admin');

const db = require('./db/app');
const port= process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs');
app.use(express.static('./views/public'));

app.use(noticiasRoutes);
app.use(adminRoutes);


app.listen(port,() =>{
    console.log('Escutando na porta 3000 com Express');
});

