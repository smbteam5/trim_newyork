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

export default class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }
  render() {
    return (
      <Container>
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
          <Right>
            <Icon name="filter" type="AntDesign" style={[common.white]}></Icon>
          </Right>
        </Header>
        <ScrollView>
          <ListItem avatar style={[theme.listsearch, common.pl10]}>
            <Left>
              <Thumbnail
                source={require('../assets/images/user-thumb.png')}
                style={{width: 70, height: 70, borderRadius: 35}}
              />
            </Left>
            <Body style={[common.bordernone]}>
              <Text style={[theme.fontmedium, common.mb5]}>Benjamin Dean</Text>
              <Text style={[theme.fontmedium]}>
                <Icon
                  name="star"
                  type="FontAwesome"
                  style={[theme.yellow, common.fontlg]}></Icon>
                {''} {''}
                {''}4.9
              </Text>
              <Text note>
                <Icon
                  name="location-pin"
                  type="Entypo"
                  style={[common.fontmd]}></Icon>
                New Jersey 08550
              </Text>
            </Body>
          </ListItem>
          <View
            style={[
              common.flexbox,
              common.flexrow,
              common.p10,
              theme.listsearch,
              common.pb20,
            ]}>
            <View style={[common.flexone]}>
              <Text note style={[common.fontmd, theme.fontmedium, common.mb10]}>
                Selected Date
              </Text>
              <Text style={[common.fontmd, theme.fontmedium]}>
                <Icon
                  name="calendar"
                  type="AntDesign"
                  style={[common.fontlg]}></Icon>{' '}
                02/12/2020
              </Text>
            </View>
            <View style={[common.flexone]}>
              <Text note style={[common.fontmd, theme.fontmedium, common.mb10]}>
                Slot Time
              </Text>
              <Text style={[common.fontmd, theme.fontmedium]}>12:00 AM</Text>
            </View>
          </View>
          <ListItem avatar style={[theme.listsearch]}>
            <Body style={[common.bordernone]}>
              <Text note style={[common.fontmd, theme.fontmedium]}>
                Service Location
              </Text>
              <Text style={[common.fontmd, theme.fontmedium]}>
                <Icon
                  name="location-pin"
                  type="Entypo"
                  style={[common.fontlg]}></Icon>{' '}
                112/A Second Street NJ USA 08550
              </Text>
            </Body>
          </ListItem>
          <View style={[common.flexbox, common.flexrow, common.p15]}>
            <View style={[common.flexone, common.m5]}>
              <Item regular>
                <Input style={[theme.input]} placeholder="Apply Coupon Code" />
              </Item>
            </View>
            <View style={[common.m5]}>
              <Button style={[theme.btnblue, {height: 50}]}>
                <Text>Apply</Text>
              </Button>
            </View>
          </View>
          <View style={[common.p20, common.pt0]}>
            <Text note style={[common.fontmd, theme.fontmedium]}>
              Selected Services
            </Text>
            <ListItem avatar style={[theme.listsearch, common.pl0]}>
              <Body style={[common.bordernone, common.ml0]}>
                <Text style={[common.fontmd, theme.fontmedium]}>
                  Women’s Haircut / Style Change
                </Text>
              </Body>
              <Right>
                <Text style={[theme.fontmedium]}>$100</Text>
              </Right>
            </ListItem>
            <ListItem avatar style={[theme.listsearch, common.pl0]}>
              <Body style={[common.bordernone, common.ml0]}>
                <Text style={[common.fontmd, theme.fontmedium]}>
                  Women’s Haircut / Style Change
                </Text>
              </Body>
              <Right>
                <Text style={[theme.fontmedium]}>$100</Text>
              </Right>
            </ListItem>
            <ListItem
              avatar
              style={[theme.listsearch, common.pl0, common.bordernone]}>
              <Body style={[common.bordernone, common.ml0]}>
                <Text
                  note
                  style={[common.fontbody, theme.fontmedium, common.textright]}>
                  Discount Applied :
                </Text>
              </Body>
              <Right style={[common.bordernone]}>
                <Text style={[theme.fontmedium]}>$100</Text>
              </Right>
            </ListItem>
            <ListItem avatar style={[theme.listsearch, common.pl0]}>
              <Body style={[common.bordernone, common.ml0]}>
                <Text
                  note
                  style={[common.fontbody, theme.fontmedium, common.textright]}>
                  Service Charge :
                </Text>
              </Body>
              <Right>
                <Text style={[theme.fontmedium]}>$100</Text>
              </Right>
            </ListItem>
            <ListItem avatar style={[theme.listsearch, common.pl0]}>
              <Body style={[common.bordernone, common.ml0]}>
                <Text
                  style={[common.fontmd, theme.fontmedium, common.textright]}>
                  Total :
                </Text>
              </Body>
              <Right>
                <Text style={[theme.fontbold, common.fontlg]}>$100</Text>
              </Right>
            </ListItem>
          </View>

          <View style={[common.p20, common.pt0]}>
            <Button block style={[theme.blackbutton]}>
              <Text style={[common.fontbody, theme.fontmedium, common.white]}>
                BOOK NOW
              </Text>
            </Button>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
