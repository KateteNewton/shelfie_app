import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const Contact = () => {
  return (
    <View stlye={styles.container}>
      <Text style={styles.title}>Contact Page</Text>
   <Link href="/" styles={styles.links}>Back Home</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  img: {
    marginVertical: 20,
  },
  links: {
    marginVertical: 10,
    boarderBottomwidth: 1
  }
})