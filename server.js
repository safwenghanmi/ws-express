const express= require("express")
const app = express();
fs=require("fs")
const PORT=6301
const { timer } = require('./verif');
app.use(express.json())





app.get('/',(req,res)=>{
    if (timer()) {
    fs.readFile('./Home.html','utf8',(err,data)=>{
        err ? res.end('file not found')&& console.log(err) :res.end(data)

    })
}else {
    res.status(403).send('Access Denied: Page available only between 8 am and 5 pm.');
  }

})

app.get('/service',(req,res)=>{
    if (timer()) {
    fs.readFile('./Service.html','utf8',(err,data)=>{
        err ? res.end('file not found')&& console.log(err) :res.end(data)

    })
}else {
    res.status(403).send('Access Denied: Page available only between 8 am and 5 pm.');
  }

})

app.get('/contact',(req,res)=>{
    if (timer()) {
    fs.readFile('./Contact.html','utf8',(err,data)=>{
        err ? res.end('file not found')&& console.log(err) :res.end(data)

    })
}else {
    res.status(403).send('Access Denied: Page available only between 8 am and 5 pm.');
  }

})



app.listen(PORT,(err)=>{
    err ? console.log(err) :
    console.log(`the server is running on port ${PORT}`)
})