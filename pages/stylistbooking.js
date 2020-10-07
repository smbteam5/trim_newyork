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
  Tab,
  Tabs,
  TabHeading,
  Thumbnail,
  Badge,
} from 'native-base';

import {common} from '../css/common';
import {theme} from '../css/theme';
import ToggleSwitch from 'toggle-switch-react-native';
import {Calendar} from 'react-native-calendars';

export default class StylistBooking extends Component {
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
          hasTabs
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
            <Title style={[theme.fontmedium]}>Bookings</Title>
          </Body>
          <Right></Right>
        </Header>

        <Tabs style={[theme.bgblack]}>
          <Tab
            heading={
              <TabHeading
                style={[theme.bgblack]}
                activeTextStyle={{color: '#f00'}}>
                <Text style={[common.white, theme.fontregular]}>Requests</Text>
              </TabHeading>
            }>
            <ScrollView style={[theme.bgblack]}>
              <View style={[common.p15]}>
                <View style={[common.center, common.p20]}>
                  <Image
                    source={require('../assets/images/logo.png')}
                    style={{width: 127, height: 51}}></Image>
                </View>
                <Text
                  style={[
                    common.white,
                    common.fontbody,
                    theme.fontregular,
                    common.textcenter,
                  ]}>
                  You need to get the approval from admin to access this page.
                </Text>
              </View>
              <View style={[common.p15]}>
                <View style={[theme.cardstylist, common.mb10]}>
                  <ListItem avatar style={[common.ml0]}>
                    <Left>
                      <Thumbnail
                        source={require('../assets/images/user-thumb.png')}
                      />
                    </Left>
                    <Body style={[common.bordernone]}>
                      <Text style={[common.white]}>Kelly Meyer</Text>
                      <Text style={[common.fontsm, theme.graylabel]}>
                        <Icon
                          name="location-pin"
                          type="Entypo"
                          style={[common.fontmd, theme.stylistblue]}></Icon>
                        112/A second street New Jersey 08550
                      </Text>
                    </Body>
                  </ListItem>
                  <Text note style={[common.mt20, common.textupercase]}>
                    Date & Time
                  </Text>
                  <Text style={[common.white]}>09/16/2020 11:00 AM</Text>
                  <Text note style={[common.mt20]}>
                    SERVICES
                  </Text>
                  <ListItem avatar style={[common.ml0, common.mb5]}>
                    <Body style={[common.bordernone, common.ml0]}>
                      <Text style={[common.white]}>Hair Styling</Text>
                    </Body>
                    <Right style={[common.bordernone]}>
                      <Badge style={[theme.badgestylist]}>
                        <Text style={[common.fontsm, theme.fontbold]}>
                          01 hr
                        </Text>
                      </Badge>
                    </Right>
                  </ListItem>
                  <View style={[common.flexbox, common.flexrow]}>
                    <View style={[common.flexone, common.p5]}>
                      <Button rounded danger block>
                        <Text>Decline</Text>
                      </Button>
                    </View>
                    <View style={[common.flexone, common.p5]}>
                      <Button rounded block style={[theme.bggreen]}>
                        <Text>ACCEPT</Text>
                      </Button>
                    </View>
                  </View>
                  <View>
                    <Text note>
                      * This request will auto-decline if you are failed to
                      accept it within 15 mins.
                    </Text>
                  </View>
                </View>
                <View style={[theme.cardstylist, common.mb10]}>
                  <ListItem avatar style={[common.ml0]}>
                    <Left>
                      <Thumbnail
                        source={require('../assets/images/user-thumb.png')}
                      />
                    </Left>
                    <Body style={[common.bordernone]}>
                      <Text style={[common.white]}>Kelly Meyer</Text>
                      <Text style={[common.fontsm, theme.graylabel]}>
                        <Icon
                          name="location-pin"
                          type="Entypo"
                          style={[common.fontmd, theme.stylistblue]}></Icon>
                        112/A second street New Jersey 08550
                      </Text>
                    </Body>
                  </ListItem>
                  <Text note style={[common.mt20, common.textupercase]}>
                    Date & Time
                  </Text>
                  <Text style={[common.white]}>09/16/2020 11:00 AM</Text>
                  <Text note style={[common.mt20]}>
                    SERVICES
                  </Text>
                  <ListItem avatar style={[common.ml0, common.mb5]}>
                    <Body style={[common.bordernone, common.ml0]}>
                      <Text style={[common.white]}>Hair Styling</Text>
                    </Body>
                    <Right style={[common.bordernone]}>
                      <Badge style={[theme.badgestylist]}>
                        <Text style={[common.fontsm, theme.fontbold]}>
                          01 hr
                        </Text>
                      </Badge>
                    </Right>
                  </ListItem>
                  <View style={[common.flexbox, common.flexrow]}>
                    <View style={[common.flexone, common.p5]}>
                      <Button rounded danger block>
                        <Text>Decline</Text>
                      </Button>
                    </View>
                    <View style={[common.flexone, common.p5]}>
                      <Button rounded block style={[theme.bggreen]}>
                        <Text>ACCEPT</Text>
                      </Button>
                    </View>
                  </View>
                  <View>
                    <Text note>
                      * This request will auto-decline if you are failed to
                      accept it within 15 mins.
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </Tab>
          <Tab
            heading={
              <TabHeading style={[theme.bgblack]}>
                <Text style={[common.white, theme.fontregular]}>
                  Appointments
                </Text>
              </TabHeading>
            }>
            <ScrollView style={[theme.bgblack]}>
              <View style={[common.p15]}>
                <View
                  style={[
                    common.flexbox,
                    common.flexrow,
                    common.pt10,
                    common.pb10,
                    common.veticalcenter,
                    common.center,
                  ]}>
                  <ToggleSwitch
                    size="large"
                    label="Map View"
                    labelStyle={{color: '#fff'}}
                    onColor="#2F51FC"
                    isOn={this.state.isOnDefaultToggleSwitch}
                    onToggle={(isOnDefaultToggleSwitch) => {
                      this.setState({isOnDefaultToggleSwitch});
                      this.onToggle(isOnDefaultToggleSwitch);
                    }}
                  />
                </View>
                <View style={[theme.cardstylist]}>
                  <Calendar
                    // Initially visible month. Default = Date()
                    current={'2020-10-07'}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2012-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2012-05-30'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => {
                      console.log('selected day', day);
                    }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => {
                      console.log('month changed', month);
                    }}
                    // Hide month navigation arrows. Default = false
                    hideArrows={false}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                    // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    markedDates={{
                      '2020-10-07': {selected: true, selectedColor: '#2F51FC'},
                      '2020-10-08': {selected: true, selectedColor: '#2F51FC'},
                      '2020-10-10': {selected: true, selectedColor: '#2F51FC'},
                      '2020-10-13': {selected: true, selectedColor: '#2F51FC'},
                    }}
                    theme={{
                      backgroundColor: '#000',
                      calendarBackground: 'transparent',
                      textSectionTitleColor: '#b6c1cd',
                      textSectionTitleDisabledColor: '#d9e1e8',
                      selectedDayBackgroundColor: '#00adf5',
                      selectedDayTextColor: '#ffffff',
                      todayTextColor: '#00adf5',
                      dayTextColor: '#2d4150',
                      textDisabledColor: '#d9e1e8',
                      dotColor: '#00adf5',
                      selectedDotColor: '#ffffff',
                      disabledArrowColor: '#d9e1e8',
                      monthTextColor: '#fff',
                      indicatorColor: '#fff',
                      textDayFontFamily: 'monospace',
                      textMonthFontFamily: 'monospace',
                      textDayHeaderFontFamily: 'monospace',
                      textDayFontWeight: '300',
                      textMonthFontWeight: 'bold',
                      textDayHeaderFontWeight: '300',
                      textDayFontSize: 16,
                      textMonthFontSize: 16,
                      textDayHeaderFontSize: 16,
                      arrowColor: 'white',
                    }}
                  />
                </View>
              </View>
              <View style={[theme.speciallabel, common.mt0]}>
                <Text
                  style={[
                    theme.fontregular,
                    common.textcenter,
                    theme.stylistblue,
                  ]}>
                  09/17/2020
                </Text>
              </View>
              <View style={[common.p15]}>
                <View style={[theme.cardstylist, common.mb10]}>
                  <View style={[common.flexbox, common.flexrow]}>
                    <View style={[common.flexone]}>
                      <Text note style={[common.textupercase, common.pr15]}>
                        #TRM 225366
                      </Text>
                    </View>
                    <View>
                      <Badge style={[theme.badgestatus, theme.bggreen]}>
                        <Text>Confirmed</Text>
                      </Badge>
                    </View>
                  </View>
                  <ListItem avatar style={[common.ml0]}>
                    <Left>
                      <Thumbnail
                        source={require('../assets/images/user-thumb.png')}
                      />
                    </Left>
                    <Body style={[common.bordernone]}>
                      <Text style={[common.white]}>Kelly Meyer</Text>
                      <Text style={[common.fontsm, theme.graylabel]}>
                        <Icon
                          name="location-pin"
                          type="Entypo"
                          style={[common.fontmd, theme.stylistblue]}></Icon>
                        112/A second street New Jersey 08550
                      </Text>
                    </Body>
                  </ListItem>
                  <View style={[common.flexbox, common.flexrow, common.mt15]}>
                    <Text note style={[common.textupercase, common.pr15]}>
                      Date & Time
                    </Text>
                    <Text style={[common.white, common.flexone]}>
                      09/16/2020 11:00 AM
                    </Text>
                  </View>
                </View>
                <View style={[theme.cardstylist, common.mb10]}>
                  <View style={[common.flexbox, common.flexrow]}>
                    <View style={[common.flexone]}>
                      <Text note style={[common.textupercase, common.pr15]}>
                        #TRM 225366
                      </Text>
                    </View>
                    <View>
                      <Badge style={[theme.badgestatus, theme.bggreen]}>
                        <Text>Confirmed</Text>
                      </Badge>
                    </View>
                  </View>
                  <ListItem avatar style={[common.ml0]}>
                    <Left>
                      <Thumbnail
                        source={require('../assets/images/user-thumb.png')}
                      />
                    </Left>
                    <Body style={[common.bordernone]}>
                      <Text style={[common.white]}>Kelly Meyer</Text>
                      <Text style={[common.fontsm, theme.graylabel]}>
                        <Icon
                          name="location-pin"
                          type="Entypo"
                          style={[common.fontmd, theme.stylistblue]}></Icon>
                        112/A second street New Jersey 08550
                      </Text>
                    </Body>
                  </ListItem>
                  <View style={[common.flexbox, common.flexrow, common.mt15]}>
                    <Text note style={[common.textupercase, common.pr15]}>
                      Date & Time
                    </Text>
                    <Text style={[common.white, common.flexone]}>
                      09/16/2020 11:00 AM
                    </Text>
                  </View>
                </View>
                <View style={[theme.cardstylist, common.mb10]}>
                  <View style={[common.flexbox, common.flexrow]}>
                    <View style={[common.flexone]}>
                      <Text note style={[common.textupercase, common.pr15]}>
                        #TRM 225366
                      </Text>
                    </View>
                    <View>
                      <Badge style={[theme.badgestatus, theme.bggreen]}>
                        <Text>Confirmed</Text>
                      </Badge>
                    </View>
                  </View>
                  <ListItem avatar style={[common.ml0]}>
                    <Left>
                      <Thumbnail
                        source={require('../assets/images/user-thumb.png')}
                      />
                    </Left>
                    <Body style={[common.bordernone]}>
                      <Text style={[common.white]}>Kelly Meyer</Text>
                      <Text style={[common.fontsm, theme.graylabel]}>
                        <Icon
                          name="location-pin"
                          type="Entypo"
                          style={[common.fontmd, theme.stylistblue]}></Icon>
                        112/A second street New Jersey 08550
                      </Text>
                    </Body>
                  </ListItem>
                  <View style={[common.flexbox, common.flexrow, common.mt15]}>
                    <Text note style={[common.textupercase, common.pr15]}>
                      Date & Time
                    </Text>
                    <Text style={[common.white, common.flexone]}>
                      09/16/2020 11:00 AM
                    </Text>
                  </View>
                </View>
                <View style={[theme.cardstylist, common.mb10]}>
                  <View style={[common.flexbox, common.flexrow]}>
                    <View style={[common.flexone]}>
                      <Text note style={[common.textupercase, common.pr15]}>
                        #TRM 225366
                      </Text>
                    </View>
                    <View>
                      <Badge style={[theme.badgestatus, theme.bggreen]}>
                        <Text>Confirmed</Text>
                      </Badge>
                    </View>
                  </View>
                  <ListItem avatar style={[common.ml0]}>
                    <Left>
                      <Thumbnail
                        source={require('../assets/images/user-thumb.png')}
                      />
                    </Left>
                    <Body style={[common.bordernone]}>
                      <Text style={[common.white]}>Kelly Meyer</Text>
                      <Text style={[common.fontsm, theme.graylabel]}>
                        <Icon
                          name="location-pin"
                          type="Entypo"
                          style={[common.fontmd, theme.stylistblue]}></Icon>
                        112/A second street New Jersey 08550
                      </Text>
                    </Body>
                  </ListItem>
                  <View style={[common.flexbox, common.flexrow, common.mt15]}>
                    <Text note style={[common.textupercase, common.pr15]}>
                      Date & Time
                    </Text>
                    <Text style={[common.white, common.flexone]}>
                      09/16/2020 11:00 AM
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </Tab>
          <Tab
            heading={
              <TabHeading style={[theme.bgblack]}>
                <Text style={[common.white, theme.fontregular]}>Completed</Text>
              </TabHeading>
            }>
            <ScrollView style={[theme.bgblack]}>
              <View style={[common.p15]}>
                <View style={[theme.cardstylist, common.mb10]}>
                  <View style={[common.flexbox, common.flexrow]}>
                    <View style={[common.flexone]}>
                      <Text note style={[common.textupercase, common.pr15]}>
                        #TRM 225366
                      </Text>
                    </View>
                    <View>
                      <Badge style={[theme.badgestatus, theme.bgbluestylist]}>
                        <Text>Completed</Text>
                      </Badge>
                    </View>
                  </View>
                  <ListItem avatar style={[common.ml0]}>
                    <Left>
                      <Thumbnail
                        source={require('../assets/images/user-thumb.png')}
                      />
                    </Left>
                    <Body style={[common.bordernone]}>
                      <Text style={[common.white]}>Kelly Meyer</Text>
                      <Text style={[common.fontsm, theme.graylabel]}>
                        <Icon
                          name="location-pin"
                          type="Entypo"
                          style={[common.fontmd, theme.stylistblue]}></Icon>
                        112/A second street New Jersey 08550
                      </Text>
                    </Body>
                  </ListItem>
                  <View style={[common.flexbox, common.flexrow, common.mt15]}>
                    <Text note style={[common.textupercase, common.pr15]}>
                      Date & Time
                    </Text>
                    <Text style={[common.white, common.flexone]}>
                      09/16/2020 11:00 AM
                    </Text>
                  </View>
                </View>
                <View style={[theme.cardstylist, common.mb10]}>
                  <View style={[common.flexbox, common.flexrow]}>
                    <View style={[common.flexone]}>
                      <Text note style={[common.textupercase, common.pr15]}>
                        #TRM 225366
                      </Text>
                    </View>
                    <View>
                      <Badge style={[theme.badgestatus, theme.bgbluestylist]}>
                        <Text>Completed</Text>
                      </Badge>
                    </View>
                  </View>
                  <ListItem avatar style={[common.ml0]}>
                    <Left>
                      <Thumbnail
                        source={require('../assets/images/user-thumb.png')}
                      />
                    </Left>
                    <Body style={[common.bordernone]}>
                      <Text style={[common.white]}>Kelly Meyer</Text>
                      <Text style={[common.fontsm, theme.graylabel]}>
                        <Icon
                          name="location-pin"
                          type="Entypo"
                          style={[common.fontmd, theme.stylistblue]}></Icon>
                        112/A second street New Jersey 08550
                      </Text>
                    </Body>
                  </ListItem>
                  <View style={[common.flexbox, common.flexrow, common.mt15]}>
                    <Text note style={[common.textupercase, common.pr15]}>
                      Date & Time
                    </Text>
                    <Text style={[common.white, common.flexone]}>
                      09/16/2020 11:00 AM
                    </Text>
                  </View>
                </View>
                <View style={[theme.cardstylist, common.mb10]}>
                  <View style={[common.flexbox, common.flexrow]}>
                    <View style={[common.flexone]}>
                      <Text note style={[common.textupercase, common.pr15]}>
                        #TRM 225366
                      </Text>
                    </View>
                    <View>
                      <Badge danger style={[theme.badgestatus]}>
                        <Text>Cancelled</Text>
                      </Badge>
                    </View>
                  </View>
                  <ListItem avatar style={[common.ml0]}>
                    <Left>
                      <Thumbnail
                        source={require('../assets/images/user-thumb.png')}
                      />
                    </Left>
                    <Body style={[common.bordernone]}>
                      <Text style={[common.white]}>Kelly Meyer</Text>
                      <Text style={[common.fontsm, theme.graylabel]}>
                        <Icon
                          name="location-pin"
                          type="Entypo"
                          style={[common.fontmd, theme.stylistblue]}></Icon>
                        112/A second street New Jersey 08550
                      </Text>
                    </Body>
                  </ListItem>
                  <View style={[common.flexbox, common.flexrow, common.mt15]}>
                    <Text note style={[common.textupercase, common.pr15]}>
                      Date & Time
                    </Text>
                    <Text style={[common.white, common.flexone]}>
                      09/16/2020 11:00 AM
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
