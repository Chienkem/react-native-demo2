import React from 'react'
import TopNew from '../Screens/Topnew/TopNew'
import Profile from './../Screens/Profile/Profile';
import InfoNews from '../Screens/InfoNews/InfoNews'
const MainStack = (Stack) => {
  return (
    <>
      <Stack.Screen name="news" component={TopNew} />
      <Stack.Screen name="SignUp" component={Profile} />
      <Stack.Screen name="infonews" component={InfoNews} />
    </>
  )
}
export default MainStack