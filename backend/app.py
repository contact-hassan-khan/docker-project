from flask import Flask, request, jsonify  
from flask_cors import CORS  

app = Flask(__name__)  
CORS(app)  # Enable CORS  

@app.route('/submit', methods=['POST'])  
def submit():  
    data = request.json  
    print("Received data:", data)  
    return jsonify({"status": "success", "data": data})  

if __name__ == '__main__':  
    app.run(host='0.0.0.0', port=5000)  
