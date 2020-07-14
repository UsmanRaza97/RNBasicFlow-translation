import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {gs} from '../Styles';
const Header = () => {
  return (
    <View>
      <Image
        style={{height: 300, width: '100%'}}
        source={require('../Img/backGround.jpg')}
      />

      <View style={styles.topButton}>
        <FontAwesome name="times" size={24} color="#fff" />
        <View style={gs.rowCenter}>
          <FontAwesome name="save" size={24} style={styles.topButtonRight} />
          <FontAwesome
            name="share-alt"
            size={24}
            style={styles.topButtonRight}
          />
          <FontAwesome
            name="ellipsis-v"
            size={20}
            style={styles.topButtonRight}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topButton: {
    ...gs.rowBetween,
    position: 'absolute',
    top: 10,
    left: 32,
    right: 32,
  },
  topButtonRight: {
    marginLeft: 17,
    color: '#fff',
  },
});
