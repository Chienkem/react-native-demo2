import { View, Text, Button, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
const ButtonSocial = ({ text, backgroundColor }) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
                style={{ ...styles.button, backgroundColor: backgroundColor }}
            >
                <Text style={{ color: "white", fontWeight: "bold", lineHeight: 33 }}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        alignItems: "center",
        width: 300,
        alignItems: 'center',
        height: 35,
    },

});

export default ButtonSocial