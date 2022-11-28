import {View, Text, FlatList, TouchableOpacity, Dimensions, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import IssueApi, {IssueList} from '../api/IssueApi';
import {Holder} from '../components/Holder';
import {FootHolder} from '../components/FootHolder';
import styled from 'styled-components/native';
import SortComments from '../components/SortComments';

const Width = Dimensions.get('window').width - 30;

const ListScreen = () => {
  const [issueLists, setIssueLists] = useState<IssueList[] | null>(null);

  useEffect(() => {
    (async () => {
      const issueListFromApi = await IssueApi();
      const sortedIssueListByComments = SortComments(issueListFromApi);
      setIssueLists(sortedIssueListByComments);
    })();
  }, []);

  const IssueRenderList = (issue: IssueList) => {
    const createdDate =
      issue.item.created_at.slice(0, 4) +
      '년' +
      issue.item.created_at.slice(5, 7) +
      '월' +
      issue.item.created_at.slice(8, 9) +
      '일';
    return (
      <View style={{width: Width}}>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation}>
          <View style={{flexDirection: 'column'}}>
            <SubTitle numberOfLines={1}>
              #{issue.item.number} {issue.item.title}
            </SubTitle>
            <SubTitle2 numberOfLines={1}>
              <Text>
                작성자:{issue.item.user.login} | 작성일: {createdDate}
              </Text>
            </SubTitle2>
          </View>
          <SubTitle3>코멘트: {issue.item.comments}</SubTitle3>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
        <Container>
        <Title>ListScreen</Title>
        <FlatList
            data={issueLists}
            scrollEnabled={true}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => <FootHolder px={50} />}
            ItemSeparatorComponent={() => <Holder px={Width} />}
            renderItem={({item, index}) => {
            return <IssueRenderList key={index} item={item} />;
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
