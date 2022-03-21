import { View, Text, StyleSheet, Image,Pressable } from 'react-native'
import React from 'react'
const NewItem = ({ navigation}) => {
    return (
        <Pressable
            onPress={()=>{navigation.navigate("infonews")}}
            style={styles.container}
            hoverStyle={styles.hoverItem}
        >
            <View style={styles.leftItem}>
                <Text
                    style={{ color: "#A5A5A5" }}>14min</Text>
            </View>
            <View style={styles.centerItem}>
                <View style={styles.topChildItem}>
                    <Text style={{ fontSize: 16, color: "white", }}>
                        CEO Ripple: “Vụ kiện với SEC sẽ kết thúc vào năm 2022”
                    </Text>
                    <View style={styles.underCenterItem}>
                    <View style={{ flexDirection:"row" ,alignItems:'center'}}> 
                            <Image  
                                source={require("../assets/down.png")}
                            />
                           <Text style={{ color: "white",fontSize:12,color:"#C2C4C9" }}>-332</Text>

                        </View>
                        <View style={styles.childunderCenterItem}>
                            <Image  
                                source={require("../assets/message.png")}
                            />
                            <Text style={{ color: "white",fontSize:10,bottom:6,color:"#C2C4C9" }}>2</Text>
                        </View>
                        <View style={styles.childunderCenterItem}>
                            <Image  
                                source={require("../assets/message.png")}
                            />
                            <Text style={{ color: "white",fontSize:10,bottom:6,color:"#C2C4C9" }}>2</Text>
                        </View>
                        <View style={styles.childunderCenterItem}>
                            <Image  
                                source={require("../assets/message.png")}
                            />
                           <Text style={{ color: "white",fontSize:10,bottom:6,color:"#C2C4C9" }}>2</Text>

                        </View>
                        <View 
                        style={styles.childunderCenterItem}>
                            <Image  
                                source={require("../assets/message.png")}
                            />
                           <Text style={{ color: "white",fontSize:10,bottom:6,color:"#C2C4C9" }} >2</Text>
                        </View>

                    </View>
                </View>
                <View style={styles.UnderChildItem}>
                </View>
            </View>
            <View style={styles.rightItem}>
                <Text style={{ color: "#A5A5A5", fontSize: 14, fontWeight: "bold" }}>BTC</Text>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        right:2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    centerItem: {
        width: "80%",
        paddingLeft: 20
    },
    hoverStyle: {
        backgroundColor: "#FFFFFF"
    },
    underCenterItem:{
        flexDirection: 'row',
        marginTop:6,
    },
    childunderCenterItem:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:20
    }
}
)




export default NewItem