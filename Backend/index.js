const express = require('express');
const mongoDB = require('./db');  
const app = express();
const port = 5000;

mongoDB(); 

app.get('/', (req, res) => {
  res.send('Server is running ✅');
});
app.use(express.json());
app.use('/api',require("./Routes/CreateUser"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
