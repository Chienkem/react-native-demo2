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
const Login = ({ navigation }) => {
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
      password
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
      dispatch(login({ ...state, isLoading: true }))
      showSuccess("Đăng nhập thành công")
    }
  }
  return (
    <View style={styles.container}>
      <HeaderLogin title = "Welcome back!" decription = "Or login using your e-mail and password:"/>
      <TextInputWIthLable
        lable="email"
        placeholder="Nhập email của bạn"
        onChangeText={(email) => { updateState({ email: email }) }}
      />
      <TextInputWIthLable
        lable="password"
        placeholder="Nhập password của bạn"
        isSecureText={true}
        onChangeText={(password) => { updateState({ password: password }) }}
      />
      <ButtonLoader
        onLogin={onLogin}
        text={"Login"} />
      <View style={styles.row}>
      <Pressable
      onPress={()=>{navigation.navigate("SignUp")}}
      >
        <Text
        style={{ color: 'white',  }}>Đăng kí tài khoản
        </Text>
      </Pressable>
      <Pressable
      onPress={()=>{navigation.navigate("forgotpassword")}}
      >
        <Text style={{ color: 'white',  }}>Quên mật khẩu</Text>
      </Pressable>
      </View>
      <ButtonSocial text="Đăng nhập bằng facebook" backgroundColor="#232CF9" />
      <ButtonSocial text="Đăng nhập bằng Twitter" backgroundColor="#1B70F0" />
      <ButtonSocial text="Đăng nhập bằng Google" backgroundColor="#EE3535" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default Login