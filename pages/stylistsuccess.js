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
} from 'native-base';

import {common} from '../css/common';
import {theme} from '../css/theme';
import ToggleSwitch from 'toggle-switch-react-native';

export default class StylistSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key1',
      selected2: 'key1',
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value,
      selected2: value,
    });
  }
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
          androidStatusBarColor="#000"
          iosBarStyle="dark-content"
          style={[theme.bgblack]}>
          <Left></Left>
          <Body></Body>
        </Header>
        <ScrollView>
          <View style={[common.p15]}>
            <Text style={[common.fontxl, common.white, theme.fontmedium]}>
              Success
            </Text>
          </View>
          <View style={[common.center, common.p20, common.center]}>
            <Icon
              name="check"
              type="SimpleLineIcons"
              style={[
                common.white,
                {fontSize: 96},
                theme.colorblue,
                common.mb20,
              ]}></Icon>
            <Text style={[common.fontxxl, theme.fontlighty, common.white]}>
              Congratulation!
            </Text>
            <Text
              style={[
                common.white,
                common.fontmd,
                theme.fontregular,
                common.textcenter,
              ]}>
              You have been successfully created {'\n'} your stylist account.
            </Text>
          </View>
          <View style={[common.center]}>
            <Image
              source={require('../assets/images/logo.png')}
              style={{width: 127, height: 51}}></Image>
          </View>
          <View style={[common.p20, theme.cardstylist]}>
            <Form>
              <View style={[common.pl20, common.pr20, common.mb10]}>
                <Button
                  block
                  style={[theme.whitebutton, common.mt20]}
                  onPress={this.toggleModal}>
                  <Text
                    style={[
                      common.black,
                      theme.fontmedium,
                      common.textcapitalize,
                      common.fontmd,
                    ]}>
                    Explore
                  </Text>
                </Button>
              </View>
            </Form>
            <Text
              style={[
                common.white,
                common.fontbody,
                theme.fontregular,
                common.textcenter,
                common.mt20,
              ]}>
              Your account is awaiting for admin approval. Once it is approved,
              you will get a notification. Meanwhile, complete all your profile
              details.
            </Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
