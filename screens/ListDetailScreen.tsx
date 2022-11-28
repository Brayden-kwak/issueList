import {View, Text, SafeAreaView, Dimensions, Image, ScrollView} from 'react-native';
import React from 'react';
import TopBackNavigation from '../components/TopBackNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';
import styled from 'styled-components/native';
import {Holder} from '../components/Holder';


const Width = Dimensions.get('window').width - 30;

type Props = NativeStackScreenProps<RootStackParams, 'ListDetailScreen'>;

const ListDetailScreen = ({route}: Props) => {
  const details = route.params;

  const createdDate =
    details.item.created_at.slice(0, 4) +
    '년' +
    details.item.created_at.slice(5, 7) +
    '월' +
    details.item.created_at.slice(8, 9) +
    '일';

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <TopBackNavigation />
          <Title>Angular / Angular-cli</Title>
        </Header>

        <ScrollView showsVerticalScrollIndicator={false}>
          <BodyContainer>
            <BodyHeader>
              <Image
                source={{uri: details.item.user.avatar_url}}
                style={{width: 80, height: 100}}
              />
              <SubTitleMain>
                <SubTitle>
                  #{details.item.number} {details.item.title}
                </SubTitle>
                <SubTitle2>
                  <Text>
                    작성자:{details.item.user.login} | 작성일: {createdDate} |
                    코멘트: {details.item.comments}
                  </Text>
                </SubTitle2>
              </SubTitleMain>
            </BodyHeader>
            <Holder px={Width} />
            <Text>{details.item.body}</Text>
          </BodyContainer>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
};

export default ListDetailScreen;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-left: 15px;
  text-align: center;
  margin-left: 38px;
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const Header = styled.View`
  width: ${Width};
  flex-direction: row;
  margin-bottom: 25px;
  margin-top: 15px;
  align-items: center;
`;

const BodyHeader = styled.View`
  width: ${Width};
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const SubTitleMain = styled.View`
  flex-direction: column;
  width: ${Width * 0.8};
  margin-left: 10px;
`;

const BodyContainer = styled.View`
  width: ${Width};
  flex-direction: column;
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
  width: ${Width * 0.75};
`;
