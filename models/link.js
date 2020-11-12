const { nanoid } = require('nanoid')
const { Schema, model } = require('mongoose')

const schema = new Schema ({
    _id: {
        type: String,
        default: () => nanoid(12)
      },
    url: {
        type: String,
        required: true
    },
    countOfViews: {
        type: Number,
        required: true,
        default: 0
    }
})

schema.methods.plusView = async function plusView() {
    this.countOfViews += 1
	await this.save()
}

module.exports = model('Link', schema);