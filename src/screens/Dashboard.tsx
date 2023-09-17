import { ScrollView, StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React, { useState } from 'react';
import commonStyles from '../components/commonStyles'
import { BottomTabBar } from '@react-navigation/bottom-tabs';


const Dashboard = () => {


    return (
        <ScrollView style={styles.container}>
            <View style={commonStyles.container1}>
                <Image source={require('../../assets/bg-dashboard.png')} style={styles.bg} />
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search"
                />

                <View style={styles.header}>
                    <Text style={styles.headerText}>Dashboard</Text>
                    <Text style={styles.text}>Search for your OB-GYN and book an
                        appointment now.</Text>
                </View>
            </View>


        </ScrollView>

    )
}

export default Dashboard

const styles = StyleSheet.create({
    bg: {
        position: 'absolute',
        left: -120,
        bottom: 0,
    },

    container: {
        
        height: 600,
    },
    searchBar: {
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 20,
        width: 263,
        height: 48,
        margin: 10,
        elevation: 10,
        backgroundColor: 'white',
        padding: 16,
        fontFamily: 'Lato-Regular',
        fontWeight: '400',
    },
    header: {
        width: 350,

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
    }
})