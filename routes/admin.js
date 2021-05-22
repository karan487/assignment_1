const path = require('path');

const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
//  /admin/add-news=>GET
router.get('/add-news', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-news.html'));
});

//  /admin/add-news=>POST
router.post('/add-news', (req, res, next) => {
    const data = req.body.title;
    //console.log(req.body);
    console.log(res.json(data));
    console.log("JSON data printed");
    //res.redirect('/');
});

module.exports = router;