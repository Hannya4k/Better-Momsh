import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import commonStyles from '../commonStyles'
import { Icon } from '@rneui/themed';

const FirstTrimester = () => {
  return (
    <ScrollView>
      <View style={commonStyles.container1}>

        <Image source={require('../../components/assets/img/bgBabybook.png')} style={styles.bg} />
        <Image source={require('../../components/assets/img/firstMonth.png')} style={styles.picture} />

        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>1st Trimester</Text>
            <Text style={styles.text}>Congratulations on the start of this incredible journey!</Text>
          </View>

        </View>


        <View style={styles.body}>
          <View style={styles.bodyContainer}>


            <View style={styles.placeholder}>
              <Image source={require('../../components/assets/img/monthOne.png')} style={styles.picture1} />
              <View style={styles.smallContainer}>
                <Text style={styles.title}>Month 1</Text>
                <Text style={styles.text1}>Embrace the magic of documenting your first month of pregnancy</Text>

                <TouchableOpacity style={styles.icon}>
                  <Icon name="plus" type="entypo" size={30} color="#517fed" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.placeholder}>
              <Image source={require('../../components/assets/img/monthTwo.png')} style={styles.picture1} />
              <View style={styles.smallContainer}>
                <Text style={styles.title}>Month 2</Text>
                <Text style={styles.text1}>As your body adapts to pregnancy, you'll notice physical changes.</Text>

                {/* <TouchableOpacity style={styles.icon}>
                  <Icon name="arrow-right-bold" type="material-community" size={30} color="#517fed" />
                </TouchableOpacity> */}
              </View>
            </View>

            <View style={styles.placeholder}>
              <Image source={require('../../components/assets/img/monthThree.png')} style={styles.picture1} />
              <View style={styles.smallContainer}>
                <Text style={styles.title}>Month 3</Text>
                <Text style={styles.text1}>Embrace the magic of documenting your first month of pregnancy.</Text>

                {/* <TouchableOpacity style={styles.icon}>
                  <Icon name="arrow-right-bold" type="material-community" size={30} color="#517fed" />
                </TouchableOpacity> */}
              </View>
            </View>



          </View>
          <Image source={require('../../components/assets/img/bg-graphic-bb.png')} style={styles.bg1} />
        </View>

      </View>
    </ScrollView>


  )
}

export default FirstTrimester

const styles = StyleSheet.create({
  textContainer: {
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