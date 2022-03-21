import { View, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'

const BodyInfoNew = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>TA: Ethereum Revisits $2.5K, Why Recovery Could Be Capped
          <Image style={{ padding: 20 }}
            source={require('../assets/setup.png')} />
          <Text style={{ ...styles.title, color: "#0CA3F8", }}>{` `}ETH NEAR{` `}</Text>
          <Text style={{ fontSize: 10, color: "#969696" }}>1h ago</Text>
        </Text>
        <Text style={styles.subtitle}>
          <Text style={{ fontSize: 10, color: "#969696" }}>by</Text>
          <Text style={{ color: "#FF8A00", }}>{`  `}newWbtc.com{`  `}</Text>
          <Image style={{ padding: 20 }}
            source={require('../assets/wifi.png')} />
        </Text>
        <View style={styles.underCenterItem}>
          <View style={{ flexDirection: "row", alignItems: 'center' }}>
            <Image
              source={require("../assets/down.png")}
            />
            <Text style={{ color: "white", fontSize: 12, color: "#C2C4C9" }}>-332</Text>

          </View>
          <View style={styles.childunderCenterItem}>
            <Image
              source={require("../assets/message.png")}
            />
            <Text style={{ color: "white", fontSize: 10, bottom: 6, color: "#C2C4C9" }}>2</Text>
          </View>
          <View
            style={styles.childunderCenterItem}>
            <Image
              source={require("../assets/Up.png")}
            />
            <Text style={{ color: "white", fontSize: 10, bottom: 6, color: "#C2C4C9" }} >2</Text>
          </View>
        </View>
      </View>
      <View style={styles.infoshare}>
        <View style={styles.leftinfoshare}>
          <Image
            source={require("../assets/coment.png")}
          />
          <Text style={{ fontSize: 13, color: "#969696" }}>{`  0  `}{"comment"}</Text>
        </View>
        <View style={styles.rightinfoshare}>
          <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
            <Text style={{ fontSize: 13, color: "white" }}>{`     `}Subsribe to comments</Text>
            <Text style={{ fontSize: 13, color: "white" }}>{`         Share`}</Text>
          </View>
        </View>
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholder={"Type Something in Text Area."}
          placeholderTextColor={"#9E9E9E"}
          numberOfLines={10}
          multiline={true}
        />
        <View
          style={styles.customcamera}
        >
          <View style={styles.customcomment}>
            <Text style={{ color: '#1EA9D4', fontWeight: "bold" }}>Comment</Text>
          </View>
          <View >
          <Image
              style={{marginLeft:260,width:30,height:30,marginTop:10}}
              source={require("../assets/OIP.png")}
            />

          </View>
        </View>
        <View style={styles.decription}>
          <Text style={{marginTop:12}}>
            <Text style={{ color: "#FF8A00",fontWeight: "bold",fontSize:15}}>Lê Đăng Long</Text>
            <Text style={{ color: "white", }}> {"     "} Def more to nfts than art or game related things, just check out what Coval/Emblem vaults can do, its crazy what their nft tech is
              capable of beyond the usual
              longledang</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent:"space-between",width:250,marginTop:20}}>
        <Image
            style={{width:30,height:30}}
            source={require("../assets/like.png")}
          />
          <Image
            style={{width:30,height:30}}
            source={require("../assets/dislike.png")}
          />
          <Text style={{ fontSize: 16, color: "#969696" }}>Reply</Text>
          <Text style={{ fontSize: 16, color: "#969696" }}>Tip</Text>
          <Text style={{ fontSize: 16, color: "#969696" }}>48min ago</Text>

        </View>
      </View>
      <View >
      </View>


    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 20,

  },
  title: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold"
  },
  centerItem: {
    width: "80%",
    paddingLeft: 13
  },
  hoverStyle: {
    backgroundColor: "#FFFFFF"
  },
  underCenterItem: {
    flexDirection: 'row',
    marginTop: 6,
  },
  childunderCenterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20
  }
  , leftinfoshare: {
    width: "30%",
    borderRightWidth: 1,
    borderColor: "white",
    flexDirection: 'row',
    alignItems: 'center',
  }
  , infoshare: {
    backgroundColor: "#282828",
    flexDirection: 'row',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  rightinfoshare: {
    flexDirection: 'row',
    width: "70%",
    justifyContent: 'space-between',
  },
  textInput: {
    backgroundColor: 'black',
    top: 10,
    paddingLeft: 10,
    color: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  customcamera: {
    height: 50,
    backgroundColor: "gray",
    borderColor: "white",
    borderWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  customcomment: {
    width: 100,
    borderWidth: 1,
    backgroundColor: "black",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    top: -1,
    left: -1,
    position: "absolute",
    height: 50,
    borderBottomLeftRadius: 10,
    borderColor: "#1EA9D4",
  }
});

export default BodyInfoNew