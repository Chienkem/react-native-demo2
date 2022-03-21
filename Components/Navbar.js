import { View, Text, StyleSheet, Image ,Pressable} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux"

const Navbar = ({ ...props }) => {
  console.log(props)
  const user = useSelector(state => state.user.value)
  return (
    <>
      {
        user.isLoading &&
        <View style={styles.container}>
         <Pressable onPress={()=>{}}>
         <Image
            source={require('../assets/newNavbar.png')}
          />
         </Pressable>
          <Image
            source={require('../assets/usernav.png')}
          />
          <Image
            source={require('../assets/bitcoin.png')}
          />
        </View>}
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    padding: 20,
    flexDirection: 'row',
    backgroundColor: "#373A3C",
    justifyContent: 'space-between',
    alignItems: 'center'
  }

})

export default Navbar