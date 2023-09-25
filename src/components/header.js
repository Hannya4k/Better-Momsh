import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import commonStyles from './commonStyles';

const Header = () => {
  return (
    <View style={commonStyles.container}>
        <View>
          <Image source={require('../../assets/bg-graphic.png')} style={styles.bg} />
        </View>
        <View style={styles.logo}>
          <Image source={require('../../assets/logo/logo-header.png')} />
        </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  logo: {
    height: 130,
    marginTop: 125,
    marginBottom: 100,
  },
  bg: {
    position: 'absolute',
    left: -120,
  },


})