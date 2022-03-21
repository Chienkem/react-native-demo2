import { View, Text, ScrollView, SafeAreaView, StyleSheet,Image,Pressable } from 'react-native'
import React from 'react'
import InfoNewTableComent from '../../Components/InfoNewTableComent'
import BodyInfoNews from '../../Components/BodyInfoNew'
const InfoNews = ({navigation}) => {
    return (
        < >
            <ScrollView style={styles.container}>
                <View style={styles.ontop}>
                <Image
                        style={{ top: 2, left: 14 ,marginRight:20 }}
                        source={require('../../assets/back.png')}
                    />
                <Pressable onPress={()=>{navigation.navigate("news")}}>
                <Text style={styles.textStyleBack}>Back</Text>
                </Pressable>
                </View>
                <InfoNewTableComent />
                <BodyInfoNews navigation={navigation}/>
            </ScrollView>
        </>

    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor:"#353535",
    }
    ,
    textStyleBack: {
        fontSize: 18,
        lineHeight: 40,
        fontWeight: "bold",
        color: "#A5A5A5",

    }
    ,
    ontop: {
        flexDirection:'row',
        alignItems: 'center',
    }
})


export default InfoNews