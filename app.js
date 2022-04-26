const express= require('express')
const noticias = require('./mockup.js')

const app = express()

app.set('view engine','ejs')
app.use(express.static('./views/public'))


app.get('/',(req,res) =>{
    res.render('home/index',{noticias:noticias.slice(0,3),title:'Home'})
})


app.get('/noticias',(req,res) =>{
    res.render('noticias/noticias',{noticias:noticias, title:'Noticias'})
})


app.get('/noticia',(req,res) =>{
    var id= req.query.id
    res.render('noticias/noticia',{noticia:noticias[id],title:'Noticia'})
})

app.get('/admin',(req,res) =>{
    res.render('admin/form_add_noticia',{title:'Formulário'})
})

app.listen(3000,() =>{
    console.log('Escutando na porta 3000 com Express')
    console.log('Pressione CTRL+C para encerrar o servidor')
})

