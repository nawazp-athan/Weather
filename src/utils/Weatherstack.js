const request = require('postman-request')
//const url = 'http://api.weatherstack.com/current?access_key=c399d5888029bc7af0b46626ada5d366&query=new%20delhi&units=f' //for tempearture in fehrenheit
// request({url: url},(error,response)=>{  //returns the response if no error encountered else error is returned and no response returned
//     const data = JSON.parse(response.body)
//     console.log(data.current)
// })
const weatherRequest = (latitude,longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=c399d5888029bc7af0b46626ada5d366&query='+latitude+','+longitude
    request({url,json: true},(error,{body})=>{  //by setting json to true it returns response in json if no error found //
        if(error){
            callback('Unable to connect to internet',undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }
        else{
        //console.log(response.body.current)
        callback(undefined,body.current.weather_descriptions[0]+' .It is currently '+body.current.temperature+' degree .It feels like '+body.current.feelslike+' degree out.The humidity is '+body.current.humidity+'%')
        }
    })
}
// weatherRequest('28.7', '77.2', (error, data) =>{
//     console.log('error', error)
//     console.log('data', data)
// })
module.exports = weatherRequest

// const url = 'http://api.weatherstack.com/current?access_key=c399d5888029bc7af0b46626ada5d366&query=new%20delhi&units=f'
// request({url: url,json: true},(error,response)=>{  //by setting json to true it returns response in json if no error found
//     if(error){
//         console.log('Unable to connect to internet')
//     }else if(response.body.error){
//         console.log('Unable to find location')
//     }
//     else{
//     //console.log(response.body.current)
//     console.log(response.body.current.weather_descriptions[0]+' .It is currently '+response.body.current.temperature+' degree in Delhi.It feels like '+response.body.current.feelslike+' degree out')
//     }
// })
