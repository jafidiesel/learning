from flask import Flask
import requests

app = Flask(__name__)

@app.route('/hello/<name>')
def hello(name):
    info = requests.get('http://localhost:5000/hello/'+name)
    return info.text

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=90)