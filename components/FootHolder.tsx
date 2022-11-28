import {View} from 'react-native';
import React from 'react';

type FootHolderProps = {
  px: number;
};

export const FootHolder = ({px}: FootHolderProps) => {
  return <View style={{height: px, width: 10}} />;
};
