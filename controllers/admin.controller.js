const db = require('../db/app');

const adminController = {
    
    async getForm(req,res) {
        const showForm = await res.render('admin/form_add_noticia', 
        {title:'Adicionar Nova Notícia'});
    },


    async gravarNoticia(req,res) {
        const { titulo, conteudo } = req.body;
        await db.query('INSERT INTO noticias (titulo, conteudo) VALUES ($1, $2)', [titulo, conteudo], (err, result)=>{
        res.redirect('/noticias');
        });
    }

};

module.exports = adminController;