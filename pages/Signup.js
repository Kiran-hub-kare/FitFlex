import React from 'react'
import Template from '../components/Template'
import fitness from "../assets/fitness.avif";

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="The Future of Health and Fitness Tracking Is Here"
      desc1="Sign up for a free trial of our health tracker app today and see the difference it can make."
      image={fitness}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
