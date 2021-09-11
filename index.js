import express from 'express'

const app = express(
)

app.get('/',(req,res)=>res.send({hello:'world'}))

const port = 3000
app.listen(port,()=>console.log(`Server running on http://localhost:${port}`))