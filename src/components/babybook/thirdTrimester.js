import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import commonStyles from '../commonStyles'
import { Icon } from '@rneui/themed';

const ThirdTrimester = () => {
  return (
    <ScrollView>
      <View style={commonStyles.container1}>

        <Image source={require('../../components/assets/img/bgBabybook.png')} style={styles.bg} />
        <Image source={require('../../components/assets/img/thirdMonth.png')} style={styles.picture} />

        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>3rd Trimester</Text>
            <Text style={styles.text}>This phase brims with anticipation as your little one's arrival approaches.</Text>
          </View>

        </View>


        <View style={styles.body}>
          <View style={styles.bodyContainer}>


            <View style={styles.placeholder}>
              <Image source={require('../../components/assets/img/monthSeven.png')} style={styles.picture1} />
              <View style={styles.smallContainer}>
                <Text style={styles.title}>Month 7</Text>
                <Text style={styles.text1}>Your 7th month is a time of anticipation</Text>

                <TouchableOpacity style={styles.icon}>
                  <Icon name="plus" type="entypo" size={30} color="#517fed" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.placeholder}>
              <Image source={require('../../components/assets/img/monthEight.png')} style={styles.picture1} />
              <View style={styles.smallContainer}>
                <Text style={styles.title}>Month 8</Text>
                <Text style={styles.text1}>This is a pivotal moment in your journey to motherhood.</Text>

                <TouchableOpacity style={styles.icon}>
                  <Icon name="plus" type="entypo" size={30} color="#517fed" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.placeholder}>
              <Image source={require('../../components/assets/img/monthNine.png')} style={styles.picture1} />
              <View style={styles.smallContainer}>
                <Text style={styles.title}>Month 9</Text>
                <Text style={styles.text1}>Your baby's arrival is just around the corner!</Text>

                <TouchableOpacity style={styles.icon}>
                  <Icon name="plus" type="entypo" size={30} color="#517fed" />
                </TouchableOpacity>
              </View>
            </View>



          </View>
          <Image source={require('../../components/assets/img/bg-graphic-bb.png')} style={styles.bg1} />
        </View>

      </View>
    </ScrollView>


  )
}

export default ThirdTrimester

const styles = StyleSheet.create({ textContainer: {
    width: 160,
    marginLeft: 200,
    marginTop: 20,
  },
  picture: {
    position: 'absolute',
    left: 0,
    top: 0
  },
  picture1: {
    borderRadius: 20,
  },
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,

  },
  bg1: {
    zIndex: -1,
    position: 'absolute',
    left: 0,
    bottom: 0,

  },
  header: {
    height: 203,
    margin: 20
  },
  headerText: {
    fontSize: 32,
    color: 'white'
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  body: {
    backgroundColor: "white",
    height: 600,
    width: '100%',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  placeholder: {
    flexDirection: 'row',
    width: 330,
    height: 143,
    backgroundColor: '#f08c8a',
    marginBottom: 20,
    borderRadius: 20,
    elevation: 10,
  },
  bodyContainer: {
    marginTop: 80,
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginTop: 25,
    marginBottom: 5,
    marginLeft: 15,
  },
  text1: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    marginLeft: 15,
  },
  smallContainer: {
    width: 150
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 30,
    marginLeft: 140,
    marginBottom: 1000,
  },
}) 