const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.get('/getWallpapers', (req, res)=> {
    res.sendFile(filepath)
})


app.listen(port, ()=>console.log(`listening to port ${port}`))