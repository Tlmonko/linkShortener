const Router = require('express')
const Link = require('../models/link')
const bodyParser = require('body-parser')
const router = Router()

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})


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
	const link = await Link.findOne({'_id': id})
	link.plusView()
	res.redirect(`http://${link.url}`)
})

router.get('/:id/views', jsonParser, async (req, res) => {
	const id = req.params.id;
	const link = await Link.findOne({'_id': id})
	res.send({
		'viewCount': link.countOfViews
	})
})

module.exports = router