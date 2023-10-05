import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import commonStyles from '../components/commonStyles'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const PregnancyBook = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={commonStyles.container1}>
                <Image source={require('../../assets/bg-dashboard.png')} style={styles.bg} />
                <View style={styles.header}>
                    <Text style={styles.headerText}>Pregnancy Book</Text>
                    <Text style={styles.text}>As you embark on this incredible adventure, consider documenting every moment, emotion, and milestone.</Text>
                </View>

                <View style={styles.body}>
                    <View style={styles.placeholder}>
                        <Image source={require('../../assets/babybook/firstTrimester.png')} style={styles.picture} />
                        <View style={styles.smallContainer}>
                            <Text style={styles.title}>1st Trimester</Text>
                            <Text style={styles.text1}>1st - 3rd month of pregnancy</Text>

                            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('FirstTrimester')}>
                                <Icon name="arrow-right-bold" type="material-community" size={30} color="#517fed" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.placeholder}>
                        <Image source={require('../../assets/babybook/secondTrimester.png')} style={styles.picture} />
                        <View style={styles.smallContainer}>
                            <Text style={styles.title}>2nd Trimester</Text>
                            <Text style={styles.text1}>4th - 6th month of pregnancy</Text>

                            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('SecondTrimester')}>
                                <Icon name="arrow-right-bold" type="material-community" size={30} color="#517fed" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.placeholder}>
                        <Image source={require('../../assets/babybook/thirdTrimester.png')} style={styles.picture} />
                        <View style={styles.smallContainer}>
                            <Text style={styles.title}>3rd Trimester</Text>
                            <Text style={styles.text1}>7th - 9th month of pregnancy</Text>

                            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('ThirdTrimester')}>
                                <Icon name="arrow-right-bold" type="material-community" size={30} color="#517fed" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>

    )
}

export default PregnancyBook

const styles = StyleSheet.create({
    smallContainer: {
        width: 200
    },
    body: {
        marginBottom: 51,
    },

    bg: {
        position: 'absolute',
        left: 0,
        bottom: -110,
        width: 419,
        height: 500,
    },
    picture: {
        borderRadius: 20,
    },
    icon: {
        marginTop: 10,
        marginLeft: 160,
    },

    title: {
        fontSize: 28,
        color: '#F08C8A',
        marginTop: 40,
        marginBottom: 5,
    },
    header: {
        width: 350,
        marginBottom: 50,
        marginTop: 70,
    },
    headerText: {
        color: 'white',
        fontSize: 28,
        fontFamily: 'Lato-Bold',
        marginBottom: 15,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Lato-Regular'
    },
    text1: {
        color: 'black',
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        marginLeft: 10,
    },
    
    placeholder: {
        flexDirection: 'row',
        width: 330,
        height: 143,
        backgroundColor: 'white',
        marginBottom: 30,
        borderRadius: 23,
        elevation: 10,
    },
})