import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import TopBackNavigation from '../components/TopBackNavigation';

const ListDetailScreen = () => {
  return (
    <SafeAreaView>
      <TopBackNavigation />

      <View>
        <Text>ListDetailScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ListDetailScreen;
