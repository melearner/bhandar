const express = require('express')
let data = require('./data')
const app=express()
const PORT=5000
console.log(data)


app.use(express.json())

app.get('/',(req,res) => {
    console.log(data)
    res.status(200).send(JSON.stringify(data));
})

app.listen(PORT,()=>console.log('listening on 5000'))