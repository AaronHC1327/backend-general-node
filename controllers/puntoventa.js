const { response, request } = require('express')

const pvGet = (req = request, res = response) => {
    const query = req.query;
    //const { nombre = '', page, limit } = req.query;
    res.json({
        msg: 'Get controller',
        query
    })
}

const pvPost = (req = request, res = response) => {
    const body = req.body;
    res.json({
        msg: 'Post controller',
        body
    })
}

const pvPut = (req = request, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'Put controller',
        id
    })
}

const pvDel = (req = request, res = response) => {
    res.json({
        msg: 'Del controller'
    })
}

module.exports = {
    pvGet,
    pvPost,
    pvPut,
    pvDel
}