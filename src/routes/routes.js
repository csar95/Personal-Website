'use strict'

const express = require('express');
const router = express.Router();
const contentful = require('../server/contentful');

// A middleware sub-stack that handles GET requests to the '/' path
router.get('/', (req, res) => {
    loadStartContent(res, 'index');
})

function loadStartContent(res, page) {

    contentful.getContent(process.env.space, process.env.accessToken, process.env.indexId).then( (data) => {
        // Render page with the content from Contentful
        return res.render(page, {
            content : data
        });
    }).catch((e) => {
        console.log('An error has occurred when getting content from Contentful');
        res.status(500, {
            error : e
        });
    });
}

module.exports = router;