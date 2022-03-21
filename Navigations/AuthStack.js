import React from 'react'
import Login from '../Screens/LogIn/Login'
import SingUp from '../Screens/SignUp/SignUp'
import ForgotPassword from '../Screens/ForgotPassWord/ForgotPassWord'
import InfoNews from '../Screens/InfoNews/InfoNews'
const AuthStack = (Stack) => {
  return (
    <>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="SignUp" component={SingUp} />
      <Stack.Screen name="forgotpassword" component={ForgotPassword} />
      <Stack.Screen name="infonews" component={InfoNews} />

    </>
  )
}
export default AuthStack