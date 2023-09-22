import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';


import commonStyles from './commonStyles';

const UnavailablePage = () => {
    return (
        <View style={[commonStyles.container, { justifyContent: 'center' }]}>
            <Icon name="gears" type="font-awesome" size={80} color="#424242" />
            <Text style={styles.label}>This page is still under development.</Text>
        </View>
    )
}

export default UnavailablePage

const styles = StyleSheet.create({
    label: {
        color: '#424242',
        fontWeight: '600',
        fontSize: 18,
        marginTop: 10,
    },
})