import { ScrollView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import commonStyles from '../components/commonStyles'


const Dashboard = () => {
    const [selectedTouchable, setSelectedTouchable] = useState(null);

    const handleTouchablePress = (touchableName) => {
        setSelectedTouchable(touchableName);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={commonStyles.container1}>

                {/* <Image source={require('../../assets/bg-dashboard.png')} style={styles.bg} /> */}
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search"
                />

                <View style={styles.header}>
                    <Text style={styles.headerText}>Dashboard</Text>
                    <Text style={styles.text}>Search for your OB-GYN and book an
                        appointment now.</Text>
                </View>

                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => handleTouchablePress('Doctors')}
                        style={[
                            styles.btn,
                            selectedTouchable === 'Doctors' && styles.clickedBtn,
                        ]}
                    >
                        <Text style={styles.btnText}>Doctors</Text>
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => handleTouchablePress('Maternity Clinics')}
                        style={[
                            styles.btn,
                            selectedTouchable === 'Maternity Clinics' && styles.clickedBtn,
                        ]}>
                        <Text style={styles.btnText}>Maternity Clinics</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.placeholder}>
                    <Text>test</Text>
                </View>

                <View style={styles.placeholder}>
                    <Text>test</Text>
                </View>

                <View style={styles.placeholder}>
                    <Text>test</Text>
                </View>

                <Text style={styles.headerText}>Recent Appointment</Text>

            </View>
        </ScrollView>

    )
}

export default Dashboard

const styles = StyleSheet.create({
    bg: {
        position: 'absolute',
        left: 0,
        bottom: 0
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
    },
    btnContainer: {
        flexDirection: 'row',
        margin: 10
    },
    btn: {
        margin: 40,
        marginBottom: 10,
    },
    btnText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        fontFamily: 'Lato-Bold'
    },
    clickedBtn: {
        borderBottomWidth: 2, 
        borderBottomColor: '#FDC380',
    },
    placeholder: {
        width: 330,
        height: 69,
        backgroundColor: 'white',
        marginBottom: 30,
        borderRadius: 20
    }
})