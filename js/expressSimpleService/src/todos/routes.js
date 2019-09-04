const express = require('express')
const TodosService = require('./TodosService')
const router = express.Router()
router.get('/todos', function(req, res, next) {
    const { db } = req
    const todosService = new TodosService(db)
    todosService
        .listTodos()
        .then(todos => res.status(200).json({ todos }))
        .catch(next)
})
router.post('/todos', function(req, res, next) {
    const { db, body } = req
    const todosService = new TodosService(db)
    todosService
        .createTodo(body)
        .then(todo => res.status(200).json({ todo }))
        .catch(next)
})

router.get('/conf', function(req, res, next) {
    /* const { db } = req */
    const todosService = new TodosService()
    todosService
        .getConf()
        .then(todos => res.status(200).json({ todos }))
        .catch(next)
})

router.get('/api/configuracion/nomenclador/:id', function(req, res, next) {
    /* const { db } = req */
    const todosService = new TodosService()
    todosService
        .getNomenclador(req.params.id)
        .then(nomenclador => {
            
            res.status(200)
            res.type('application/json')
            res.append('Access-Control-Allow-Origin', '*')
            res.set('Access-Control-Allow-Origin', '*')
            res.json({ nomenclador })

            })
        .catch(next)
})

router.post('/api/configuracion/nomenclador/', function(req, res, next) {
    const { body } = req
    const todosService = new TodosService()
    todosService
        .createNomenclador(body)
        .then(nomenclador => {
            
            res.status(200)
            res.type('application/json')
            res.append('Access-Control-Allow-Origin', '*')
            res.set('Access-Control-Allow-Origin', '*')
            res.json({ nomenclador })

            })
        .catch(next)
})

module.exports = router