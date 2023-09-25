import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  // containers ***
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '100%'    ,
    width: '100%',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f08c8a',
    height: '100%'    ,
    width: '100%',
  },

  boxButton: {
    width: '70%',
    height: '10%',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 15,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 5,
    shadowRadius: 15,
    shadowOpacity: 10,
    shadowOffset: {width: 10, height: 10},
    padding: 10,
    margin: 5,
  },
  smallBoxContainer: {
    width: '80%',
    height: '20%',
    alignContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 5,
    shadowRadius: 15,
    shadowOpacity: 10,
    shadowOffset: {width: 10, height: 10},
    padding: 20,
    margin: 15,
  },
  bigBoxContainer: {
    width: '80%',
    height: '70%',
    alignContent: 'center',
    backgroundColor: '#00899B',
    borderRadius: 15,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 5,
    shadowRadius: 15,
    shadowOpacity: 10,
    shadowOffset: {width: 10, height: 10},
    padding: 20,
    margin: 15,
  },
  // buttons ***
  btnPrimary: {
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 5,
    shadowRadius: 15,
    shadowOpacity: 10,
    shadowOffset: {width: 10, height: 10},
    padding: 10,
  },
  btnDefault: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#00BCD4',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 5,
    shadowRadius: 15,
    shadowOpacity: 10,
    shadowOffset: {width: 10, height: 10},
    padding: 10,
  },
  btnCancel: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#D0312D',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 5,
    shadowRadius: 15,
    shadowOpacity: 10,
    shadowOffset: {width: 10, height: 10},
    padding: 10,
  },
  btnSecondary: {
    backgroundColor: '#BCAC4F',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 5,
    shadowRadius: 15,
    shadowOpacity: 10,
    shadowOffset: {width: 10, height: 10},
    padding: 10,
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  btnText2: {
    fontSize: 16,
    color: '#00BCD4',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  btnTextCancel: {
    fontSize: 16,
    color: '#D0312D',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  // headers ***
  titleText1: {
    color: '#00899B',
    fontWeight: '700',
    fontSize: 18,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  titleText2: {
    color: '#004F65',
    fontWeight: '700',
    fontSize: 16,
  },
  
});

export default commonStyles;
