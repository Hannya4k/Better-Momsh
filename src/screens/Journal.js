import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../components/commonStyles';

const Journal = () => {
    const navigation = useNavigation();
    // const [entries, setEntries] = useState([]);

    // useEffect(() => {
    //   loadEntries();
    // }, []);
  
    // const loadEntries = async () => {
    //   try {
    //     const storedEntries = await AsyncStorage.getItem('journalEntries');
    //     if (storedEntries !== null) {
    //       setEntries(JSON.parse(storedEntries));
    //     }
    //   } catch (error) {
    //     console.error('Error loading journal entries: ', error);
    //   }
    // };
  
    // const addEntry = (newEntry) => {
    //   setEntries([...entries, newEntry]);
    // };

    return (
        <ScrollView>
            <View style={commonStyles.container}>
                <View>
                    <Image source={require('../../assets/bg-graphic.png')} style={styles.bg} />
                </View>

                <View style={styles.backBtn}>
                <TouchableOpacity onPress={() => navigation.navigate('FirstTrimester')}>
                  <Icon name="arrow-left" type="entypo" size={30} color="#517fed" />
                </TouchableOpacity>
                </View>
           

                <View style={styles.header}>
                    <Text style={styles.headerText}>Month 1</Text>
                    <Text style={styles.text}>Embrace the magic of documenting your first month of pregnancy</Text>
                </View>

                <View style={styles.body}>
                    <View style={styles.placeholder}>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.placeholder}>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.placeholder}>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.placeholder}>
                    </View>
                </View>
                {/* <TouchableOpacity style={styles.icon2} onPress={() => navigation.navigate('JournalCreate')}>
                  <Icon name="circle" type="MaterialIcons" size={52} color="#517fed" />
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('JournalCreate')}>
                <Icon name="edit" type="feather" size={22} color="white" />
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('JournalCreate', { addEntry: addEntry })}>
                <Icon name="edit" type="feather" size={22} color="white" />
                </TouchableOpacity> */}
                
            </View>
        </ScrollView>
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
        flexDirection: 'row',
        width: 330,
        height: 143,
        backgroundColor: 'white',
        marginBottom: 30,
        borderRadius: 23,
        elevation: 10,
    },

 
    editBtn: {
        position: 'absolute',
        top: 756,
        right: 53,
        borderRadius: 50,
        backgroundColor: 'blue',
        width: 40,
        height: 40,
        alignSelf: 'center'
    },
    // icon2: {
    //     position: 'absolute',
    //     top: 741,
    //     right: 39
    // },

    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    //     backgroundColor: '#fff',
    //     height: '100%'    ,
    //     width: '100%',
    // },


})