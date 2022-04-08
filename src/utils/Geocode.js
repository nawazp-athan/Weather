const request = require('postman-request')
const geocodeRequest = (address, callback)=>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURI(address)+'.json?access_token=pk.eyJ1Ijoic2hhaGphaGFuMTIzIiwiYSI6ImNraDNqenQ1MjAxMjkyeW93bGNkeDJsdWQifQ.7tN6X_oJVwEVpp7XAWSYuA'
    request({url, json: true},(error,{body})=>{  //by setting json to true it returns response in json if no error found // destructuring and shorthand syntax
        if(error){
            callback('Unable to connect to internet', undefined)
        }else if(body.features.length==0){
            callback('Unable to find location.Try another search', undefined)
        }
        else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })  
}
// geocodeRequest('New York', (error, data)=>{
//     console.log('error', error)
//     console.log('data', data)
// })
module.exports = geocodeRequest

// const geocodeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/New%20delhi.json?access_token=pk.eyJ1Ijoic2hhaGphaGFuMTIzIiwiYSI6ImNraDNqenQ1MjAxMjkyeW93bGNkeDJsdWQifQ.7tN6X_oJVwEVpp7XAWSYuA'
// request({url: geocodeURL,json: true},(error,response)=>{  //by setting json to true it returns response in json if no error found
//     if(error){
//         console.log('Unable to connect to internet')
//     }else if(response.body.features.length==0){
//         console.log('Unable to find location.Try another search')
//     }
//     else{
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })