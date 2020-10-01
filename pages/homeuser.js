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

export default class HomeUser extends Component {
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
          <Right></Right>
        </Header>
        <ScrollView>
          <View style={[common.p10]}>
            <View style={[common.flexbox, common.flexrow]}>
              <View style={[common.flexone, theme.listuser]}>
                <Image
                  source={require('../assets/images/womenhaircut.png')}
                  style={{width: '100%'}}></Image>
                <View style={[common.p5, common.pt10, common.pb10]}>
                  <Text style={[theme.fontbody]}>Women’s Haircut / Trim</Text>
                  <Text style={[theme.colorgray]}>$80 and up</Text>
                </View>
              </View>
              <View style={[common.flexone, theme.listuser]}>
                <Image
                  source={require('../assets/images/womenstylechange.png')}
                  style={{width: '100%'}}></Image>
                <View style={[common.p5, common.pt10, common.pb10]}>
                  <Text style={[theme.fontbody]}>
                    Women’s Haircut / Style Change
                  </Text>
                  <Text style={[theme.colorgray]}>$100 and up</Text>
                </View>
              </View>
            </View>
            <View style={[common.flexbox, common.flexrow]}>
              <View style={[common.flexone, theme.listuser]}>
                <Image
                  source={require('../assets/images/womenblowdry.png')}
                  style={{width: '100%'}}></Image>
                <View style={[common.p5, common.pt10, common.pb10]}>
                  <Text style={[theme.fontbody]}>
                    Women’s Blow Dry / Styling / Updo
                  </Text>
                  <Text style={[theme.colorgray]}>$120 and up</Text>
                </View>
              </View>
              <View style={[common.flexone, theme.listuser]}>
                <Image
                  source={require('../assets/images/menhaircut.png')}
                  style={{width: '100%'}}></Image>
                <View style={[common.p5, common.pt10, common.pb10]}>
                  <Text style={[theme.fontbody]}>Men’s haircut/ grooming</Text>
                  <Text style={[theme.colorgray]}>$100 and up</Text>
                </View>
              </View>
            </View>
            <View style={[common.flexbox, common.flexrow]}>
              <View style={[common.flexone, theme.listuser]}>
                <Image
                  source={require('../assets/images/kidhaircut.png')}
                  style={{width: '100%'}}></Image>
                <View style={[common.p5, common.pt10, common.pb10]}>
                  <Text style={[theme.fontbody]}>Kids haircut</Text>
                  <Text style={[theme.colorgray]}>$100 and up</Text>
                </View>
              </View>
              <View style={[common.flexone, theme.listuser]}>
                <Image
                  source={require('../assets/images/bangtrim.png')}
                  style={{width: '100%'}}></Image>
                <View style={[common.p5, common.pt10, common.pb10]}>
                  <Text style={[theme.fontbody]}>Bang Trim</Text>
                  <Text style={[theme.colorgray]}>$50 and up </Text>
                </View>
              </View>
            </View>
            <View style={[common.flexbox, common.flexrow]}>
              <View style={[common.flexone, theme.listuser, common.bordernone]}>
                <Image
                  source={require('../assets/images/specialservice.png')}
                  style={{width: '100%'}}></Image>
                <View style={[theme.bglisttext]}>
                  <Text
                    style={[
                      common.fontxl,
                      common.white,
                      theme.fontregular,
                      common.textupercase,
                    ]}>
                    Special Services
                  </Text>
                  <Text
                    style={[
                      common.white,
                      common.fontmd,
                      common.textupercase,
                      common.textcenter,
                    ]}>
                    WEDDING, EXTENSIONS AND {'\n'} CUSTOMIZED WIGS
                  </Text>
                </View>
              </View>
            </View>
            <View style={[common.flexbox, common.flexrow]}>
              <View style={[common.flexone, theme.listuser, common.bordernone]}>
                <Image
                  source={require('../assets/images/makeup.png')}
                  style={{width: '100%'}}></Image>
                <View style={[theme.bglisttext]}>
                  <Text
                    style={[
                      common.fontxl,
                      common.white,
                      theme.fontregular,
                      common.textupercase,
                    ]}>
                    MAKEUP APPLICATION
                  </Text>
                  <Text
                    style={[
                      common.white,
                      common.fontmd,
                      common.textupercase,
                      common.textcenter,
                    ]}>
                    $300 AND UP
                  </Text>
                </View>
              </View>
            </View>
            <View style={[common.flexbox, common.flexrow]}>
              <View style={[common.flexone, theme.listuser, common.bordernone]}>
                <Image
                  source={require('../assets/images/makeupclass.png')}
                  style={{width: '100%'}}></Image>
                <View style={[theme.bglisttext]}>
                  <Text
                    style={[
                      common.fontxl,
                      common.white,
                      theme.fontregular,
                      common.textupercase,
                    ]}>
                    MAKEUP CLASSES
                  </Text>
                  <Text
                    style={[
                      common.white,
                      common.fontmd,
                      common.textupercase,
                      common.textcenter,
                    ]}>
                    $350 AND UP
                  </Text>
                </View>
              </View>
            </View>
            <View style={[common.flexbox, common.flexrow]}>
              <View style={[common.flexone, theme.listuser, common.bordernone]}>
                <Image
                  source={require('../assets/images/makeuppackage.png')}
                  style={{width: '100%'}}></Image>
                <View style={[theme.bglisttext]}>
                  <Text
                    style={[
                      common.fontxl,
                      common.white,
                      theme.fontregular,
                      common.textupercase,
                    ]}>
                    MAKEUP CLASS PACKAGE
                  </Text>
                  <Text
                    style={[
                      common.white,
                      common.fontmd,
                      common.textupercase,
                      common.textcenter,
                    ]}>
                    FOUR CLASSES
                  </Text>
                  <Text
                    style={[
                      common.white,
                      common.fontmd,
                      common.textupercase,
                      common.textcenter,
                    ]}>
                    $1100 AND UP
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
