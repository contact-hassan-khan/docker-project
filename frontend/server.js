const express = require('express');  
const path = require('path');  
const app = express();  
const PORT = 3000;  

// Serve static files  
app.use(express.static(path.join(__dirname, 'public')));  

// Proxy POST request to Flask backend  
app.post('/submit', (req, res) => {  
  fetch('http://backend:5000/submit', {  
    method: 'POST',  
    headers: req.headers,  
    body: JSON.stringify(req.body),  
  })  
  .then(response => response.json())  
  .then(data => res.json(data))  
  .catch(error => res.status(500).send(error));  
});  

app.listen(PORT, '0.0.0.0', () => {  
  console.log(`Frontend running on http://0.0.0.0:${PORT}`);  
});  
