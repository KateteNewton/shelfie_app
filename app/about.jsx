import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const About = () => {
  return (
    <View stlye={styles.container}>
      <Text style={styles.title}>About Page</Text>
   
   <Link href="/" styles={styles.links}>Back Home</Link>
    </View>
  )
}

export default About

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