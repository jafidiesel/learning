// https://maximilianschmitt.me/posts/tutorial-rest-api-integration-testing-node-js/
const express = require('express')
const bodyParser = require('body-parser')
const ValidationError = require('./errors/ValidationError')

const PORT =  7000

main()

async function main() {
    
    const app = express()
    app.use(bodyParser.json())
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); 
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Method", "*");
        next();
      });
    
    app.get('/', function(req, res, next) {
        res.status(200).json({ name: 'todoman-backend' })
    })
    
    app.use(require('./todos/routes'))
    
    app.use(function handleErrors(err, req, res, next){
        if(err instanceof ValidationError){
            return res.status(400).json({ error: err })
        }

        next(err)
    })

    app.listen(PORT, err => {
        if (err) {
            throw err
        }
        // eslint-disable-next-line no-console
        console.log(`api-server listening on port ${PORT}`)
    })
}