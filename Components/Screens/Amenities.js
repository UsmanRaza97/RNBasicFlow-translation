import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, gs} from '../Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialIcons';

const Amenities = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.text, marginBottom: 10}}>Amenities</Text>

      <View style={[styles.iconContainer, {marginBottom: 20}]}>
        <View style={{...gs.center}}>
          <View style={styles.iconStyle}>
            <FontAwesome name="wifi" color={'#999'} size={20} />
          </View>
          <Text style={{color: colors.textSec}}>Wi-Fi</Text>
        </View>
        <View style={{...gs.center}}>
          <View style={styles.iconStyle}>
            <FontAwesome name="utensils" color={'#999'} size={18} />
          </View>
          <Text style={{color: colors.textSec}}>Wi-Fi</Text>
        </View>
        <View style={{...gs.center}}>
          <View style={styles.iconStyle}>
            <FontAwesome name="swimmer" color={'#999'} size={20} />
          </View>
          <Text style={{color: colors.textSec}}>Wi-Fi</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <View style={{...gs.center}}>
          <View style={styles.iconStyle}>
            <FontAwesome name="glass-martini" color={'#999'} size={20} />
          </View>
          <Text style={{color: colors.textSec}}>Wi-Fi</Text>
        </View>
        <View style={{...gs.center}}>
          <View style={styles.iconStyle}>
            <FontAwesome name="car" color={'#999'} size={20} />
          </View>
          <Text style={{color: colors.textSec}}>Wi-Fi</Text>
        </View>
        <View style={{...gs.center}}>
          <View style={styles.iconStyle}>
            <FontAwesome name="music" color={'#999'} size={20} />
          </View>
          <Text style={{color: colors.textSec}}>Wi-Fi</Text>
        </View>
      </View>
    </View>
  );
};

export default Amenities;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBg,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  iconStyle: {
    backgroundColor: colors.darkHl,
    height: 40,
    width: 40,
    ...gs.center,
    borderRadius: 40 / 2,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
