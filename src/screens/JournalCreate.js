import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

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
    return(
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Image source={require('../../assets/bg-graphic.png')} style={styles.bg} />
                </View>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('Journal')}>
                  <Icon name="arrow-left" type="entypo" size={30} color="#517fed" />
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.icon2}>
                  <Icon name="undo-variant" type="materialcommunityicons" size={30} color="#517fed" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon3}>
                  <Icon name="redo-variant" type="MaterialCommunityIcons" size={30} color="#517fed" />
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.doneBtn} onPress={() => navigation.navigate('Journal')}>
                  <Icon name="check" type="Octicons" size={30} color="#517fed" />
                </TouchableOpacity>
                
                <View style={styles.header}>
                        <TextInput
                            style={styles.headerText}
                            placeholder='Add Title'
                        />
                        {/* {errors.user && <Text style={styles.errorText}>{errors.user}</Text>} */}
                        <Text style={styles.subtext}>Date</Text>
                        <TextInput
                            style={styles.subtext}
                            placeholder='Body'
                        />
                        {/* {errors.user && <Text style={styles.errorText}>{errors.user}</Text>} */}
                </View>     

            </View>
        </ScrollView>
    )
       
}

export default JournalCreate

const styles = StyleSheet.create({
    placeholder: {
        flexDirection: 'row',
        width: 330,
        height: 143,
        backgroundColor: 'white',
        marginBottom: 30,
        borderRadius: 23,
        elevation: 10,
    },
    subtext: {
        color: '##424242',
        fontSize: 12,
        alignItems: 'center',
        fontWeight: '400',
        height: '32',
        width: '242',
        marginBottom: 20,
    },
    text: {
        color: 'black',
        fontSize: 12,
        alignItems: 'center',
        fontWeight: '400',
    },
    backBtn: {
        marginTop: 52,
        marginLeft: -300,
    },
    doneBtn: {
        position: 'absolute',
        top: 756,
        right: 53
    },
    bg: {
        position: 'absolute',
        left: -120,
        opacity: 0.5,
      },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '100%'    ,
        width: '100%',
    },
    header: {
        marginBottom: 50,
    },
    headerText: {
        color: '#F08C8A',
        fontSize: 32,
        fontFamily: 'Lato-Regular',
        marginBottom: 8,
       
        fontWeight: '700'
    },
   
})