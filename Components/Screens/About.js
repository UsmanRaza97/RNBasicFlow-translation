import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gs, colors} from '../Styles';
const hotel = {
  name: 'the good hotel',
  price: '$1234',
  location: 'Lahore',
  About:
    'The grand prime hotel with prime location @ very good aho. The grand prime hotel with prime location @ very good aho. The grand prime hotel with prime location @ very good aho',
};
const About = () => {
  return (
    <View style={styles.container}>
      <Text style={gs.title}>{hotel.name}</Text>
      <Text style={styles.info}>
        {hotel.price} &#8226; {hotel.location}
      </Text>
      <View style={gs.divider} />
      <Text style={gs.sectionTitle}>About {hotel.name}</Text>
      <Text style={styles.about}>{hotel.About}</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    backgroundColor: colors.darkBg,
  },
  info: {
    fontWeight: '600',
    color: colors.textSec,
    marginTop: 4,
  },
  about: {
    fontWeight: '600',
    fontSize: 13,
    color: colors.textSec,
    marginTop: 6,
    lineHeight: 20,
  },
});
