const express = require('express')
const mogoose = require('mongoose')
const routes = require('./routes/router')

const PORT = process.env.PORT || 8080;

const app = express()

app.use(routes);

async function start() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.osl6e.mongodb.net/<dbname>?retryWrites=true&w=majority', {
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