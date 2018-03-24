import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class ListAvatar extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'http://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2017/08/26120008/Zlatan-Ibrahimovic.jpg' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
