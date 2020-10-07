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
} from 'native-base';

import {common} from '../css/common';
import {theme} from '../css/theme';
import Modal from 'react-native-modal';

export default class SignupStylist2 extends Component {
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
  render() {
    return (
      <Container style={[theme.bgblack]}>
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
          <Body></Body>
        </Header>
        <ScrollView>
          <View style={[common.p15]}>
            <Text style={[common.fontxl, common.white, theme.fontmedium]}>
              Enter details
            </Text>
            <Text style={[common.fontmd, common.white, theme.fontregular]}>
              Enter your stylist details
            </Text>
          </View>
          <View style={[common.p20, theme.cardstylist]}>
            <Form>
              <Item stackedLabel style={[theme.inputstylist]}>
                <Label style={[theme.fontregular, theme.labelinput]}>
                  Address{' '}
                </Label>
                <Input
                  style={[common.white, theme.fontregular, common.fontbody]}
                  placeholder="Enter your address"
                />
              </Item>

              <Item stackedLabel style={[theme.inputstylist]}>
                <Label style={[theme.fontregular, theme.labelinput]}>
                  Mobile Number{' '}
                </Label>
                <View style={[common.flexbox, common.flexrow]}>
                  <View style={{width: 60}}>
                    <Input
                      style={[common.white, theme.fontregular, common.fontbody]}
                      placeholder="+91"
                    />
                  </View>
                  <View style={[common.flexone]}>
                    <Input
                      style={[common.white, theme.fontregular, common.fontbody]}
                      placeholder="Enter Number"
                    />
                  </View>
                </View>
              </Item>
              <Item stackedLabel style={[theme.inputstylist, common.flexone]}>
                <Label
                  style={[theme.fontregular, common.pb10, theme.labelinput]}>
                  Date of birth{' '}
                </Label>
                <View style={[common.w100]}>
                  <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={'en'}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={'fade'}
                    androidMode={'default'}
                    textStyle={{color: '#fff'}}
                    placeHolderTextStyle={{color: '#d3d3d3'}}
                    onDateChange={this.setDate}
                    disabled={false}
                  />
                </View>
              </Item>

              <Item stackedLabel style={[theme.inputstylist]}>
                <Label style={[theme.fontregular, theme.labelinput]}>
                  Nationality/Visa{' '}
                </Label>
                <Input
                  style={[common.white, theme.fontregular, common.fontbody]}
                  placeholder="Enter Number"
                />
              </Item>
              <Item stackedLabel style={[theme.inputstylist]}>
                <Label style={[theme.fontregular, theme.labelinput]}>
                  Your work / portfolio/ Instagram{' '}
                </Label>
                <Input
                  style={[common.white, theme.fontregular, common.fontbody]}
                  placeholder="Enter your link"
                />
              </Item>
              <Item stackedLabel style={[theme.inputstylist]}>
                <Label style={[theme.fontregular, theme.labelinput]}>
                  I’m a
                </Label>
                <Picker
                  mode="dropdown"
                  iosHeader="Select your SIM"
                  iosIcon={<Icon name="arrow-down" />}
                  style={[common.white, common.w100, theme.fontregular]}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item
                    label="Hair stylist (women, men, kids) "
                    value="key0"
                  />
                </Picker>
              </Item>
              <Item stackedLabel style={[theme.inputstylist]}>
                <Label style={[theme.fontregular, theme.labelinput]}>
                  Experiences
                </Label>
                <Picker
                  mode="dropdown"
                  iosHeader="Select your SIM"
                  iosIcon={<Icon name="arrow-down" />}
                  style={[common.white, common.w100, theme.fontregular]}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item label="3 - 5 years " value="key1" />
                </Picker>
              </Item>
            </Form>
          </View>
          <View style={[common.pl20, common.pr20]}>
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
                Continue
              </Text>
            </Button>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
