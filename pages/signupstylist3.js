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

export default class SignupStylis3 extends Component {
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
                  Tell us why you are interested in joining a house-call hair
                  salon service:
                </Label>
                <Textarea
                  rowSpan={4}
                  bordered
                  placeholder="Write here"
                  style={[common.w100, common.bordernone]}
                />
              </Item>

              <Item stackedLabel style={[theme.inputstylist]}>
                <Label style={[theme.fontregular, theme.labelinput]}>
                  Which hair salons have you worked in?
                </Label>
                <Input
                  style={[common.white, theme.fontregular, common.fontbody]}
                  placeholder="Enter Number"
                />
              </Item>

              <Item stackedLabel style={[theme.inputstylist]}>
                <Label style={[theme.fontregular, theme.labelinput]}>
                  Any celebrity clientele?
                </Label>
                <Picker
                  mode="dropdown"
                  iosHeader="Select your SIM"
                  iosIcon={<Icon name="arrow-down" />}
                  style={[common.white, common.w100, theme.fontregular]}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item label="Yes " value="key0" />
                </Picker>
              </Item>
              <Item stackedLabel style={[theme.inputstylist]}>
                <Label style={[theme.fontregular, theme.labelinput]}>
                  How much do you currently charge for a haircut for a
                  woman/man?
                </Label>
                <Input
                  style={[common.white, theme.fontregular, common.fontbody]}
                  placeholder="Enter Number"
                />
              </Item>

              <View
                style={[
                  theme.inputstylist,
                  common.flexbox,
                  common.flexrow,
                  common.pt10,
                  common.pb10,
                  common.veticalcenter,
                ]}>
                <Text
                  style={[theme.fontregular, theme.labelinput, common.flexone]}>
                  Experiences
                </Text>
                <ToggleSwitch
                  size="large"
                  labelStyle={{color: '#fff'}}
                  onColor="#2F51FC"
                  isOn={this.state.isOnDefaultToggleSwitch}
                  onToggle={(isOnDefaultToggleSwitch) => {
                    this.setState({isOnDefaultToggleSwitch});
                    this.onToggle(isOnDefaultToggleSwitch);
                  }}
                />
              </View>
              <Item stackedLabel style={[theme.inputstylist]}>
                <Label style={[theme.fontregular, theme.labelinput]}>
                  License Number
                </Label>
                <Input
                  style={[common.white, theme.fontregular, common.fontbody]}
                  placeholder="Enter Number"
                />
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
