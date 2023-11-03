import React from 'react'
import home from "../assets/home.avif"

const Home = ({isLoggedIn}) => {
  return (
  <div className=' '>
  <br/>
  <div className='flex justify-center items-center text-white text-xl'>
  FitFlex: Your fitness tracker, your way
    <br/>
    <br/>
  Track your fitness goals, get motivated, and stay on track with the FitFlex fitness tracker application. 
  <br/>FitFlex is the most comprehensive and user-friendly fitness tracker app on the market, 
    <br/>
    <br/>
  </div>
    <div className='flex justify-center items-center'>
    <img src={home}/>
    </div>
    </div>
  )
}

export default Home
