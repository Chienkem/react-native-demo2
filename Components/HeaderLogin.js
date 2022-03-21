import { View, Text,StyleSheet, } from 'react-native'
import React from 'react'

const HeaderLogin = ({title,decription}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>{title}</Text>
      <Text style={styles.smallText}>{decription}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
container: {
    padding: 30, 
    alignItems:"center",
},
textstyle:{
    color: 'white',
    fontSize:40
},
smallText: {
  
    color: 'white', 
}
})

export default HeaderLogin