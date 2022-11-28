import {View} from 'react-native';
import React from 'react';

type HolderProps = {
  px: number;
};

export const Holder = ({px}: HolderProps) => {
  return (
    <View
      style={{
        height: 2,
        width: px,
        backgroundColor: 'lightgray',
        marginBottom: 15,
        marginTop: 15,
      }}
    />
  );
};
