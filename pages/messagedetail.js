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
  Footer,
  FooterTab,
  Textarea,
} from 'native-base';

import {common} from '../css/common';
import {theme} from '../css/theme';
import Modal from 'react-native-modal';

export default class MessageDetail extends Component {
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
            <Title>Elizabeth Boyd</Title>
          </Body>
          <Right></Right>
        </Header>

        <ScrollView>
          <View style={[common.m20]}>
            <View style={[theme.chatleft]}>
              <View style={[common.mr10]}>
                <Thumbnail
                  source={require('../assets/images/user-thumb.png')}
                />
              </View>
              <View style={[common.p10, theme.chatleftbox]}>
                <Text
                  note
                  style={[
                    common.white,
                    common.textmedium,
                    common.pl5,
                    theme.fontregular,
                  ]}>
                  In at iaculis lorem. Praesent tempor dictum tellus ut
                  molestieac ex convallis, vel imperdiet magna laoreet.
                </Text>
                <Text style={[common.textright, theme.lefttime]}>03:12 Pm</Text>
              </View>
            </View>

            <View style={[theme.chatright]}>
              <View style={[common.p10]}>
                <Text
                  note
                  style={[
                    common.black,
                    common.textmedium,
                    common.pl5,
                    theme.fontregular,
                  ]}>
                  Duis pretium gravida
                </Text>
                <Text style={[theme.lefttime, common.pl5]}>03:12 Pm</Text>
              </View>
            </View>
            <View style={[theme.chatright]}>
              <View style={[common.p10]}>
                <Text
                  note
                  style={[
                    common.black,
                    common.textmedium,
                    common.pl5,
                    theme.fontregular,
                  ]}>
                  Duis pretium gravida
                </Text>
                <Text style={[theme.lefttime, common.pl5]}>03:12 Pm</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <Footer style={[{backgroundColor: '#fff', height: 80}, common.p10]}>
          <View style={[common.flexbox, common.flexrow, common.w100]}>
            <View style={{flex: 1}}>
              <Textarea
                rowSpan={2}
                bordered
                placeholder="Type your message"
                style={[theme.fontregular, {borderColor: '#fff'}]}
              />
            </View>
            <View style={[{width: 60}, common.p5]}>
              <TouchableOpacity style={[common.themebluebg, theme.sendbtn]}>
                <Icon name="send" type="MaterialIcons" style={[common.black]} />
              </TouchableOpacity>
            </View>
          </View>
        </Footer>
      </Container>
    );
  }
}
