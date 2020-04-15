const express = require('express')
const app = express()
const port = 3000


var myLogger = function (req, res, next) {
    console.log(req.method + " " +req.url)
    next()
  }

var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    console.log(req.requestTime);
    next()
  }

app.use(myLogger)
app.use(requestTime)

app.route('/')
    .get(function(req,res){
        res.send('GET /')
    })

app.route('/clients')
    .get(function(req,res){
        res.send('GET clients')
    })
    .post(function(req,res){
        res.send('POST client')
    })

app.route('/clients/:idClient')
    .get(function(req,res){
        res.send(`GET client with idClient = ${req.params.idClient}`)

    })
    .put(function(req,res){
        res.send(`PUT client with idClient = ${req.params.idClient}` )

    })
    .delete(function(req,res){
        res.send(`DELETE client with idClient = ${req.params.idClient}`)
    })

app.route('/clients/:idClient/contracts')
    .get(function(req,res){
        res.send(`GET contracts from client with idClient = ${req.params.idClient}`)

    })
    .post(function(req,res){
        res.send(`POST contract from client with idClient = ${req.params.idClient}`)

    })

app.route('/clients/:idClient/contracts/:idContract')
    .get(function(req,res){
        res.send(`GET contract with idContract = ${req.params.idContract} from client with idClient = ${req.params.idClient}`)

    })
    .put(function(req,res){
        res.send(`PUT contract with idContract = ${req.params.idContract} from client with idClient = ${req.params.idClient}`)

    })
    .delete(function(req,res){
        res.send(`DELETE contract with idContract = ${req.params.idContract} from client with idClient = ${req.params.idClient}`)
    })




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))