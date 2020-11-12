const Router  = require('express')
const Link = require('../models/link')
const bodyParser = require('body-parser')
const ObjectID = require('mongodb').ObjectID;
const router = Router()

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/shorten', urlencodedParser, async (req, res) => {
    let longUrl = req.body.urlToShorten
    const link = new Link({
        url: longUrl
    })
    await link.save()
    res.send({
        "status": "Created",
        "shortenedUrl": `127.0.0.1:8000/${link._id}`
    })
})

router.get('/:id', jsonParser, async (req, res) => {
    const id = req.params.id;
    console.log(id)
    const link = await Link.findOne({'_id': id})
    link.countOfViews += 1
    res.redirect(`http://${link.url}`)
})

module.exports = router