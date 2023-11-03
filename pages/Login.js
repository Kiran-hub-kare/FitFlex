import React from 'react'
import Template from '../components/Template'
import doc from "../assets/doc.avif";

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Please log in to your account to access your fitness data and track your progress."
      desc2="Challenge yourself and your friends."
      image={doc}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
