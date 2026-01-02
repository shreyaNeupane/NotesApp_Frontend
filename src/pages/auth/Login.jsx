import React from 'react'
import Form from './component/Form'

const Login = () => {
  return (
    // where we define type(props)is parent , and where we use type(prop) is children
    // props = prent component tells child component what to do
    <Form type="Login" />
  );
}

export default Login
