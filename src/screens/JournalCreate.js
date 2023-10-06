import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const JournalCreate = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Image source={require('../../assets/bg-graphic.png')} style={styles.bg} />
                </View>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Journal')}>
                  <Icon name="arrow-left" type="entypo" size={30} color="#517fed" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon2}>
                  <Icon name="undo-variant" type="materialcommunityicons" size={30} color="#517fed" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon3}>
                  <Icon name="redo-variant" type="MaterialCommunityIcons" size={30} color="#517fed" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon4}>
                  <Icon name="check" type="Octicons" size={30} color="#517fed" />
                </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Add Title</Text>
                    <Text style={styles.subtext}>Date</Text>
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
    icon: {
        marginTop: 52,
        marginLeft: -300,
    },
    icon1: {
        position: 'absolute',
        top: 756,
        right: 53
    },
    icon2: {
        position: 'absolute',
        top: 741,
        right: 39
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