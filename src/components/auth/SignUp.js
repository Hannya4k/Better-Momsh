import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import commonStyles from '../commonStyles';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import Header from '../header';
import axios from 'axios';

const SignUp = () => {
  const navigation = useNavigation();

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    retypePassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Retype Password is required'),
  });

  // const handleSubmit = (values) => {
  //   navigation.navigate('Dashboard');
  //   console.log('Form submitted with values:', values);
  // };

  const handleRegister = () => {
    axios
      .post('http://192.168.0.17:5114/Auth/UserRegister', {
        username: "tetestesa@gmail.com",
        password: "4453",
        salt: "4453",
        FirstName: "Jans Dales",
        LastName: "Topacios",
        MiddleName: "Subidos",
        Birthdate: "2003-01-13",
        Religion: "Secrset",
        Occupation: "Studsent",
        RelationshipStatus: "Sangsul",
        Address: "143 Pasgmamahal St.",
        ContactNumber: 14320012
      })
      .then((res) => {
        console.log('Server response: ', res);
      })
      .catch((err) => {
        console.log('Server responded with error: ', err);
      });
  };

  // const handleSubmit = () => {
  //     try {
  //       const response = await axios.post('https://localhost:44361/api/userLogin', {
  //         email: values.email,
  //         password: values.password,
  //       });
  
  //       // Handle the response, show a success message or navigate to another screen
  //       console.log('Registration Successful', response.data);
  //       navigation.navigate('Dashboard');
  //     } catch (error) {
  //       console.error('Registration Error', error);
  //     }
  //   };

  return (
      <ScrollView>
        <View style={commonStyles.container}>
          <Header />
  
          <Formik
            initialValues={{ email: '', password: '', retypePassword: '' }}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <View style={styles.form}>
                <Text style={styles.headerText}>Sign Up</Text>
                <Text style={styles.text}>Fill out the necessary information to start using our app.</Text>
  
                <TextInput
                  style={styles.input}
                  placeholder='Email'
                  onChangeText={handleChange('email')}
                  value={values.email}
                  keyboardType='email-address'
                />
                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
  
                <TextInput
                  style={styles.input}
                  placeholder='Password'
                  onChangeText={handleChange('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
  
                <TextInput
                  style={styles.input}
                  placeholder='Retype Password'
                  onChangeText={handleChange('retypePassword')}
                  value={values.retypePassword}
                  secureTextEntry
                />
                {errors.retypePassword && <Text style={styles.errorText}>{errors.retypePassword}</Text>}
  
                <View style={styles.btnContainer}>
                  <TouchableOpacity style={styles.fbBtn}>
                    <View style={{ flexDirection: 'row' }}>
                      <Icon style={{ marginRight: 15 }} name="facebook-f" type="font-awesome" size={20} color="#fff" />
                      <Text style={styles.fbText}>LOGIN WITH FACEBOOK</Text>
                    </View>
                  </TouchableOpacity>
  
                  <TouchableOpacity onPress={handleRegister} style={styles.signupBtn}>
                    <Text style={styles.signupText}>SIGN UP</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
  
          <View style={styles.foot}>
            <Text style={styles.footText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
              <Text style={styles.loginText}>LOG IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default SignUp;

const styles = StyleSheet.create({
  form: {
    marginBottom: 25,
    height: 400,
    width: 290,
  },

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
    marginBottom: 5,
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

  loginText: {
    color: '#FDC380',
    fontWeight: '700',
    fontSize: 14,
  },
  foot: {
    flexDirection: 'row',
    marginBottom: 40
  },
  footText: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
    color: '#424242',
    fontFamily: 'Lato-Regular',
  },

  fbBtn: {
    backgroundColor: '#517FED',
    borderRadius: 20,
    width: 134,
    height: 47,
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 9,
  },
  fbText: {
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    color: '#fff',
  },
  signupBtn: {
    backgroundColor: '#FDC380',
    borderRadius: 20,
    width: 134,
    height: 47,
    marginLeft: 10,
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 9,
  },
  signupText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
  },

  input: {
    borderRadius: 20,
    width: 280,
    height: 48,
    marginTop: 15,
    marginBottom: 9,
    marginLeft: 4,
    elevation: 10,
    backgroundColor: 'white',
    padding: 16,
  },
  btnContainer: {
    flexDirection: 'row',
    marginLeft: 5,
  },
});

