import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import IssueApi, {IssueList} from '../api/IssueApi';
import {Holder} from '../components/Holder';
import {FootHolder} from '../components/FootHolder';
import styled from 'styled-components/native';
import SortComments from '../components/SortComments';
import {RootStackParams} from '../App';

const Width = Dimensions.get('window').width - 30;

type Props = NativeStackScreenProps<RootStackParams, 'ListDetailScreen'>;

// const ModifyData = data => {
//   const numColumns = 3;
//   const addBannerAfterIndex = 5;
//   const arr = data;
//   let tmp = [];
//   console.log(2277, data);
//   data?.forEach((val, index) => {
//     // if (index % numColumns === 0 && index !== 0) {
//     //   arr.push(tmp);
//     //   tmp = [];
//     // }
//     if (addBannerAfterIndex && index !== 0) {
//       arr.push([{type: 'banner'}]);
//       tmp = [];
//     }
//     tmp.push(val);
//   });
//   arr.push(tmp);
//   console.log(4041, arr);
//   return arr;
// };

const ListScreen = ({navigation}: Props) => {
  const [issueLists, setIssueLists] = useState<IssueList[] | null>(null);

  useEffect(() => {
    (async () => {
      const issueListFromApi = await IssueApi();
      const sortedIssueListByComments = SortComments(issueListFromApi);
      setIssueLists(sortedIssueListByComments);
    })();
  }, []);

  //   const modifiedData = ModifyData(issueLists);
  //   console.log(5454, modifiedData);

  return (
    <SafeAreaView>
      <Container>
        <FlatList
          data={issueLists}
          scrollEnabled={true}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <FootHolder px={50} />}
          ItemSeparatorComponent={() => <Holder px={Width} />}
          ListHeaderComponent={() => <Title>Angular / Angular-cli</Title>}
          renderItem={({item, index}) => {
            const createdDate =
              item.created_at.slice(0, 4) +
              '년' +
              item.created_at.slice(5, 7) +
              '월' +
              item.created_at.slice(8, 9) +
              '일';
            return (
              <View style={{width: Width}}>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() =>
                    navigation.navigate('ListDetailScreen', {item: item})
                  }>
                  <View style={{flexDirection: 'column'}}>
                    <SubTitle numberOfLines={1}>
                      #{item.number} {item.title}
                    </SubTitle>
                    <SubTitle2 numberOfLines={1}>
                      <Text>
                        작성자:{item.user.login} | 작성일: {createdDate}
                      </Text>
                    </SubTitle2>
                  </View>
                  <SubTitle3>코멘트: {item.comments}</SubTitle3>
                </TouchableOpacity>
              </View>
            );
          }}
          onEndReached={() => {}}
        />
      </Container>
    </SafeAreaView>
  );
};

export default ListScreen;

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  margin-top: 15px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 25px;
  text-align: center;
`;

const SubTitle = styled.Text`
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: 400;
  width: ${Width * 0.75};
`;

const SubTitle2 = styled.Text`
  margin-bottom: 10px;
  font-size: 12px;
  width: ${Width * 0.8};
`;

const SubTitle3 = styled.Text`
  margin-bottom: 10px;
  font-size: 12px;
  width: ${Width * 0.2};
  align-self: center;
  text-align: center;
`;
