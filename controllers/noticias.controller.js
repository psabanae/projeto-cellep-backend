const db = require('../db/app');

const noticiasController = {
    async listarIndex(req, res) {
        const getNoticiasIndex = await db.query('SELECT * FROM noticias ORDER BY id_noticia DESC LIMIT 3');
            res.render('home/index', {noticias: getNoticiasIndex.rows, title:'Home'});
        },


    async listarTudo(req, res) {
        const getAll = await db.query('SELECT * FROM noticias ORDER BY id_noticia DESC');
        res.render('noticias/noticias', { noticias: getAll.rows, title:'Todas as Notícias'});
    },

    async listarUma(req, res) {
        const id = req.query.id;
        const getOne = await db.query (`SELECT * FROM noticias WHERE id_noticia=${id}`);
        res.render('noticias/noticia', { noticia: getOne.rows[0], title:`${getOne.rows[0].titulo}`});
    }

};

module.exports = noticiasController;