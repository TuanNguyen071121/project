// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const Onboarding = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
        <Text style={styles.introTextStyle}>{item.text2}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Browse  Food',
    text2: 'Welcome to our restaurant app! Log in and check  out our delicious food.',

    image: {
      uri:
        'https://lun-eu.icons8.com/a/gbdNU06tEEGbvqeEPli-0Q/-qwDa6u3DUOM3H45O8GUBw/icons8-restaurant-menu-101.png',
    },
    backgroundColor: '#5EA33A',
  },
  {
    key: 's2',

    text: 'Order Food',
    text2: 'Hungry? Order food in just a few clicks and we’ll take care of you..',
    image: {
      uri:
        'https://lun-eu.icons8.com/a/gbdNU06tEEGbvqeEPli-0Q/l2A40uQ2tEmxVj1rIVyxdQ/icons8-delivery-500.png',
    },
    backgroundColor: '#5EA33A',
  },
  {
    key: 's3',

    text: 'Make Reservations',
    text2: 'Book a table in advance to avoid waiting in line',
    image: {
      uri:
        'https://lun-eu.icons8.com/a/gbdNU06tEEGbvqeEPli-0Q/Ja5OmvCwfEKI0kMR3MVs3A/noun_Calendar_2442157.png',
    },
    backgroundColor: '#5EA33A',
  },
  {
    key: 's4',

    text: ' Quick Search',
    text2: 'Quickly find food items you like the most',
    image: {
      uri:
        'https://lun-eu.icons8.com/a/gbdNU06tEEGbvqeEPli-0Q/mZoXIkWE6UWxMGA3ff4muA/noun_Binoculars_1107295.png',
    },
    backgroundColor: '#5EA33A',
  },
  {
    key: 's5',

    text: 'Apple Pay',
    text2: 'We know you’re busy, so you can pay with your phone in just one click',
    image: {
      uri:
        'https://lun-eu.icons8.com/a/gbdNU06tEEGbvqeEPli-0Q/64uxUBo9k0uE2ID1LFzznw/noun_mac_2076879.png',
    },
    backgroundColor: '#5EA33A',
  },
  
];
