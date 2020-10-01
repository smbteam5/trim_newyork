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

export default class ForgotPassword extends Component {
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
            <Title>Forgot Password</Title>
          </Body>
          <Right></Right>
        </Header>
        <ScrollView>
          <View style={[common.p20]}>
            <Form>
              <View style={[common.pt15, common.pb15]}>
                <Text style={[common.fontmd, theme.fontlight]}>
                  Enter your registered email address. We will send a
                  verification code to your mail.
                </Text>
              </View>
              <Item regular style={[common.mt20]}>
                <Input style={[theme.input]} placeholder="Email Address" />
              </Item>
              <Button block style={[theme.blackbutton, common.mt20]}>
                <Text
                  style={[
                    common.white,
                    theme.fontmedium,
                    common.textcapitalize,
                    common.fontmd,
                  ]}>
                  Continue
                </Text>
              </Button>
            </Form>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
