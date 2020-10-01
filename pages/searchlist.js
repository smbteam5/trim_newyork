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

export default class SearchList extends Component {
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
          <Right>
            <Icon name="filter" type="AntDesign" style={[common.white]}></Icon>
          </Right>
        </Header>
        <View style={[theme.search]}>
          <Item style={[theme.searchbox, common.bordernone]}>
            <Icon name="search1" type="AntDesign" style={[common.white]} />
            <Input placeholder="Search" style={[common.bordernone]} />
          </Item>
          <View style={[theme.menulabel]}>
            <Text style={[common.white, theme.fontregular, common.textcenter]}>
              Women’s Haircut / Style Change
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={[common.p10]}>
            <List>
              <ListItem avatar style={[theme.listsearch]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                    style={{width: 70, height: 70, borderRadius: 35}}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[theme.fontmedium, common.mb5]}>
                    Benjamin Dean
                  </Text>
                  <Text style={[theme.fontmedium]}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={[theme.yellow, common.fontlg]}></Icon>
                    {''} {''}
                    {''}4.9
                  </Text>
                  <Text note>Takes up to 01 hour</Text>
                </Body>
                <Right style={[common.center, common.bordernone]}>
                  <Text style={[common.fontlg, theme.fontbold]}>$100</Text>
                </Right>
              </ListItem>
              <ListItem avatar style={[theme.listsearch]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                    style={{width: 70, height: 70, borderRadius: 35}}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[theme.fontmedium, common.mb5]}>
                    Benjamin Dean
                  </Text>
                  <Text style={[theme.fontmedium]}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={[theme.yellow, common.fontlg]}></Icon>
                    {''} {''}
                    {''}4.9
                  </Text>
                  <Text note>Takes up to 01 hour</Text>
                </Body>
                <Right style={[common.center, common.bordernone]}>
                  <Text style={[common.fontlg, theme.fontbold]}>$100</Text>
                </Right>
              </ListItem>
              <ListItem avatar style={[theme.listsearch]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                    style={{width: 70, height: 70, borderRadius: 35}}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[theme.fontmedium, common.mb5]}>
                    Benjamin Dean
                  </Text>
                  <Text style={[theme.fontmedium]}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={[theme.yellow, common.fontlg]}></Icon>
                    {''} {''}
                    {''}4.9
                  </Text>
                  <Text note>Takes up to 01 hour</Text>
                </Body>
                <Right style={[common.center, common.bordernone]}>
                  <Text style={[common.fontlg, theme.fontbold]}>$100</Text>
                </Right>
              </ListItem>
              <ListItem avatar style={[theme.listsearch]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                    style={{width: 70, height: 70, borderRadius: 35}}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[theme.fontmedium, common.mb5]}>
                    Benjamin Dean
                  </Text>
                  <Text style={[theme.fontmedium]}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={[theme.yellow, common.fontlg]}></Icon>
                    {''} {''}
                    {''}4.9
                  </Text>
                  <Text note>Takes up to 01 hour</Text>
                </Body>
                <Right style={[common.center, common.bordernone]}>
                  <Text style={[common.fontlg, theme.fontbold]}>$100</Text>
                </Right>
              </ListItem>
              <ListItem avatar style={[theme.listsearch]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                    style={{width: 70, height: 70, borderRadius: 35}}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[theme.fontmedium, common.mb5]}>
                    Benjamin Dean
                  </Text>
                  <Text style={[theme.fontmedium]}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={[theme.yellow, common.fontlg]}></Icon>
                    {''} {''}
                    {''}4.9
                  </Text>
                  <Text note>Takes up to 01 hour</Text>
                </Body>
                <Right style={[common.center, common.bordernone]}>
                  <Text style={[common.fontlg, theme.fontbold]}>$100</Text>
                </Right>
              </ListItem>
              <ListItem avatar style={[theme.listsearch]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                    style={{width: 70, height: 70, borderRadius: 35}}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[theme.fontmedium, common.mb5]}>
                    Benjamin Dean
                  </Text>
                  <Text style={[theme.fontmedium]}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={[theme.yellow, common.fontlg]}></Icon>
                    {''} {''}
                    {''}4.9
                  </Text>
                  <Text note>Takes up to 01 hour</Text>
                </Body>
                <Right style={[common.center, common.bordernone]}>
                  <Text style={[common.fontlg, theme.fontbold]}>$100</Text>
                </Right>
              </ListItem>
              <ListItem avatar style={[theme.listsearch]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                    style={{width: 70, height: 70, borderRadius: 35}}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[theme.fontmedium, common.mb5]}>
                    Benjamin Dean
                  </Text>
                  <Text style={[theme.fontmedium]}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={[theme.yellow, common.fontlg]}></Icon>
                    {''} {''}
                    {''}4.9
                  </Text>
                  <Text note>Takes up to 01 hour</Text>
                </Body>
                <Right style={[common.center, common.bordernone]}>
                  <Text style={[common.fontlg, theme.fontbold]}>$100</Text>
                </Right>
              </ListItem>
              <ListItem avatar style={[theme.listsearch]}>
                <Left>
                  <Thumbnail
                    source={require('../assets/images/user-thumb.png')}
                    style={{width: 70, height: 70, borderRadius: 35}}
                  />
                </Left>
                <Body style={[common.bordernone]}>
                  <Text style={[theme.fontmedium, common.mb5]}>
                    Benjamin Dean
                  </Text>
                  <Text style={[theme.fontmedium]}>
                    <Icon
                      name="star"
                      type="FontAwesome"
                      style={[theme.yellow, common.fontlg]}></Icon>
                    {''} {''}
                    {''}4.9
                  </Text>
                  <Text note>Takes up to 01 hour</Text>
                </Body>
                <Right style={[common.center, common.bordernone]}>
                  <Text style={[common.fontlg, theme.fontbold]}>$100</Text>
                </Right>
              </ListItem>
            </List>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
