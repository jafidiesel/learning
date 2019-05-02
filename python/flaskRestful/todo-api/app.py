#!flask/bin/python
# https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask
from flask import Flask, jsonify, abort, make_response, request, url_for

app = Flask(__name__)

tasks = [
    {
        'id': 1 ,
        'title': u'Buy groceries',
        'description': u'milk, cheese, pizza',
        'done': False
    },
    {
        'id': 2,
        'title': u'Learn python',
        'description': u'Need a tutorial',
        'done': False
    }
]

@app.route('/')
def index():
    return "main"

# Get all tasks
@app.route('/todo/api/v1.0/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': [make_public_task(task) for task in tasks]})

# Get a task by id
@app.route('/todo/api/v1.0/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = [task for task in tasks if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    return jsonify({'task': task[0]})

# Override error handler
@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not Found'}), 404)

# Post a task
@app.route('/todo/api/v1.0/tasks', methods=['POST'])
def create_task():
    if not request.json or not 'title' in request.json:
        abort(400)
    task = {
        'id': tasks[-1]['id'] + 1,
        'title': request.json['title'],
        'description': request.json.get('description', ""),
        'done': False
    }

    tasks.append(task)
    return jsonify({'task': task}), 201

# Update a task
@app.route('/todo/api/v1.0/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    task = [task for task in tasks if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    if not request.json:
        abort(400)
    if 'title' in request.json and type(request.json['title']) != str :
        abort(400)
    if 'descripcion' in request.json and type(request.json['description']) is not str:
        abort(400)
    if 'done' in request.json and type(request.json['done']) is not bool:
        abort(400)
    task[0]['title'] = request.json.get('title', task[0]['title'])
    task[0]['description'] = request.json.get('description', task[0]['description'])
    task[0]['done'] = request.json.get('done', task[0]['done'])
    return jsonify({'task': task[0]})

# Delete a task
@app.route('/todo/api/v1.0/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    task = [task for task in tasks if task['id'] == task_id]
    if len(task_id == 0):
        abort(404)
    tasks.remove(task[0])
    return jsonify({'result': True})

# This function returns a task uri
def make_public_task(task):
    new_task = {}
    for field in task:
        if field == 'id':
            new_task['uri'] = url_for('get_task', task_id=task['id'], _external=True)
        else:
            new_task[field] = task[field]
    return new_task
# All we are doing here is taking a task from our database and creating a new task that has all the fields except id, which gets replaced with another field called uri, generated with Flask's url_for.


if __name__ == '__main__':
    app.run(debug=True)