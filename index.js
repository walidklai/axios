const express=require('express')
const axios=require('axios')

const PORT=process.env.PORT || 3000

const app=express()

const reqOne=axios.get('http://api.openweathermap.org/data/2.5/weather?q=tunis&appid=fc38145bfd4b2c6f57bc21777ccd2223')
const reqTwo=axios.get('http://api.openweathermap.org/data/2.5/weather?q=london&appid=fc38145bfd4b2c6f57bc21777ccd2223')
const reqThree=axios.get('http://api.openweathermap.org/data/2.5/weather?q=paris&appid=fc38145bfd4b2c6f57bc21777ccd2223')

axios.all([reqOne,reqTwo,reqThree])
.then(axios.spread((data1,data2,data3)=>{
    console.log(`TUNISIA////////

    ${JSON.stringify(data1.data)}


    LONDON////////

    ${JSON.stringify(data2.data)}


    PARIS////////
    
    ${JSON.stringify(data3.data)}`)
}))
.catch(err=>{
    console.log(err)
})

//connection to HTTP server

app.listen(PORT,err=>{
    err?console.log(err):
    console.log(`Server engaged on port ${PORT}....`)
})