import { View, Text, StyleSheet, TextInput,Pressable } from 'react-native'
import React from 'react'
import TextInputWIthLable from '../../Components/TextInputWIthLable'
import { useState } from "react"
import ButtonLoader from '../../Components/ButtonLoader'
import validations from '../../helper/validation'
import { showError, showSuccess } from "../../helper/helpFunction"
import { useDispatch, useSelector } from "react-redux"
import HeaderLogin from '../../Components/HeaderLogin'
import ButtonSocial from '../../Components/ButtonSocial'
import { login } from "../../features/user"
const ForgotPassword = ({ navigation }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.value)
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
  })
  const { isLoading, email, password } = state
  const updateState = (data) => setState(() => ({ ...state, ...data }))
  const isValidData = () => {
    const error = validations({
      email,
    })
    if (error) {
      showError(error)
      return false
    }
    return true
  }
  const onLogin = async () => {
    const checkValid = isValidData()
    if (checkValid) {
      showSuccess("Đã gửi mã xác nhận vui lòng kiểm tra email")
      navigation.navigate("Login")
    }
  }
  return (
 <View style={{flex: 1,backgroundColor:"black"}}>
<View style={styles.container}>
      <HeaderLogin title = "Password Reset" decription ="please enter your email address"/>
      <TextInputWIthLable
        lable="email"
        placeholder="Nhập email của bạn"
        onChangeText={(email) => { updateState({ email: email }) }}
      />
     
      <ButtonLoader
        onLogin={onLogin}
        text={"Forgotpassword"} />
    </View>
 </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black"
  },
  buttonContainer: {
    margin: 15
  },
  alternativeLayoutButtonContainer: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  row:{
    flexDirection: 'row',
    alignItems: "center",
    justifyContent:"space-between",
    width:300,
    height:50
  }
});

export default ForgotPassword