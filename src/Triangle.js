//  @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  style: any,
  isDown: boolean,
};

const Triangle = ({ style, isDown }: Props) => (
  <View style={[styles.triangle, style, isDown ? styles.down : {}]} />
);

const styles = StyleSheet.create({
  down: {
    transform: [{ rotate: '180deg' }],
  },
  triangle: {
    width: 35,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 0,
    borderRightWidth: 32,
    borderBottomWidth: 32,
    borderTopLeftRadius: 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
  },
});

export default Triangle;
