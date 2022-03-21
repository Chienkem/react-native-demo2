import { View, Text,StyleSheet,ScrollView, Animated,FlatList,VirtualizedList } from 'react-native'
import React from 'react'
import { useRef,useState} from 'react'
import HeaderTopNew from '../../Components/HeaderTopNew'
import NewItem  from '../../Components/NewItem'
import Navbar from "../../Components/Navbar"
const TopNew = ({navigation}) => {
  const array = [1,23,,4,5,6,12,2,23,3,3,3,3,3,3,33,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,]
  const [display,setDisplay] = useState(true);
  return (
  <>
   <View style={styles.container}>
    <HeaderTopNew display={display}/>
    <ScrollView
    style={{backgroundColor:"#353535"}}
    onScroll={
      (e)=>{
        
      }
    }
    >
      {array.map((item,index)=>{
        return <NewItem
        navigation={navigation}
         key={index} />
      })}
      
    </ScrollView>
    </View>
  </>
  )
}
const styles = StyleSheet.create({
  container: {
  },
  })
export default TopNew