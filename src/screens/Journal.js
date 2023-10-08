import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../components/commonStyles';
import { useJournal } from '../components/babybook/Journal/journalContext';

const Journal = () => {
    const navigation = useNavigation();
    const { entries } = useJournal();

    const handleEditClick = () => {
   
        navigation.navigate('JournalCreate');
    };


    return (
        <ScrollView>
            <View style={commonStyles.container}>
                <View>
                    <Image source={require('../../assets/bg-graphic.png')} style={styles.bg} />
                </View>

                <View style={styles.backBtn}>
                    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                        <Icon name="arrow-left" type="entypo" size={30} color="#517fed" />
                    </TouchableOpacity>
                </View>

                <View style={styles.header}>
                    <Text style={styles.headerText}>Month 1</Text>
                    <Text style={styles.text}>Embrace the magic of documenting your first month of pregnancy</Text>
                </View>


                <View style={styles.body}>
                    {entries.map((entry, index) => (
                        <TouchableOpacity
                            style={styles.placeholder}
                            key={index}
                            onPress={() => handleEditClick(entry)}>
                            <Text style={styles.title}>{entry.title}</Text>
                            <Text style={styles.date}>{entry.date}</Text>
                            <Text style={styles.note}>{entry.note}</Text>
                        </TouchableOpacity>
                    ))}
                    {/* {entries.map((entry, index) => (
                        <View style={styles.placeholder} key={index}>
                            <Text style={styles.title}>{entry.title}</Text>
                            <Text style={styles.date}>{entry.date}</Text>
                            <Text style={styles.note}>{entry.note}</Text>
                        </View>
                    ))} */}


                </View>

                <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('JournalCreate')}>
                    <Icon name="edit" type="feather" size={22} color="white" />
                </TouchableOpacity>

            </View>
        </ScrollView >
    )
}

export default Journal

const styles = StyleSheet.create({
    bg: {
        position: 'absolute',
        left: -123,
        opacity: 0.5,
    },

    header: {
        marginBottom: 50,
        width: 350,
    },
    headerText: {
        color: '#F08C8A',
        fontSize: 32,
        fontFamily: 'Lato-Bold',
        marginBottom: 8,
        fontWeight: '600'
    },
    text: {
        color: 'black',
        fontSize: 12,
        fontWeight: '400',
        height: '32',
        width: 242,
    },

    backBtn: {
        marginTop: 40,
        marginRight: 310
    },

    placeholder: {
        padding: 15,
        width: 330,
        height: 'auto',
        backgroundColor: 'white',
        marginBottom: 30,
        borderRadius: 23,
        elevation: 10,
    },

    body: {
        flexDirection: 'column',
        height: '100%',
        
    },

    editBtn: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        borderRadius: 50,
        backgroundColor: '#517FED',
        width: 40,
        height: 40,
        padding: 6
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5
    },
    date: {
        fontSize: 12,
        marginBottom: 15
    },
    note: {
        fontSize: 12,
    }

})