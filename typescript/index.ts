import {config} from 'dotenv'
config()
const {MONGO, PORT, MODE} = process.env

import { connect } from 'mongoose'


import express, { urlencoded } from 'express'
import router from './routers/router'
import errHandler from './middlewares/errHandler'
const {json} = express
const app = express()


if(MODE === 'prod'){
    const {join} = require('path')
    app.use(express.static(join(__dirname,'../', 'client/build')))
    connect(MONGO || 'mongodb://localhost:27017/your_db').then(()=>console.log('db ok')).catch(()=>console.log('failed db'))
 }



app.use(json())
app.use(urlencoded({extended:true}))
app.use(require('cookie-parser'))
app.use(router)
app.use(errHandler)


app.listen(PORT || 5001)
