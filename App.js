import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {colors} from './Components/Styles';
import HotelView from './Components/Screens/HotelView';

const App = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.container}>
      <HotelView />
      {/* <View style={{flex: 1, backgroundColor: 'gold', zIndex: -1}} /> */}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});

export default App;
