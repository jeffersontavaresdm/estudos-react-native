import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

const ViewManipulation2 = () => {
  return (
    <View style={styles.card}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        horizontal={true}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box4} />
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>
        <View style={styles.box4} />
        <View style={styles.box3} />
        <View style={styles.box2} />
        <View style={styles.box1} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
  },
  box1: {
    // flex: 1,
    backgroundColor: 'red',
    height: 250,
    width: 150,
  },
  box2: {
    // flex: 1,
    backgroundColor: 'blue',
    height: 250,
    width: 150,
  },
  box3: {
    // flex: 1,
    backgroundColor: 'black',
    height: 250,
    width: 150,
  },
  box4: {
    // flex: 1,
    backgroundColor: 'yellow',
    height: 250,
    width: 150,
  },
});

export default ViewManipulation2;
