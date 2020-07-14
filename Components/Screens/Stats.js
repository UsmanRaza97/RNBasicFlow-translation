import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gs, colors} from '../Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import index from './HotelView';

const starColors = ['#e3ab53', '#e3ab53', '#e3ab53', '#e3ab53', '#8b6f43'];
const Circle = props => {
  return <View style={[props.style, styles.circle]} />;
};
const Stats = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.weatherContainer, {...gs.center}]}>
        <FontAwesome name="sun" size={24} color={colors.darkHl} />
        <View style={{marginLeft: 8}}>
          <Text style={styles.title}>22*</Text>
          <Text style={styles.subTitle}>Sunny</Text>
        </View>
      </View>

      <View>
        <Text style={styles.title}>
          8.4
          <Text style={[styles.subTitle, {paddingLeft: 8}]}>
            &nbsp;&nbsp; +6k Votes
          </Text>
        </Text>
        <View style={gs.rowCenter}>
          {starColors.map((color, index) => {
            return <FontAwesome color={color} name="star" key={index} />;
          })}
        </View>
      </View>
      <View style={styles.circleContainer}>
        <Circle
          style={{backgroundColor: '#999', marginRight: -10, zIndex: 3}}
        />
        <Circle
          style={{backgroundColor: '#999', marginRight: -10, zIndex: 2}}
        />
        <Circle
          style={{backgroundColor: '#999', marginRight: -10, zIndex: 1}}
        />
      </View>
    </View>
  );
};
export default Stats;

const styles = StyleSheet.create({
  container: {
    // ...gs.rowCenter,
    flexDirection: 'row',
    ...gs.sectionContainer,
  },
  weatherContainer: {
    ...gs.rowCenter,
    paddingRight: 12,
    marginRight: 12,
    borderRightWidth: 1,
    borderRightColor: '#444',
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  subTitle: {color: colors.textSec, fontSize: 10, fontWeight: '800'},
  circleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    borderWidth: 2,
    borderColor: colors.lightBg,
  },
});
