import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const TextInputWIthLable = (
    {
        lable,
        value,
        placeholder,
        onChangeText,
        isSecureText,
        ...props
    }
) => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.lableStyle}
            >{lable}
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                secureTextEntry={isSecureText}
                placeholderTextColor={'gray'}
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        padding: 5,
    },
    input: {
        backgroundColor: "#2C2C2C",
        width: 250,
        marginTop: 5,
        height: 50,
        color: "white",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: "100%"
    },
    lableStyle: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    }
});
export default TextInputWIthLable