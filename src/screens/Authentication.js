import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import commonStyles from '../components/commonStyles';
import LogIn from '../components/auth/LogIn';
import Header from '../components/header';

const Authentication = () => {

  return (
    <ScrollView>
      
        <Header />
        <LogIn />

    </ScrollView>
  );
}
export default Authentication;
