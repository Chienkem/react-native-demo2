import { View, Text, StyleSheet, Image,Pressable ,TextInput } from 'react-native'
import React from 'react'
import {logout} from '../features/user'
import {useDispatch, useSelector} from "react-redux"
import { useState,useRef } from 'react'

const HeaderTopNew = ({navigation}) => {
  const dispatch = useDispatch()
  const refInput = useRef()
  const [isSerch,setIsSearch ] = useState(true)
  const [q,setQ ] = useState("")
  const resetQ = ()=>{
    setQ('')
  }
  const onPressFunction = ()=>{
    setIsSearch(!isSerch)
    console.log(refInput.current.focus())
  }
  return (
    <Pressable 
    onScroll={(e)=>{
     
      setIsSearch(true)}}
    style={ styles.container}>
      <View style={{...styles.topheader,display: `${isSerch ?"flex":'none'}`}}>
        <View style={styles.leftheader}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://cdn.dribbble.com/users/244309/screenshots/14872040/01_4x.jpg"
            }}
          />
         <View style={styles.row}>
         <Text 
          onPress={()=>{dispatch(logout())}}
          style={styles.titleStyle}>TopNew
          </Text>
          <Image
            style={{top:2,left:2}}
            source={require('../assets/dropdown.png')}
          />
         </View>
         <View style={styles.row}>
         <Text 
          onPress={()=>{dispatch(logout())}}
          style={styles.titleStyle}>ShowAll
          </Text>
          {/* <Image
            style={{top:2,left:2}}
            source={require('../assets/dropdown.png')}
          /> */}
         </View>
         <View>
         <Pressable onPress={onPressFunction}>
         <Image
            style={{width:16,height:17}}
            source={require('../assets/search.png')}
          />
          </Pressable>
         </View>
        </View>
        <View style={styles.row}>
        <Image
            style={{right:16}}
            source={require('../assets/Vector.png')}
          />
           <Image
           style={{right:8}}
            source={require('../assets/sun.png')}
          />
        </View>
      
      </View>

        <View>
        <TextInput style={{...styles.input,display: `${isSerch ?"none":'flex'}`}}
          onBlur={()=>{setIsSearch(true)}}
          onChangeText = {(e)=>{setQ(e)}}
          value={q}
          ref={refInput}
          placeholder="Tìm kiếm thông tin"
          placeholderTextColor="gray"
          >
          </TextInput>
          <Pressable style = {{position: 'absolute',position: 'absolute',top:15,right:15}} onPress={()=>{
            resetQ()
            setIsSearch(true)
          }}>
          <Image  
            style={{width:20,height:20,display: `${isSerch ?"none":'flex'}`}}
            source={require('../assets/cancel.png')}
          />
          </Pressable>
        </View>

        <View 
        style={styles.underheader}>
          <View style={styles.overViewUnderHeader} >
            <View style={styles.itemInfoUnderHeader}>
              <Text style={styles.textunderstyle}>
                BTC
              </Text>
              <Text style={styles.textunderstyle}>
                $399
              </Text>
              <Text style={styles.textwarnings}>
                -6.325
              </Text>
            </View>
            <View style={styles.itemInfoUnderHeader}>
              <Text style={styles.textunderstyle}> BTC</Text>
              <Text style={styles.textunderstyle}>
                $399
              </Text>
              <Text style={styles.textwarnings}>
                -6.325
              </Text>
            </View>
            <View style={styles.itemInfoUnderHeader}>
              <Text style={styles.textunderstyle}> BTC</Text>
              <Text style={styles.textunderstyle}>
                $399
              </Text>
              <Text style={styles.textwarnings}>
                -6.325
              </Text>
            </View>
          </View>
          <View style={styles.itemInfoUnderHeader}>
          </View>
          <View style={styles.itemInfoUnderHeader}>
          </View>
        </View>
      
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#353535",
    marginTop: 25,
    width: "100%"
  },
  topheader: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent: 'space-between',
    height:50
  },
  leftheader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "70%",
    justifyContent: 'space-between'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#A5A5A5"
  },
  underheader: {
    padding: 7,
    right:10,
    width: "105%",
    borderWidth: 1.5,
    borderColor: "gray",
  },
  itemInfoUnderHeader: {
    width: "31%",
    flexDirection: 'row',
    justifyContent: 'space-between',


  },
  overViewUnderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textunderstyle: {
    color: "#A5A5A5",
    fontWeight: 'bold'
  },
  textwarnings: {
    color: "red",
  },
  row:{
    flexDirection:"row",
    alignItems:"center",
  },
  input: {
    backgroundColor: "#2C2C2C",
    padding: 10,
    color: "white",
    borderWidth: 1,
    width: "100%"
},
  
});

export default HeaderTopNew