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
} from 'native-base';

import {common} from '../css/common';
import {theme} from '../css/theme';
import Modal from 'react-native-modal';

export default class SearchDetail extends Component {
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
              name="menu"
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
          <View style={[theme.banner]}>
            <Image
              source={require('../assets/images/banner.png')}
              style={{width: '100%'}}></Image>
          </View>
          <View style={[common.p20]}>
            <Text style={[common.fontlg, theme.fontmedium]}>
              Women’s Haircut / Style Change
            </Text>
            <View style={[common.flexbox, common.flexrow]}>
              <Badge style={[theme.pricebadge, common.mr10]}>
                <Text style={[theme.fontbold]}>$100</Text>
              </Badge>
              <Text>Takes up to 01 hour</Text>
            </View>
            <Text style={[theme.fontregular, common.fontbody, common.mt20]}>
              Phasellus dignissim, tellus in pellentesque mollis, mauris orci
              dignissim nisl, id gravida nunc enim quis nibh. Phasellus
              dignissim, tellus in pellentesque mollis, mauris orci dignissim
              nisl, id gravida nunc enim quis nibh.
            </Text>
            <ListItem avatar style={[theme.listsearch]}>
              <Left>
                <Thumbnail
                  source={require('../assets/images/user-thumb.png')}
                  style={{width: 70, height: 70, borderRadius: 35}}
                />
              </Left>
              <Body style={[common.bordernone]}>
                <Text style={[theme.fontmedium, common.mb5]}>
                  Benjamin Dean
                </Text>
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
              <Right style={[common.center, common.bordernone]}>
                <Button rounded style={[theme.chatbtn, common.center]}>
                  <Icon name="chat" type="Entypo"></Icon>
                </Button>
              </Right>
            </ListItem>
            <Button bordered block style={[theme.borderbutton, common.mt20]}>
              <Text
                style={[
                  common.fontbody,
                  theme.fontmedium,
                  common.black,
                  common.textcapitalize,
                ]}>
                Add More Services
              </Text>
            </Button>
            <Button block style={[theme.blackbutton, common.mt20]}>
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
