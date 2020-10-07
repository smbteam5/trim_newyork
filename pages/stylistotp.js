/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StatusBar, Image, TouchableOpacity, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Text,
  View,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
  Title,
  List,
  ListItem,
  DatePicker,
  Picker,
  Textarea,
} from 'native-base';

import {common} from '../css/common';
import {theme} from '../css/theme';
import ToggleSwitch from 'toggle-switch-react-native';

export default class StylistOtp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key1',
      selected2: 'key1',
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value,
      selected2: value,
    });
  }
  state = {
    isOnDefaultToggleSwitch: true,
    isOnLargeToggleSwitch: false,
    isOnBlueToggleSwitch: false,
  };

  onToggle(isOn) {
    console.log('Changed to ' + isOn);
  }

  render() {
    return (
      <Container style={[theme.bgblack]}>
        <StatusBar barStyle="dark-content" />
        <Header
          androidStatusBarColor="#000"
          iosBarStyle="dark-content"
          style={[theme.bgblack]}>
          <Left>
            <Icon
              name="arrow-back"
              type="MaterialIcons"
              style={[common.white]}></Icon>
          </Left>
          <Body></Body>
        </Header>
        <ScrollView>
          <View style={[common.p15]}>
            <Text style={[common.fontxl, common.white, theme.fontmedium]}>
              Verification
            </Text>
            <Text style={[common.fontmd, common.white, theme.fontregular]}>
              We have send you a 4 digit code to your registered mobile number.
            </Text>
          </View>
          <View style={[common.center, common.p20]}>
            <Image
              source={require('../assets/images/stylistotp.png')}
              style={{width: 220, height: 220}}></Image>
          </View>
          <View style={[common.p20, theme.cardstylist]}>
            <Form>
              <Text
                style={[common.textcenter, theme.fontregular, common.white]}>
                Enter OTP
              </Text>
              <View style={[common.flexbox, common.flexrow, common.center]}>
                <Item regular style={[common.mt20, theme.otpinputstylist]}>
                  <Input
                    placeholder="0"
                    style={[common.textcenter, common.fontlg, common.white]}
                    keyboardType="numeric"
                  />
                </Item>
                <Item regular style={[common.mt20, theme.otpinputstylist]}>
                  <Input
                    placeholder="0"
                    style={[common.textcenter, common.fontlg, common.white]}
                    keyboardType="numeric"
                  />
                </Item>
                <Item regular style={[common.mt20, theme.otpinputstylist]}>
                  <Input
                    placeholder="0"
                    style={[common.textcenter, common.fontlg, common.white]}
                    keyboardType="numeric"
                  />
                </Item>
                <Item regular style={[common.mt20, theme.otpinputstylist]}>
                  <Input
                    placeholder="0"
                    style={[common.textcenter, common.fontlg, common.white]}
                    keyboardType="numeric"
                  />
                </Item>
              </View>
              <View style={[common.pl20, common.pr20, common.mb10]}>
                <Button
                  block
                  style={[theme.whitebutton, common.mt20]}
                  onPress={this.toggleModal}>
                  <Text
                    style={[
                      common.black,
                      theme.fontmedium,
                      common.textcapitalize,
                      common.fontmd,
                    ]}>
                    Validate Mobile
                  </Text>
                </Button>
              </View>
            </Form>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
