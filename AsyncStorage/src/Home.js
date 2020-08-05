import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {fetchData, postData} from './action/DataAction';
import {
  Container,
  Header,
  Content,
  Body,
  Input,
  Button,
  Form,
  Item,
  Label,
  Text,
} from 'native-base';
import {connect} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      userId: '',
    };
    this.getStorageData();

  }

  getStorageData = async () => {
    try {
      const storageData = await AsyncStorage.getItem('data');
      if (storageData !== null) {
        console.log('ASYNC', JSON.parse(storageData));
        const parseData = JSON.parse(storageData)
        this.setState({title : parseData.title, body: parseData.body, userId : parseData.userId})
      }
    } catch (error) {
      console.error('ERROR', error);
    }
  };

  dataSaved = () => {
    const storageData = AsyncStorage.getItem('data');
    NetInfo.fetch().then((state) => {
      if (state.isConnected && this.state.title !== '') {
        this.props.saveData(this.state.title, this.state.body, this.state.userId);
        console.log('POST', this.state.title);
        console.log('clicked');
        if (storageData !== null){
          AsyncStorage.removeItem('data')
          console.log("removed")
        }
      } else {
        let data = {
          title: this.state.title,
          body: this.state.body,
          userId: this.state.userId,
        };
        AsyncStorage.setItem('data', JSON.stringify(data));
        console.log('SAVE', JSON.stringify(data));
      }
    });
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input
                underlineColorAndroid="grey"
                onChangeText={(title) => {
                  this.setState({title: title});
                  console.log('TITLE', this.state.title);
                }}
                value={this.state.title}
              />
            </Item>
            <Item floatingLabel>
              <Label>Body</Label>
              <Input
                underlineColorAndroid="grey"
                onChangeText={(body) => {
                  this.setState({body: body});
                  console.log('BODY', this.state.body);
                }}
                value={this.state.body}
              />
            </Item>
            <Item floatingLabel>
              <Label>UserId</Label>
              <Input
                underlineColorAndroid="grey"
                onChangeText={(id) => {
                  this.setState({userId: id});
                  console.log('TITLE', this.state.userId);
                }}
                value={this.state.userId}
              />
            </Item>
          </Form>
          <Button onPress={this.dataSaved}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.dataReducer.data,
  postData: state.dataReducer.postData,
  statusCode : state.dataReducer.statusCode
});
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
  saveData: (title, body, userId) => dispatch(postData(userId, title, body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
