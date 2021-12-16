import React, { useState } from 'react';
import './Weather.css'
function WeatherCheck(){
    const[myCity,setMyCity]=useState(" ")
    const[temp,setTemp]=useState("")
    const handleChange=(e)=>{
        setMyCity(e.target.value)
    }
    const mySubmitting=(e)=>{
        e.preventDefault()
        // console.log(myCity)
        // myData()
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
            response=>response.json()
        ).then(
                data => {const kelvin= data.main.temp;
                  const celcius = kelvin - 273.15;
                  setTemp("Temperature At "+myCity+"\n"+Math.round(celcius)+"°C");
                //console.log(temp)
                }
            ).catch(
                function myerror(error){
                console.log(error)
            })
            setMyCity("");
    }
    // const myData=async()=>{
    //     const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=d885aa1d783fd13a55050afeef620fcb`)
    //     // console.log(response)
    //     const correctData= await response.json()
    //     // console.log(correctData)
    //     const kelvin=await correctData.main.temp
    //     // console.log(kelvin)
    //     const celsius=await kelvin-273.15
    //     console.log(celsius)
    // }
    return(
        <div className='Weather text-center p-3'>
            <form onSubmit={mySubmitting}>
                <input type='text'onChange={handleChange}value={myCity}/>&nbsp;
                <input type='submit' className='btn-danger'/>
            </form>
            <h1>{temp}</h1>
        </div>
    )
}
export default WeatherCheck;