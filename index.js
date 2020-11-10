const express = require('express')
const mogoose = require('mongoose')

const PORT = process.env.PORT || 8080;

const app = express()

async function start() {
    try {
        await mongoose.connect('', {
            useNewUrlParser: true,
            useFindAndModify: false
        })

        app.listen(PORT, () => {
            console.log('Server started')
        });

    } catch (e) {
        console.log(e);
    }
}

start()