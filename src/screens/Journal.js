import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const Journal = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Image source={require('../../assets/bg-graphic.png')} style={styles.bg} />
                </View>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('FirstTrimester')}>
                  <Icon name="arrow-left" type="entypo" size={30} color="#517fed" />
                </TouchableOpacity>
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
                <TouchableOpacity style={styles.icon2} onPress={() => navigation.navigate('JournalCreate')}>
                  <Icon name="circle" type="MaterialIcons" size={52} color="#517fed" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon1} onPress={() => navigation.navigate('JournalCreate')}>
                  <Icon name="edit" type="feather" size={22} color="white" />
                </TouchableOpacity>
                
            </View>
        </ScrollView>
    )
       
}

export default Journal

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
    text: {
        color: 'black',
        fontSize: 12,
        alignItems: 'center',
        fontWeight: '400',
        height: '32',
        width: '242',
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