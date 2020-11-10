const { Router } = require('express')
const router = Router()

router.post('/shorten', (request, response) => {
    let url = request.param('urlToShorten')
    
})

module.exports = router