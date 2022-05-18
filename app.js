const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config()

// import routes
const userRoutes = require('./routes/user')

// app
const app = express();

mongoose
    .connect(process.env.DATABASE, {
        // useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true

    })
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err))

// //// connect mongodb atlas
// const mongodbUsername = "tuanphanfi"
// const mongodbPassword = "UfH6aKeRkfXLDZAx"

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${mongodbUsername}:${mongodbPassword}@e-commerce-platform.lqphn.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
//     console.log("Mongodb Atlas Connected")
//     console.log(collection)
// });
// // connect mongodb \\


// routes
// app.get('/', (req, res) => {
//     res.send("Hello from node updated")
// })

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())



// routes middleware
app.use("/api", userRoutes)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})