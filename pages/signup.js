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
} from 'native-base';

import {common} from '../css/common';
import {theme} from '../css/theme';
import Modal from 'react-native-modal';

export default class SignUp extends Component {
  state = {
    text: '',
  };
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
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
            <Title>Create new account</Title>
          </Body>
        </Header>
        <ScrollView>
          <View style={[common.p20]}>
            <Form>
              <View style={[common.pt15, common.pb15]}>
                <Text style={[common.fontmd, theme.fontlight]}>
                  Create your new account to continue.
                </Text>
              </View>
              <Item regular style={[common.mt20]}>
                <Input style={[theme.input]} placeholder="First Name" />
              </Item>
              <Item regular style={[common.mt20]}>
                <Input style={[theme.input]} placeholder="Last Name" />
              </Item>
              <Item regular style={[common.mt20]}>
                <Input style={[theme.input]} placeholder="Email Address" />
              </Item>
              <Item regular style={[common.mt20]}>
                <Input style={[theme.input]} placeholder="Password" />
              </Item>
              <Item regular style={[common.mt20]}>
                <Input style={[theme.input]} placeholder="Confirm Password" />
              </Item>
              <Button
                block
                style={[theme.blackbutton, common.mt20]}
                onPress={this.toggleModal}>
                <Text
                  style={[
                    common.white,
                    theme.fontmedium,
                    common.textcapitalize,
                    common.fontmd,
                  ]}>
                  Continue
                </Text>
              </Button>
            </Form>
            <View>
              <Text
                style={[
                  common.fontmd,
                  theme.fontregular,
                  common.textcenter,
                  common.m15,
                ]}>
                Or signup using
              </Text>
            </View>
            <View style={[common.center, common.flexbox, common.flexrow]}>
              <View style={[common.ml10, common.mr10]}>
                <Image
                  source={require('../assets/images/googleblack.png')}
                  style={{width: 60, height: 60}}></Image>
              </View>
              <View style={[common.ml10, common.mr10]}>
                <Image
                  source={require('../assets/images/fbblack.png')}
                  style={{width: 60, height: 60}}></Image>
              </View>
              <View style={[common.ml10, common.mr10]}>
                <Image
                  source={require('../assets/images/appleblack.png')}
                  style={{width: 60, height: 60}}></Image>
              </View>
            </View>
          </View>

          <Modal isVisible={this.state.isModalVisible} center>
            <View
              style={{
                backgroundColor: '#fff',
                padding: 20,
                margin: 20,
                borderRadius: 5,
              }}>
              <Text
                style={[common.textcenter, common.fontmd, theme.fontregular]}>
                Choose to continue
              </Text>
              <List>
                <ListItem style={[theme.usertype]}>
                  <Left>
                    <Image
                      source={require('../assets/images/user.png')}
                      style={{width: 22, height: 26}}></Image>
                    <Text style={[common.white, common.ml10]}>
                      Sign Up as Customer
                    </Text>
                  </Left>
                  <Right>
                    <Icon
                      name="keyboard-arrow-right"
                      type="MaterialIcons"
                      style={[common.fontxl]}
                    />
                  </Right>
                </ListItem>
                <ListItem style={[theme.usertype]}>
                  <Left>
                    <Image
                      source={require('../assets/images/scissor.png')}
                      style={{width: 22, height: 26}}></Image>
                    <Text style={[common.white, common.ml10]}>
                      Sign Up as Hair Stylist
                    </Text>
                  </Left>
                  <Right>
                    <Icon
                      name="keyboard-arrow-right"
                      type="MaterialIcons"
                      style={[common.fontxl]}
                    />
                  </Right>
                </ListItem>
              </List>
            </View>
          </Modal>
        </ScrollView>
      </Container>
    );
  }
}
