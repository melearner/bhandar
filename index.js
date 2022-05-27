const express = require('express')

const app=express()
const PORT=5000



app.use(express.json())

app.get('/',(req,res) => {
    res.status(200).send({
        title:"welcome"
    })
})

app.listen(PORT,()=>console.log('listening on 5000'))