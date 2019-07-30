/* eslint-env mocha */

const { expect } = require('chai')
const testServer = require('../../../test-helpers/test-server')
const testDb = require('../../../test-helpers/test-db')

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

describe('GET /todos', function() {
  testServer.useInTest()
  testDb.useInTest()
  
    it('responds with 200 { todos }', async function() {
        const api = this.api
        //console.log(api)

        // Create three todos
        await api.post('/todos', { title: 'Todo 1' })
        await api.post('/todos', { title: 'Todo 2' })
        await api.post('/todos', { title: 'Todo 3' })
        await api.post('/todos', { title: 'Todo 4' })

        // Make the actual request to GET /todos
        const response = await api.get('/todos')

        // Assert status code 200
        expect(response).to.have.property('status', 200)

        // Assert that all three todos are included
        expect(response)
            .to.have.nested.property('data.todos')
            .that.is.an('array')
            .with.lengthOf(4)

        const todos = response.data.todos

        // Assert that every todo contains all desired fields
        todos.forEach(todo => {
            expect(todo)
            .to.have.property('title')
            .that.is.a('string')
            expect(todo).to.have.property('completed', false)
            expect(todo)
            .to.have.property('createdAt')
            .that.is.a('string')
            expect(todo)
            .to.have.property('updatedAt')
            .that.is.a('string')
        })

        // Assert that todos are listed in order of creation
        expect(todos.map(todo => todo.title)).to.deep.equal([
            'Todo 1',
            'Todo 2',
            'Todo 3',
            'Todo 4'
        ])
    })


})