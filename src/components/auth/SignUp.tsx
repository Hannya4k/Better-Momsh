import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';


interface FormValues {
  email: string;
  password: string;
  retypePassword: string;
}

const SignUp: React.FC = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    retypePassword: yup.string()
      .oneOf([yup.ref('password'), null as any], 'Passwords must match')
      .required('Retype Password is required'),
  });

  const handleSubmit = (values: FormValues) => {
    // Handle form submission here, e.g., send data to an API
    console.log('Form submitted with values:', values);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={require('../../../assets/bg-graphic.png')} style={styles.bg} />
        </View>
        <View style={styles.logo}>
          <Image source={require('../../../assets/logo/logo-header.png')} />
        </View>

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
                style={styles.textInput}
                placeholder='Email'
                onChangeText={handleChange('email')}
                value={values.email}
                keyboardType='email-address'
              />
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

              <TextInput
                style={styles.textInput}
                placeholder='Password'
                onChangeText={handleChange('password')}
                value={values.password}
                secureTextEntry
              />
              {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

              <TextInput
                style={styles.textInput}
                placeholder='Retype Password'
                onChangeText={handleChange('retypePassword')}
                value={values.retypePassword}
                secureTextEntry
              />
              {errors.retypePassword && <Text style={styles.errorText}>{errors.retypePassword}</Text>}

              <TouchableOpacity onPress={() => handleSubmit()} style={styles.loginBtn}>
                <Text style={styles.loginText}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <View style={styles.foot}>
          <Text style={styles.text}>Already have an account? </Text>
          <Pressable>
            <Text style={styles.signupText}>LOG IN</Text>
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
    marginBottom: 100,
  },
  bg: {
    position: 'absolute',
    left: -120,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 22,
    color: '#F08C8A',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 15,
    color: '#424242',
  },
  form: {
    marginBottom: 100,
    height: 400,
  },
  signupText: {
    color: '#FDC380',
    fontWeight: '700',
    fontSize: 14,
  },
  foot: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 50,
  },
  loginBtn: {
    backgroundColor: '#FDC380',
    borderRadius: 20,
    width: 134,
    height: 47,
    marginLeft: 140,
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 9,
  },
  loginText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  textInput: {
    borderRadius: 20,
    width: 263,
    height: 48,
    margin: 10,
    elevation: 10,
    backgroundColor: 'white',
    padding: 16,
  },
});

