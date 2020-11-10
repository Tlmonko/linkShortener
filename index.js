const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/router')

const PORT = process.env.PORT || 8000;

const app = express()

app.use(routes);
app.use(express.urlencoded({extended: true}))

async function start() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.osl6e.mongodb.net/mydb?retryWrites=true&w=majority', {
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