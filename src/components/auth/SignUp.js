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

  // const handleSubmit = async (values) => {
  //   try {
  //     const response = await axios.post("https://10.0.2.2:44361/api/userAuth/register", {
  //       "username": "string",
  //       "password": "string",
  //       "salt": "string",
  //       "firstName": "string",
  //       "lastName": "string",
  //       "middleName": "string",
  //       "birthdate": "2023-10-02T02:33:00.200Z",
  //       "religion": "string",
  //       "occupation": "string",
  //       "relationshipStatus": "string",
  //       "address": "string",
  //       "contactNumber": 0
  //     });

  //     console.log('Registration Successful', response.data);
  //     navigation.navigate('Auth');
  //   } catch (error) {
  //     console.error('Registration Error', error);
  //   }
  // };

  const handleSubmit = () => {
    const { email, password } = values; // Destructure email and password from values
  
    user_register({
      username: "String@gmail.com", // Use email from values
      password: password, // Use password from values
      salt: password, // Use password from values (this might need further validation)
      firstName: "string",
      lastName: "string",
      middleName: "string",
      birthdate: "2023-10-02T02:33:00.200Z",
      religion: "string",
      occupation: "string",
      relationshipStatus: "string",
      address: "string",
      contactNumber: 0
    }).then((result) => {
      if (result.status === 200) {
        // Handle the success scenario here
        console.log('Registration Successful');
        navigation.navigate('Auth');
      } else {
        // Handle other status codes or errors
        console.error('Registration Error', result);
      }
    });
  };
  return (
    <ScrollView>
      <View style={commonStyles.container}>
        <Header />

        <Formik
          initialValues={{ email: '', password: '', retypePassword: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
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

                <TouchableOpacity onPress={handleSubmit} style={styles.signupBtn}>
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

