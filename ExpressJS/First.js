const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello guys.....Welcome to Threye!')
})
app.get(`/about`, (req,res) => {
res.sendFile(path.join(__dirname,`index.html`))  
//res.json({"aashu":34})  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  
})
