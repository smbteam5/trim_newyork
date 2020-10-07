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
  Tab,
  Tabs,
  TabHeading,
  Thumbnail,
  Badge,
} from 'native-base';

import {common} from '../css/common';
import {theme} from '../css/theme';
import ToggleSwitch from 'toggle-switch-react-native';
import {Calendar} from 'react-native-calendars';

export default class StylistNotification extends Component {
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
          hasTabs
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
            <Title style={[theme.fontmedium]}>Notification</Title>
          </Body>
          <Right></Right>
        </Header>
        <ScrollView style={[theme.bgblack]}>
          <View style={[common.p15]}>
            <View
              style={[
                theme.cardstylist,
                common.mb10,
                common.pt0,
                theme.radius5,
              ]}>
              <ListItem avatar style={[common.ml0]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[common.fontmd, theme.graylabel]}>
                    You have appointment with Alan Wallace @ 11:00 AM
                  </Text>
                </Body>
              </ListItem>
            </View>
            <View
              style={[
                theme.cardstylist,
                common.mb10,
                common.pt0,
                theme.radius5,
              ]}>
              <ListItem avatar style={[common.ml0]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[common.fontmd, theme.graylabel]}>
                    You have appointment with Alan Wallace @ 11:00 AM
                  </Text>
                </Body>
              </ListItem>
            </View>
            <View
              style={[
                theme.cardstylist,
                common.mb10,
                common.pt0,
                theme.radius5,
              ]}>
              <ListItem avatar style={[common.ml0]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[common.fontmd, theme.graylabel]}>
                    You have appointment with Alan Wallace @ 11:00 AM
                  </Text>
                </Body>
              </ListItem>
            </View>
            <View
              style={[
                theme.cardstylist,
                common.mb10,
                common.pt0,
                theme.radius5,
              ]}>
              <ListItem avatar style={[common.ml0]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[common.fontmd, theme.graylabel]}>
                    You have appointment with Alan Wallace @ 11:00 AM
                  </Text>
                </Body>
              </ListItem>
            </View>
            <View
              style={[
                theme.cardstylist,
                common.mb10,
                common.pt0,
                theme.radius5,
              ]}>
              <ListItem avatar style={[common.ml0]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[common.fontmd, theme.graylabel]}>
                    You have appointment with Alan Wallace @ 11:00 AM
                  </Text>
                </Body>
              </ListItem>
            </View>
            <View
              style={[
                theme.cardstylist,
                common.mb10,
                common.pt0,
                theme.radius5,
              ]}>
              <ListItem avatar style={[common.ml0]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[common.fontmd, theme.graylabel]}>
                    You have appointment with Alan Wallace @ 11:00 AM
                  </Text>
                </Body>
              </ListItem>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
