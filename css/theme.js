import {StyleSheet} from 'react-native';

export const theme = StyleSheet.create({
  fontthin: {
    fontFamily: 'Montserrat-Thin',
  },
  fontlight: {
    fontFamily: 'Montserrat-Light',
  },
  fontregular: {
    fontFamily: 'Montserrat-Regular',
  },
  fontmedium: {
    fontFamily: 'Montserrat-Medium',
  },
  fontbold: {
    fontFamily: 'Montserrat-Bold',
  },

  homelogo: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  bgblack: {
    backgroundColor: '#000',
  },
  logininput: {
    borderColor: '#3D3D3D',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 10,
    height: 60,
    borderRadius: 5,
    marginLeft: 0,
  },
  innerinput: {
    borderColor: '#3D3D3D',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 10,
    height: 60,
    borderRadius: 5,
    marginLeft: 0,
  },
  labelinput: {
    marginTop: -13,
    paddingLeft: 10,
  },
  whitebutton: {
    backgroundColor: '#fff',
  },
  blackbutton: {
    backgroundColor: '#000',
    borderRadius: 5,
  },
  otpinput: {
    width: 60,
    backgroundColor: '#E9E9E9',
    borderRadius: 5,
    borderWidth: 0,
    borderColor: '#E9E9E9',
    marginLeft: 10,
    marginRight: 10,
    fontFamily: 'Montserrat-Regular',
  },
  otpinputstylist: {
    width: 60,
    backgroundColor: '#2B2B2B',
    borderRadius: 5,
    borderWidth: 0,
    borderColor: '#2B2B2B',
    marginLeft: 10,
    marginRight: 10,
    fontFamily: 'Montserrat-Regular',
  },
  input: {
    fontFamily: 'Montserrat-Regular',
  },
  usertype: {
    backgroundColor: '#000',
    padding: 20,
    height: 80,
    marginLeft: 0,
    marginTop: 15,
  },
  successbox: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 20,
  },
  listuser: {
    borderWidth: 1,
    borderColor: '#D5D5D5',
    margin: 3,
  },
  colorgray: {
    color: '#656565',
  },
  bglisttext: {
    position: 'absolute',
    flexDirection: 'column',
    flex: 1,
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  yellow: {
    color: '#E8B920',
  },
  search: {
    backgroundColor: '#000',
    padding: 10,
  },
  searchbox: {
    backgroundColor: '#1A1A1A',
    borderRadius: 60,
    paddingLeft: 10,
  },
  menulabel: {
    borderTopWidth: 1,
    borderTopColor: '#1A1A1A',
    padding: 10,
    marginTop: 10,
  },
  speciallabel: {
    padding: 20,
    backgroundColor: '#0F1014',
  },
  listsearch: {
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 1,
    marginLeft: 0,
  },
  pricebadge: {
    backgroundColor: '#6EC1E4',
  },
  borderbutton: {
    borderColor: '#C9C9C9',
    borderRadius: 5,
  },
  chatbtn: {
    backgroundColor: '#6EC1E4',
    height: 60,
    width: 60,
    padding: 0,
  },
  msglist: {
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 1,
    marginLeft: 0,
    paddingBottom: 15,
  },
  chatleft: {
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    maxWidth: '90%',
    alignItems: 'flex-start',
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 6,
  },
  chatleftbox: {
    backgroundColor: '#6EC1E4',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    maxWidth: '80%',
  },
  lefttime: {
    color: '#656565',
    fontSize: 12,
    marginTop: 5,
  },

  chatright: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderTopRightRadius: 0,
    marginLeft: 30,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    maxWidth: '90%',
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 6,
    justifyContent: 'flex-end',
  },
  sendbtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  bggray: {
    backgroundColor: '#F3F3F3',
  },
  btnblue: {
    backgroundColor: '#6EC1E4',
    borderRadius: 5,
  },
  dateinput: {
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 5,
    marginTop: 10,
  },
  timeslot: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E6E6E6',
    padding: 15,
    margin: 5,
    width: 80,
  },
  slotactive: {
    backgroundColor: '#6EC1E4',
  },
  succesicon: {
    fontSize: 66,
    color: '#6EC1E4',
  },
  bgblack: {
    backgroundColor: '#000',
  },
  cardstylist: {
    backgroundColor: '#0F1014',
    padding: 20,
    borderRadius: 30,
  },
  inputstylist: {
    borderBottomColor: '#2A2A2A',
    borderBottomWidth: 1,
    marginLeft: 0,
  },
  labelinput: {
    color: '#9F9FA1',
  },
  upload: {
    backgroundColor: '#2A2A2A',
    padding: 20,
  },
  colorblue: {
    color: '#6EC1E4',
  },
  stylistblue: {
    color: '#2F51FC',
  },
  badgestylist: {
    backgroundColor: '#2F51FC',
    borderRadius: 5,
  },
  bggreen: {
    backgroundColor: '#1EBF2F',
  },
  graylabel: {
    color: '#E6E6E6',
  },
  badgestatus: {
    paddingRight: 15,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginRight: -20,
  },
  bgbluestylist: {
    backgroundColor: '#2F51FC',
  },
  radius5: {
    borderRadius: 5,
  },
});
