import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View>
      <View style={styles.headerProfile}>
      <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://cdn.dribbble.com/users/244309/screenshots/14872040/01_4x.jpg"
            }}
          />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  headerProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})