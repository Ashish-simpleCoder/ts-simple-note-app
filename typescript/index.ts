import {config} from 'dotenv'
import { connect } from 'mongoose'
import express, { urlencoded } from 'express'
import router from './routers/router'
import errHandler from './middlewares/errHandler'
import cors from 'cors'


config()
const {MONGO, PORT, MODE} = process.env


const {json} = express
const app = express()


if(MODE === 'prod'){
    const {join} = require('path')
    app.use(express.static(join(__dirname,'../', 'client/build')))
    connect(MONGO || 'mongodb://localhost:27017/your_db').then(()=>console.log('db ok')).catch(()=>console.log('failed db'))
}else{
    connect('mongodb://localhost:27017/ts-mern-note').then(()=>console.log('db ok')).catch(()=>console.log('failed db'))

}

app.use(cors({
    origin:['http://localhost:3000', 'https://ts-simple-note.herokuapp.com', 'https://ashish-simplecoder.github.io' ],
    credentials:true,
    methods:['GET','POST','DELETE', 'PATCH', 'PUT']
}))
app.use(json())
app.use(urlencoded({extended:true}))
app.use(require('cookie-parser')())
app.use(router)
app.use(errHandler)



app.listen(PORT || 5001)
