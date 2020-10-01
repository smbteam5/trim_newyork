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
} from 'native-base';

import {common} from '../css/common';
import {theme} from '../css/theme';
import Modal from 'react-native-modal';

export default class MessagePage extends Component {
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
            <Title>Messages</Title>
          </Body>
          <Right></Right>
        </Header>

        <ScrollView>
          <View style={[common.p10]}>
            <List>
              <ListItem avatar style={[theme.msglist]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                    style={{width: 70, height: 70, borderRadius: 35}}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[theme.fontmedium, common.mb5]}>Kelly Hill</Text>
                  <Text style={[common.black, theme.fontbold]} numberOfLines={1}>
                    Hi, lets fine will meet @ city town ..
                  </Text>
                </Body>
                <Right style={[common.center, common.bordernone]}>
                  <Text style={[common.fontsm, theme.fontregular]}>
                    03:12 Pm
                  </Text>
                </Right>
              </ListItem>
              <ListItem avatar style={[theme.msglist]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                    style={{width: 70, height: 70, borderRadius: 35}}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[theme.fontmedium, common.mb5]}>Kelly Hill</Text>
                  <Text style={[common.black, theme.fontbold]} numberOfLines={1}>
                    Hi, lets fine will meet @ city town ..
                  </Text>
                </Body>
                <Right style={[common.center, common.bordernone]}>
                  <Text style={[common.fontsm, theme.fontregular]}>
                    03:12 Pm
                  </Text>
                </Right>
              </ListItem>
              <ListItem avatar style={[theme.msglist]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                    style={{width: 70, height: 70, borderRadius: 35}}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[theme.fontmedium, common.mb5]}>Kelly Hill</Text>
                  <Text style={[common.black, theme.fontbold]} numberOfLines={1}>
                    Hi, lets fine will meet @ city town ..
                  </Text>
                </Body>
                <Right style={[common.center, common.bordernone]}>
                  <Text style={[common.fontsm, theme.fontregular]}>
                    03:12 Pm
                  </Text>
                </Right>
              </ListItem>
              <ListItem avatar style={[theme.msglist]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                    style={{width: 70, height: 70, borderRadius: 35}}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[theme.fontmedium, common.mb5]}>Kelly Hill</Text>
                  <Text note numberOfLines={1} style={[theme.fontmedium]}>
                    Hi, lets fine will meet @ city town ..
                  </Text>
                </Body>
                <Right style={[common.center, common.bordernone]}>
                  <Text style={[common.fontsm, theme.fontregular]}>
                    03:12 Pm
                  </Text>
                </Right>
              </ListItem>
              <ListItem avatar style={[theme.msglist]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                    style={{width: 70, height: 70, borderRadius: 35}}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[theme.fontmedium, common.mb5]}>Kelly Hill</Text>
                  <Text note numberOfLines={1} style={[theme.fontmedium]}>
                    Hi, lets fine will meet @ city town ..
                  </Text>
                </Body>
                <Right style={[common.center, common.bordernone]}>
                  <Text style={[common.fontsm, theme.fontregular]}>
                    03:12 Pm
                  </Text>
                </Right>
              </ListItem>
            </List>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
