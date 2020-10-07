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
  Card,
  CardItem,
  Thumbnail,
  Badge,
  DatePicker,
} from 'native-base';

import {common} from '../css/common';
import {theme} from '../css/theme';
import Modal from 'react-native-modal';
import CheckBox from 'react-native-checkbox';

export default class AddnewCard extends Component {
  render() {
    return (
      <Container style={[theme.bggray]}>
        <StatusBar barStyle="light-content" />
        <Header
          androidStatusBarColor="#000"
          iosBarStyle="light-content"
          style={[theme.bgblack]}>
          <Left>
            <Icon
              name="arrow-back"
              type="MaterialIcons"
              style={[common.white]}></Icon>
          </Left>
          <Body>
            <Title>
              <Image
                source={require('../assets/images/logo.png')}
                style={{width: 57, height: 23}}></Image>
            </Title>
          </Body>
          <Right></Right>
        </Header>
        <ScrollView>
          <View style={[common.p20]}>
            <Text style={[common.fontmd, theme.fontmedium, common.mb15]}>
              Add new Card
            </Text>
            <Item regular style={[common.mt20]}>
              <Input style={[theme.input]} placeholder="Name on the Card" />
            </Item>
            <Item regular style={[common.mt20]}>
              <Input
                style={[theme.input]}
                placeholder="Card Number"
                keyboardType="numeric"
              />
            </Item>
            <View style={[common.flexbox, common.flexrow]}>
              <Item regular style={[common.mt20, common.flexone, common.mr5]}>
                <Input style={[theme.input]} placeholder="Expiry Month" />
              </Item>
              <Item regular style={[common.mt20, common.flexone, common.ml5]}>
                <Input style={[theme.input]} placeholder="Expiry Year" />
              </Item>
            </View>
            <Item regular style={[common.mt20]}>
              <Input style={[theme.input]} placeholder="CVV" />
            </Item>
            <View style={[common.mt15]}>
              <CheckBox
                label="Save this card"
                checked={false}
                onChange={(checked) => console.log('I am checked', checked)}
              />
            </View>
          </View>

          <View style={[common.p20, common.pt0]}>
            <Button block style={[theme.blackbutton]}>
              <Text
                style={[
                  common.fontbody,
                  theme.fontmedium,
                  common.white,
                  common.textcapitalize,
                ]}>
                Pay Now
              </Text>
            </Button>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
