const { Schema, model } = require('mongoose')

const schema = new Schema ({
    id: {
        type: Int,
        required: true
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

module.exports = model('link', schema);