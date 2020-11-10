const { Router } = require('express')
const link = require('../models/link')
const router = Router()

router.post('/shorten', (request, response) => {
    let url = request.param('urlToShorten')

})

module.exports = router