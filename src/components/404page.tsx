import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UnavailablePage = () => {
  return (
    <View style={[commonStyles.container, {justifyContent: 'center'}]}>
    <Icon name="cog" type="font-awesome" size={80} color="#424242" />
    <Text style={styles.label}>This page is still under development.</Text>
  </View>
  )
}

export default UnavailablePage

const styles = StyleSheet.create({})