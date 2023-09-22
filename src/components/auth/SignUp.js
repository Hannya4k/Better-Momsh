import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import commonStyles from '../commonStyles';
import { Icon } from '@rneui/themed';
import { observer } from 'mobx-react-lite';
import authStore from '../../api/services/authServices';

const SignUp = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    retypePassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Retype Password is required'),
  });

  const handleRegister = async (values) => { 
    authStore.clearError();
    if (values.password !== values.retypePassword) { 
      authStore.registrationError = 'Passwords do not match.';
      return;
    }
    await authStore.registerUser();
  };

  return (
    <ScrollView>
      <View style={commonStyles.container}>
        <View>
          <Image source={require('../../../assets/bg-graphic.png')} style={styles.bg} />
        </View>
        <View style={styles.logo}>
          <Image source={require('../../../assets/logo/logo-header.png')} />
        </View>

        <Formik
          initialValues={{ email: '', password: '', retypePassword: '' }}
          validationSchema={validationSchema}
          onSubmit={handleRegister} // Correct the function name
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <View style={styles.form}>
              <Text style={styles.headerText}>Sign Up</Text>
              <Text style={styles.text}>Fill out the necessary information to start using our app.</Text>

              <TextInput
                style={styles.input}
                placeholder='Email'
                // onChangeText={handleChange('email')}
                onChangeText={(text) => authStore.setEmail(text)}
        value={authStore.email}
                // value={values.email}
                keyboardType='email-address'
              />
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

              <TextInput
                style={styles.input}
                placeholder='Password'
                // onChangeText={handleChange('password')}
                // value={values.password}
                onChangeText={(text) => authStore.setPassword(text)}
                value={authStore.password}
                secureTextEntry
              />
              {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

              <TextInput
                style={styles.input}
                placeholder='Retype Password'
                onChangeText={(text) => authStore.setRetypePassword(text)}
        value={authStore.retypePassword}
                // onChangeText={handleChange('retypePassword')}
                // value={values.retypePassword}
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
                {authStore.registrationError ? <Text>{authStore.registrationError}</Text> : null}
              </View>
            </View>
          )}
        </Formik>

        <View style={styles.foot}>
          <Text style={styles.footText}>Already have an account? </Text>
          <Pressable>
            <Text style={styles.loginText}>LOG IN</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  logo: {
    height: 130,
    marginTop: 125,
    marginBottom: 76,
  },
  bg: {
    position: 'absolute',
    left: -120,
  },
  form: {
    marginBottom: 40,
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
    marginBottom: 50
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
    width: 275,
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
  }
});

