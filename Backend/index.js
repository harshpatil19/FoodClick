const express = require('express');
const mongoDB = require('./db');  
const app = express();
const port = 5000;

mongoDB(); 

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running ✅');
});
app.use((req,res,next)=>{
  
  //this is necessary for CORS it will give error write as it is for all.
  res.setHeader(
  "Access-Control-Allow-Origin",
  "http://localhost:3000"
);

  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
})


app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/LoginUser"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
