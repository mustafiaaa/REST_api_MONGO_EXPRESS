//importing dependencies 
express = require("express")
bodyParser = require("body-parser")
mongooes = require("mongoose")
logger = require("morgan")

route = require('./server/routes/main')

//set up dependencies 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(logger("dev"))

//set up mongoos
mongooes.connect('mongodb://localhost/empApp')
.then(()=>{
    console.log('Database connected')
})
.catch((err)=>{
    console.log('Error occured while connecting to DB')
})

//set up port 
const PORT = 5050

//set up route
app.get('/', (req, res)=>{
    res.status(200).json({
        message : 'Welcome to Mongo Express CRUD REST API'
    })
})

//setting route
app.use('/api/', route)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})