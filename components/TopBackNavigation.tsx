import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import BackIcon from '../icons/BackIcon';

const TopBackNavigation = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableHighlight
        style={{width: 40, height: 40}}
        underlayColor="#f0ddcc"
        onPress={() => {
          navigation.goBack();
        }}>
        <BackIcon color="#000" size={20} />
      </TouchableHighlight>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
`;

export default TopBackNavigation;
