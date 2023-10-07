import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../components/commonStyles';

// const JournalCreate = ({ route, navigation }) => {
const JournalCreate = () => {
    // const { addEntry } = route.params;

    const navigation = useNavigation();
    // const saveEntry = () => {
    //   const newEntry = {
    //     id: uuidv4(),
    //     title,
    //     subtitle,
    //     body,
    //   };

    //   addEntry(newEntry);

    //   AsyncStorage.setItem('journalEntries', JSON.stringify([...entries, newEntry]))
    //     .then(() => {
    //       navigation.navigate('Journal');
    //     })
    //     .catch((error) => {
    //       console.error('Error saving journal entry: ', error);
    //     });
    // };
    return (
        <ScrollView>
            <View style={commonStyles.container}>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('Journal')}>
                        <Icon name="arrow-left" type="entypo" size={30} color="#517fed" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                  <Icon name="undo-variant" type="materialcommunityicons" size={30} color="#517fed" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                  <Icon name="redo-variant" type="MaterialCommunityIcons" size={30} color="#517fed" />
                </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Journal')}>
                        <Icon name="check" type="Octicons" size={30} color="#517fed" />
                    </TouchableOpacity>
                </View>


                <View style={styles.textContainer}>
                    <TextInput
                        style={styles.headerInput}
                        placeholder='Add Title'
                    />

                    <Text style={styles.date}>Date</Text>
                    <TextInput
                        style={styles.pInput}
                        placeholder='Body'
                    />
                </View>

            </View>
        </ScrollView>
    )

}

export default JournalCreate

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        marginTop: 50,
    },
    backBtn: {
        marginRight: 200
    },
    btn: {
        marginLeft: 20,
    },
    headerInput: {
        fontSize: 32,
        fontFamily: 'Lato-Bold',
        fontWeight: '700',
        width: 350,
        height: 56,
        paddingBottom: 5,
        marginTop: 10,
    },
    date: {
        fontSize: 12,
        marginLeft: 10
    },
    pInput: {
        borderWidth: 1,
        marginTop: 10,
        width: 350,
        height: 500,
        fontSize: 12,
        fontFamily: 'Lato-Bold',
        fontWeight: '400',
    },

    textContainer: {
        marginBottom: 50,
    },


})