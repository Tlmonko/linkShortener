const Router  = require('express')
const Link = require('../models/link')
const router = Router()

router.post('/shorten', (request, response) => {
    let url = request.param('urlToShorten')
    const link = new Link({
        url: url
    })
    await link.save();
})

router.get('/', async (request, response) => {
    const links = await Link.find({})
})

module.exports = router