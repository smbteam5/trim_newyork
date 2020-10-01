/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import LoginPage from './pages/login';
import ForgotPassword from './pages/forgotpassword';
import OtpValidation from './pages/otpvalidation';
import CreatePassword from './pages/createpassword';
import SignUp from './pages/signup';
import SuccessPages from './pages/success';
import HomeUser from './pages/homeuser';
import SearchList from './pages/searchlist';
import SearchDetail from './pages/searchdetail';
import MessagePage from './pages/messages';
import MessageDetail from './pages/messagedetail';
import SpecialService from './pages/specialservices';
import BookingSlots from './pages/bookingslot';

const App: () => React$Node = () => {
  return <BookingSlots />;
};

export default App;

{
  /* <Button  onPress={this.toggleModal}>
<Text>Close</Text>
</Button> */
}
