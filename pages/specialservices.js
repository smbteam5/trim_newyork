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

export default class SpecialService extends Component {
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
            <Title>Special Services</Title>
          </Body>
          <Right></Right>
        </Header>
        <ScrollView>
          <View style={[theme.speciallabel, common.mt0]}>
            <Text style={[common.white, theme.fontregular, common.textcenter]}>
              SEIJI'S SERVICES
            </Text>
          </View>
          <View style={[common.p10]}>
            <ListItem avatar style={[theme.listsearch]}>
              <Body style={[common.bordernone]}>
                <Text style={[theme.fontmedium, common.mb5]}>
                  Women's HAIRCUT / TRIM
                </Text>
              </Body>
              <Right style={[common.center, common.bordernone]}>
                <Text style={[common.fontlg, theme.fontmedium]}>$400</Text>
              </Right>
            </ListItem>
            <ListItem avatar style={[theme.listsearch]}>
              <Body style={[common.bordernone]}>
                <Text style={[theme.fontmedium, common.mb5]}>
                  Women's HAIRCUT / STYLE CHANGE
                </Text>
              </Body>
              <Right style={[common.center, common.bordernone]}>
                <Text style={[common.fontlg, theme.fontmedium]}>$500</Text>
              </Right>
            </ListItem>
            <ListItem avatar style={[theme.listsearch]}>
              <Body style={[common.bordernone]}>
                <Text style={[theme.fontmedium, common.mb5]}>
                  Women's BLOW DRY / STYLING / UPDO
                </Text>
              </Body>
              <Right style={[common.center, common.bordernone]}>
                <Text style={[common.fontlg, theme.fontmedium]}>$800</Text>
              </Right>
            </ListItem>
            <ListItem avatar style={[theme.listsearch]}>
              <Body style={[common.bordernone]}>
                <Text style={[theme.fontmedium, common.mb5]}>
                  Women's SPECIAL EVENT STYLING
                </Text>
              </Body>
              <Right style={[common.center, common.bordernone]}>
                <Text style={[common.fontlg, theme.fontmedium]}>$1000</Text>
              </Right>
            </ListItem>
            <View style={[common.p10]}>
              <Button block style={[theme.btnblue]}>
                <Text>REQUEST SEIJI</Text>
              </Button>
            </View>
          </View>

          <View style={[theme.speciallabel, common.mt0]}>
            <Text style={[common.white, theme.fontregular, common.textcenter]}>
              OTHER SERVICES
            </Text>
          </View>
          <View style={[common.p10]}>
            <View style={[common.flexbox, common.flexrow]}>
              <View style={[common.flexone, theme.listuser, common.bordernone]}>
                <Image
                  source={require('../assets/images/wedding.png')}
                  style={{width: '100%'}}></Image>
                <View style={[theme.bglisttext]}>
                  <Text
                    style={[
                      common.fontxl,
                      common.white,
                      theme.fontregular,
                      common.textupercase,
                      common.textcenter,
                    ]}>
                    Wedding Services & Packages
                  </Text>
                </View>
              </View>
            </View>
            <View style={[common.flexbox, common.flexrow]}>
              <View style={[common.flexone, theme.listuser, common.bordernone]}>
                <Image
                  source={require('../assets/images/hair.png')}
                  style={{width: '100%'}}></Image>
                <View style={[theme.bglisttext]}>
                  <Text
                    style={[
                      common.fontxl,
                      common.white,
                      theme.fontregular,
                      common.textupercase,
                    ]}>
                    Hair Extensions
                  </Text>
                  <Text
                    style={[
                      common.white,
                      common.fontmd,
                      common.textupercase,
                      common.textcenter,
                    ]}>
                    $400 AND UP
                  </Text>
                </View>
              </View>
            </View>
            <View style={[common.flexbox, common.flexrow]}>
              <View style={[common.flexone, theme.listuser, common.bordernone]}>
                <Image
                  source={require('../assets/images/wigs.png')}
                  style={{width: '100%'}}></Image>
                <View style={[theme.bglisttext]}>
                  <Text
                    style={[
                      common.fontxl,
                      common.white,
                      theme.fontregular,
                      common.textupercase,
                    ]}>
                    CUSTOM WIGS
                  </Text>
                  <Text
                    style={[
                      common.white,
                      common.fontmd,
                      common.textupercase,
                      common.textcenter,
                    ]}>
                    PRICED UPON CONSULTATION
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
