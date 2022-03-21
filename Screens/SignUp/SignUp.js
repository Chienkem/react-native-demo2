import { View, Text,StyleSheet,TextInput,Pressable  } from 'react-native'
import React from 'react'
import TextInputWIthLable from '../../Components/TextInputWIthLable'
import {useState} from "react"
import ButtonLoader from '../../Components/ButtonLoader'
import validations from '../../helper/validation'
import {showError,showSuccess} from "../../helper/helpFunction"
import HeaderLogin from '../../Components/HeaderLogin'

const SignUp = ({ navigation }) => {
  const [state, setState] = useState({
    isLoading: false,
    username:"",
    email: '',
    password: '',
    isSecure: true
})
const { isLoading, email, username,password, isSecure } = state
const updateState = (data) => setState(() => ({ ...state, ...data }))

const isValidData = () => {
  const error = validations({
      username,
      email,
      password,
  })
  if (error) {
      showError(error)
      return false
  }
  return true
}
const onLogin = () =>{
  const checkValid = isValidData()
  if(!checkValid) return
  showSuccess("Đăng kí tài khoản thành công")
}
  return (
  
      <View style={styles.container}>
      <HeaderLogin title={"Create Account"} decription={"Quickly sign up with Facebook or email and password"}/>
    
      <TextInputWIthLable
        lable="username"
        placeholder="Enter Your UserName"
        onChangeText = {(username)=>{updateState({username:username})}}
      />
      <TextInputWIthLable
        lable="email"
        placeholder="Enter Your Email"
        onChangeText = {(email)=>{updateState({email: email})}}
      />
        <TextInputWIthLable
        lable="password"
        placeholder="Enter Your Password"
        isSecureText= {true}
        onChangeText = {(password)=>{updateState({password:password})}}
      />
      <ButtonLoader 
      onLogin={onLogin}
      text={"SignUp"}/>
      <Pressable
      onPress={()=>{navigation.navigate("Login")}}
      >
        <Text
        style={{color:"white",marginTop:20,marginLeft:150}}>Quay lại đăng nhập
        </Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
  backgroundColor: "#000",
   justifyContent: 'center',
   alignItems: 'center',
  
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default SignUp