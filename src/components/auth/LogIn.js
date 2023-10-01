import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../commonStyles';
import axios from 'axios';

const LogIn = () => {
    const navigation = useNavigation();

    const validationSchema = yup.object().shape({
        user: yup.string().required('Username is required'),
        password: yup.string().required('Password is required'),
    });

    const handleSubmit = (values) => {
      // Handle form submission here, e.g., send data to an API
      console.log('Form submitted with values:', values);
    };

    // const handleSubmit = async (values) => {
    //   try {
    //     const response = await axios.post('https://localhost:44361/api/userLogin', {
    //       email: values.email,
    //       password: values.password,
    //     });
  
    //     // Handle the response, show a success message or navigate to another screen
    //     console.log('Registration Successful', response.data);
    //     navigation.navigate('Dashboard');
    //   } catch (error) {
    //     console.error('Registration Error', error);
    //   }
    // };

    return (
        <View style={commonStyles.container}>
            <Formik
                initialValues={{ user: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ handleChange, handleSubmit, values, errors }) => (
                    <View style={styles.form}>
                        <Text style={styles.headerText}>Login</Text>
                        <Text style={styles.text}>Please log in to continue.</Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Username'
                            onChangeText={handleChange('user')}
                            value={values.user}
                        />
                        {errors.user && <Text style={styles.errorText}>{errors.user}</Text>}

                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                            onChangeText={handleChange('password')}
                            value={values.password}
                            secureTextEntry
                        />
                        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                        {/* onPress={handleSubmit} */}
                        {/* onPress={() => navigation.navigate('Dashboard')} */}
                        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.loginBtn}>
                            <Text style={styles.loginText}>LOG IN</Text>
                        </TouchableOpacity>
                    </View>
                )}
                
            </Formik>

            <View style={styles.foot}>
                <Text style={styles.footText}>Don’t have an account yet? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.signupText}> SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LogIn;

const styles = StyleSheet.create({
    headerText: {
        fontWeight: '600',
        fontSize: 23,
        color: '#F08C8A',
        marginBottom: 10,
        marginLeft: 10,
        fontFamily: 'Lato-Bold',
      },
      text: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 15,
        marginLeft: 10,
        color: '#424242',
        fontFamily: 'Lato-Regular',
      },
      errorText: {
        color: 'red',
        marginLeft: 10,
        fontFamily: 'Lato-Regular',
        fontWeight: '400',
      },
    
      input: {
        borderRadius: 20,
        width: 270,
        height: 48,
        margin: 10,
        elevation: 10,
        backgroundColor: 'white',
        padding: 16,
        fontFamily: 'Lato-Regular',
        fontWeight: '400',
      },
      form: {
        marginBottom: 115,
        height: 300,
      },
    
      signupText: {
        color: '#FDC380',
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        fontWeight: '600',
      },
    
      foot: {
        flexDirection: 'row',
        marginBottom: 50,
      },
      footText: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 5,
        color: '#424242',
        fontFamily: 'Lato-Regular',
      },
    
      loginBtn: {
        backgroundColor: '#FDC380',
        borderRadius: 20,
        width: 134,
        height: 47,
        marginLeft: 145,
        marginTop: 15,
        paddingVertical: 12,
        paddingHorizontal: 16,
        elevation: 9,
      },
      loginText: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
      },
})