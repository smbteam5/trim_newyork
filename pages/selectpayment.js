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
  DatePicker,
} from 'native-base';

import {common} from '../css/common';
import {theme} from '../css/theme';
import Modal from 'react-native-modal';
import {RadioButton} from 'react-native-paper';

export default class SelectPage extends Component {
  state = {
    value: 'first',
  };
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
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
            <Title>
              <Image
                source={require('../assets/images/logo.png')}
                style={{width: 57, height: 23}}></Image>
            </Title>
          </Body>
          <Right></Right>
        </Header>
        <ScrollView>
          <View style={[common.p20]}>
            <Text style={[common.fontmd, theme.fontmedium, common.mb15]}>
              Select Payment
            </Text>

            <RadioButton.Group
              onValueChange={(value) => this.setState({value})}
              value={this.state.value}>
              <Card transparent>
                <CardItem style={[common.mb10]}>
                  <Body style={[common.pt10, common.pb10, {flex: 6}]}>
                    <Text style={[theme.fontmedium]}>
                      <Icon
                        name="credit-card"
                        type="FontAwesome"
                        style={[common.fontlg]}></Icon>
                      {''} {''} {''}XXXX - XXXX - XXXX - 1908
                    </Text>
                  </Body>
                  <Right style={{flex: 1}}>
                    <RadioButton color={'#6EC1E4'} value="1" />
                  </Right>
                </CardItem>
              </Card>
              <Card transparent>
                <CardItem style={[common.mb10]}>
                  <Body style={[common.pt10, common.pb10, {flex: 6}]}>
                    <Text style={[theme.fontmedium]}>
                      <Icon
                        name="credit-card"
                        type="FontAwesome"
                        style={[common.fontlg]}></Icon>
                      {''} {''} {''}XXXX - XXXX - XXXX - 1908
                    </Text>
                  </Body>
                  <Right style={{flex: 1}}>
                    <RadioButton color={'#6EC1E4'} value="2" />
                  </Right>
                </CardItem>
              </Card>
            </RadioButton.Group>

            <Button bordered block style={[theme.borderbutton, common.mt20]}>
              <Text
                style={[
                  common.fontbody,
                  theme.fontmedium,
                  common.black,
                  common.textcapitalize,
                ]}>
                Add new card
              </Text>
            </Button>
          </View>

          <View style={[common.p20, common.pt0]}>
            <Button
              block
              style={[theme.blackbutton]}
              onPress={this.toggleModal}>
              <Text
                style={[
                  common.fontbody,
                  theme.fontmedium,
                  common.white,
                  common.textcapitalize,
                ]}>
                Pay Now
              </Text>
            </Button>
          </View>
        </ScrollView>
        <Modal isVisible={this.state.isModalVisible} center>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 20,
              margin: 20,
              borderRadius: 5,
            }}>
            <View style={[common.center]}>
              <Icon
                style={[theme.succesicon]}
                name="check-circle"
                type="Feather"></Icon>
            </View>
            <Text
              style={[
                common.textcenter,
                common.fontmd,
                theme.fontregular,
                common.mt15,
              ]}>
              You have successfully placed your booking.
            </Text>
            <Button block style={[theme.blackbutton, common.mt20]} onPress={this.toggleModal}>
              <Text
                style={[
                  common.fontbody,
                  theme.fontmedium,
                  common.white,
                  common.textcapitalize,
                ]}>
                Close
              </Text>
            </Button>
          </View>
        </Modal>
      </Container>
    );
  }
}
