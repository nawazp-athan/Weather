const geocode = require('./utils/Geocode.js')
const weather = require('./utils/Weatherstack.js')
const express = require('express')
const app = express()

app.get('',(req,res)=>{
    res.send('it is myself')
})
app.get('/me',(req,res)=>{
    res.send('it is me')
})

geocode('mumbai',(error, {latitude,longitude,location})=>{
        if(error){
            return console.log(error)
        }
        weather(latitude, longitude, (error,data)=>{
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log(data)
        })
})
app.listen(3000,()=>{
    console.log('server is running on port 3000')
})