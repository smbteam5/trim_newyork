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
} from 'native-base';

import {common} from '../css/common';
import {theme} from '../css/theme';

export default class LoginPage extends Component {
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
          style={[theme.bgblue, {height:0}]}>

        </Header>
        <ScrollView style={[theme.bgblack]}>
          <View style={{maxHeight:300}}>
            <Image
              style={[common.w100]}
              source={require('../assets/images/login_banner.png')} style={{maxHeight:300}}></Image>
            <View style={[theme.homelogo]}>
              <Image
                source={require('../assets/images/logo.png')}
                style={{width: 200, height: 80}}></Image>
            </View>
          </View>
          <View style={[common.p20]}>
            <Form>
              <Item floatingLabel style={[theme.logininput]}>
                <Label
                  style={[common.white, theme.labelinput, theme.fontregular]}>
                  Email Address
                </Label>
                <Input style={[theme.input]} style={[common.white]} />
              </Item>
              <Item floatingLabel style={[theme.logininput]}>
                <Label
                  style={[common.white, theme.labelinput, theme.fontregular]}>
                  Password
                </Label>
                <Input style={[theme.input]} style={[common.white]} />
              </Item>
              <TouchableOpacity style={[common.p20]}>
                <Text
                  style={[common.white, common.textcenter, theme.fontregular]}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
              <Button block style={[theme.whitebutton]}>
                <Text
                  style={[
                    common.black,
                    theme.fontmedium,
                    common.textcapitalize,
                    common.fontmd,
                  ]}>
                  {' '}
                  Login{' '}
                </Text>
              </Button>
              <View>
                <Text
                  style={[
                    common.fontmd,
                    theme.fontregular,
                    common.white,
                    common.textcenter,
                    common.m15,
                  ]}>
                  Or sign in using
                </Text>
              </View>
              <View style={[common.center, common.flexbox, common.flexrow]}>
                <View style={[common.ml10, common.mr10]}>
                  <Image
                    source={require('../assets/images/google.png')}
                    style={{width: 60, height: 60}}></Image>
                </View>
                <View style={[common.ml10, common.mr10]}>
                  <Image
                    source={require('../assets/images/facebook.png')}
                    style={{width: 60, height: 60}}></Image>
                </View>
                <View style={[common.ml10, common.mr10]}>
                  <Image
                    source={require('../assets/images/apple.png')}
                    style={{width: 60, height: 60}}></Image>
                </View>
              </View>
              <TouchableOpacity style={[common.pt15, common.pb10]}>
                <Text
                  style={[
                    common.white,
                    common.fontmd,
                    theme.fontregular,
                    common.textcenter,
                  ]}>
                  Don't have an account yet?{' '}
                  <Text style={[common.white, common.fontmd, theme.fontbold]}>
                    Sign Up
                  </Text>
                </Text>
              </TouchableOpacity>
            </Form>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
