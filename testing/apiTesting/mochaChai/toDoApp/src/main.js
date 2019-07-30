const express = require('express')
const { MongoClient } = require('mongodb')
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017'
const MONGODB_DB = process.env.MONGODB_DB || 'todoman'
main()
async function main() {
    const mongoClient = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true
    })
    const db = mongoClient.db(MONGODB_DB)
    const app = express()
    app.use(function attachDb(req, res, next) {
        req.db = db
        next()
    })
    app.get('/', function(req, res, next) {
        res.status(200).json({ name: 'todoman-backend' })
    })
    app.listen(PORT, err => {
        if (err) {
            throw err
        }
        // eslint-disable-next-line no-console
        console.log(`api-server listening on port ${PORT}`)
    })
}