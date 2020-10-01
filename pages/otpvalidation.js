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
} from 'native-base';

import {common} from '../css/common';
import {theme} from '../css/theme';

export default class OtpValidation extends Component {
  state = {
    text: '',
  };
  render() {
    return (
      <Container>
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
          <Body>
            <Title>Verification</Title>
          </Body>
          <Right></Right>
        </Header>
        <ScrollView>
          <View style={[common.p20]}>
            <Form>
              <View style={[common.pt15, common.pb15]}>
                <Text
                  style={[common.fontmd, theme.fontlight, common.textcenter]}>
                  Enter OTP we send to your email address
                </Text>
                <View style={[common.center, common.p20]}>
                  <Image
                    source={require('../assets/images/otp.png')}
                    style={{width: 220, height: 220}}></Image>
                </View>
              </View>
              <Text style={[common.textcenter, theme.fontregular]}>
                Enter OTP
              </Text>
              <View style={[common.flexbox, common.flexrow, common.center]}>
                <Item regular style={[common.mt20, theme.otpinput]}>
                  <Input placeholder="0" style={[common.textcenter, common.fontlg]} keyboardType="numeric" />
                </Item>
                <Item regular style={[common.mt20, theme.otpinput]}>
                  <Input placeholder="0" style={[common.textcenter, common.fontlg]} keyboardType="numeric" />
                </Item>
                <Item regular style={[common.mt20, theme.otpinput]}>
                  <Input placeholder="0" style={[common.textcenter, common.fontlg]} keyboardType="numeric" />
                </Item>
                <Item regular style={[common.mt20, theme.otpinput]}>
                  <Input placeholder="0" style={[common.textcenter, common.fontlg]} keyboardType="numeric" />
                </Item>
              </View>
              <Button block style={[theme.blackbutton, common.mt20]}>
                <Text
                  style={[
                    common.white,
                    theme.fontmedium,
                    common.textcapitalize,
                    common.fontmd,
                  ]}>
                  Validate
                </Text>
              </Button>
            </Form>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
