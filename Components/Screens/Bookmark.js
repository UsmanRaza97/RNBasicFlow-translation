import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/FontAwesome5';
import {gs, colors} from '../Styles';

const Bookmark = () => {
  return (
    <View style={styles.bookmark}>
      <Feather name="bookmark" size={24} color={colors.pink} />
    </View>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
  bookmark: {
    position: 'absolute',
    right: 32,
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    top: -50 / 2,
    ...gs.center,
    borderRadius: 50 / 2,
    zIndex: 10,
  },
});
