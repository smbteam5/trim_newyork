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

export default class BookingSlots extends Component {
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }
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
          <Right>
            <Icon name="filter" type="AntDesign" style={[common.white]}></Icon>
          </Right>
        </Header>
        <ScrollView>
          <ListItem avatar style={[theme.listsearch, common.pl10]}>
            <Left>
              <Thumbnail
                source={require('../assets/images/user-thumb.png')}
                style={{width: 70, height: 70, borderRadius: 35}}
              />
            </Left>
            <Body style={[common.bordernone]}>
              <Text style={[theme.fontmedium, common.mb5]}>Benjamin Dean</Text>
              <Text style={[theme.fontmedium]}>
                <Icon
                  name="star"
                  type="FontAwesome"
                  style={[theme.yellow, common.fontlg]}></Icon>
                {''} {''}
                {''}4.9
              </Text>
              <Text note>
                <Icon
                  name="location-pin"
                  type="Entypo"
                  style={[common.fontmd]}></Icon>
                New Jersey 08550
              </Text>
            </Body>
          </ListItem>
          <ListItem avatar style={[theme.listsearch]}>
            <Body style={[common.bordernone]}>
              <Text style={[common.fontmd, theme.fontmedium]}>
                Women’s Haircut / Style Change
              </Text>
              <View style={[common.flexbox, common.flexrow]}>
                <Badge style={[theme.pricebadge, common.mr10]}>
                  <Text style={[theme.fontbold]}>$100</Text>
                </Badge>
                <Text note>Takes up to 01 hour</Text>
              </View>
            </Body>
          </ListItem>
          <ListItem avatar style={[theme.listsearch]}>
            <Body style={[common.bordernone]}>
              <Text style={[common.fontmd, theme.fontmedium]}>
                Women’s Haircut / Style Change
              </Text>
              <View style={[common.flexbox, common.flexrow]}>
                <Badge style={[theme.pricebadge, common.mr10]}>
                  <Text style={[theme.fontbold]}>$100</Text>
                </Badge>
                <Text note>Takes up to 01 hour</Text>
              </View>
            </Body>
          </ListItem>
          <View style={[common.p20]}>
            <Text style={[common.fontmd, theme.fontmedium]}>
              Select date & Time
            </Text>
            <View style={[theme.dateinput]}>
              <DatePicker
                defaultDate={new Date(2020, 10, 1)}
                minimumDate={new Date(2020, 1, 1)}
                maximumDate={new Date(2020, 12, 31)}
                locale={'en'}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={'fade'}
                androidMode={'default'}
                placeHolderText="Select date"
                textStyle={{color: '#6EC1E4'}}
                placeHolderTextStyle={{color: '#d3d3d3'}}
                onDateChange={this.setDate}
                disabled={false}
              />
            </View>
          </View>
          <View style={[common.p20, common.pt0]}>
            <Text style={[common.fontmd, theme.fontmedium, common.mb10]}>
              Book a Slot
            </Text>
            <View style={[common.flexbox, common.flexrow, common.flexwrap]}>
              <View style={[theme.timeslot]}>
                <Text style={[common.textcenter, theme.fontregular]}>
                  11:00{'\n'}AM
                </Text>
              </View>
              <View style={[theme.timeslot]}>
                <Text style={[common.textcenter, theme.fontregular]}>
                  11:00{'\n'}AM
                </Text>
              </View>
              <View style={[theme.timeslot]}>
                <Text style={[common.textcenter, theme.fontregular]}>
                  11:00{'\n'}AM
                </Text>
              </View>
              <View style={[theme.timeslot]}>
                <Text style={[common.textcenter, theme.fontregular]}>
                  11:00{'\n'}AM
                </Text>
              </View>
              <View style={[theme.timeslot]}>
                <Text style={[common.textcenter, theme.fontregular]}>
                  11:00{'\n'}AM
                </Text>
              </View>
              <View style={[theme.timeslot]}>
                <Text style={[common.textcenter, theme.fontregular]}>
                  11:00{'\n'}AM
                </Text>
              </View>
              <View style={[theme.timeslot, theme.slotactive]}>
                <Text
                  style={[common.textcenter, theme.fontregular, common.white]}>
                  11:00{'\n'}AM
                </Text>
              </View>
            </View>
          </View>
          <View style={[common.p20, common.pt0]}>
            <Text style={[common.fontmd, theme.fontmedium]}>
              Where you want the service at
            </Text>
            <Item regular style={[common.mt20]}>
              <Input style={[theme.input]} placeholder="location" />
            </Item>
            <Button block style={[theme.blackbutton, common.mt20]}>
              <Text style={[common.fontbody, theme.fontmedium, common.white]}>
                BOOK NOW
              </Text>
            </Button>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
