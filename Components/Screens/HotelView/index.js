import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {colors} from '../../Styles';
import Header from '../Header';
import Bookmark from '../Bookmark';
import About from '../About';
import Stats from '../Stats';
import Amenities from '../Amenities';

const index = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header />

      <View>
        <Bookmark />
        <About />
        <Stats />
        <Amenities />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
