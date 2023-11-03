import React from 'react'
import Dash from "../assets/Dash.jpeg";

console.log(Dash);

const Dashboard = () => {
  return (
    <div className='flex justify-center items-center text-white text-3xl h-full '>
      <img src={Dash} width={1000}/>
    </div>
  )
}

export default Dashboard
