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
} from 'native-base';

import {common} from '../css/common';
import {theme} from '../css/theme';
import Modal from 'react-native-modal';

export default class SuccessPages extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <Header
          androidStatusBarColor="#000"
          iosBarStyle="dark-content"
          style={[theme.bgblack, {height: 0}]}></Header>
        <ScrollView style={[theme.bgsuccess]}>
          <View style={[{display: 'flex', flex: 1}]}>
            <Image
              source={require('../assets/images/successbg.png')}
              style={{width: '100%'}}></Image>
            <View
              style={[theme.successbox]}>
              <View>
                <Text style={[common.fontxxxl, common.white, theme.fontbold]}>Congratulation!</Text>
                <Text style={[common.fontmd, common.white, theme.fontregular]}>You have been successfully created your account</Text>
                <Item regular style={[common.mt20]}>
                  <Input style={[theme.input, common.white]} placeholder="Enter Zipcode" placeholderTextColor="#fff" keyboardType="number-pad" />
                </Item>
                <Button
                  block
                  style={[theme.blackbutton, common.mt20]}
                  onPress={this.toggleModal}>
                  <Text
                    style={[
                      common.white,
                      theme.fontmedium,
                      common.textcapitalize,
                      common.fontmd,
                    ]}>
                    Search
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
