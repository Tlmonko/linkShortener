const nanoid = require('nanoid')
const { Schema, model } = require('mongoose')

const schema = new Schema ({
    _id: {
        type: String,
        default: () => nanoid()
      },
    url: {
        type: String,
        required: true
    },
    countOfViews: {
        type: int,
        required: true,
        default: 0
    }
})

module.exports = model('Link', schema);