import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonLoader = ({text,...props}) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                 onPress={props.onLogin}
            >
                <Text  style={{color: "#0085FF",fontWeight: "bold"}}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        marginTop:20,
        alignItems: "center",
        padding: 10,
        width: 300,
        borderWidth: 1.5,
        borderColor: "blue",
        borderRadius: 50,
    },
});

export default ButtonLoader