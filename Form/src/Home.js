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
    Picker,
    Icon,
} from 'native-base';
import {connect} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import CheckBox from '@react-native-community/checkbox';
import RadioButton from './utils/RadioButton';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            userId: '',
            selectedCategory: '',
            tuition:false,
            office : false,
            other : false,
        };
        this.getStorageData();

    }

    onValueChange = (value) => {
        this.setState({selectedCategory: value});
    };
    getStorageData = async () => {
        try {
            const storageData = await AsyncStorage.getItem('data');
            if (storageData !== null) {
                console.log('ASYNC', JSON.parse(storageData));
                const parseData = JSON.parse(storageData);
                this.setState({
                    title: parseData.title,
                    body: parseData.body,
                    userId: parseData.userId,
                    selectedCategory: parseData.selectedCategory,
                    tuition: parseData.tuition,
                    office : parseData.office,
                    other : parseData.other,
                });
            }
        } catch (error) {
            console.error('ERROR', error);
        }
    };

    dataSaved = () => {
        const storageData = AsyncStorage.getItem('data');
        NetInfo.fetch().then((state) => {
            if (state.isConnected && this.state.title !== '') {
                // this.props.postToServer(this.state.title, this.state.body, this.state.userId);
                // console.log('POST', this.state.title);
                alert("Success", "Data has been sent to server")
                console.log('clicked');
                if (storageData !== null) {
                    AsyncStorage.removeItem('data');
                    AsyncStorage.removeItem('genre')
                    console.log('removed');
                }
            } else {
                let data = {
                    title: this.state.title,
                    body: this.state.body,
                    userId: this.state.userId,
                    selectedCategory: this.state.selectedCategory,
                    selectedGenre : this.state.selectedGenre,
                    tuition: this.state.tuition,
                    office : this.state.office,
                    other : this.state.other,
                };
                AsyncStorage.setItem('data', JSON.stringify(data));
                console.log('SAVE', JSON.stringify(data));
            }
        })
            .catch(error => console.log(error));
    };

    render() {
        const genre = [
            {
                key: '1',
                text:'Male'
            },
            {
                key: '2',
                text:'Female'
            }
        ];
        return (
            <Container>
                <Header/>
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
                        <Item>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon type="MaterialIcons" name="expand-more"/>}
                                selectedValue={this.state.selectedCategory}
                                placeholder="Select Category"
                                placeholderStyle={{color: '#bfc6ea'}}
                                placeholderIconColor="#007aff"
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="Select Category" value="key0"/>
                                <Picker.Item label="Important" value="key1"/>
                                <Picker.Item label="Standard" value="key2"/>
                                <Picker.Item label="Less Important" value="key3"/>
                            </Picker>
                        </Item>
                        <Item>
                            <CheckBox
                            disabled={false}
                            value={this.state.tuition}
                            onValueChange={selected => this.setState({tuition : selected})}
                            />
                            <Text>Tuition</Text>
                        </Item>
                        <Item>
                            <CheckBox
                                disabled={false}
                                value={this.state.office}
                                onValueChange={selected => this.setState({office : selected})}
                            />
                            <Text>Office</Text>
                        </Item>
                        <Item>
                            <CheckBox
                                disabled={false}
                                value={this.state.other}
                                onValueChange={selected => this.setState({other : selected})}
                            />
                            <Text>Other</Text>
                        </Item>
                        <Item>
                            <RadioButton PROP={genre}/>
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
    statusCode: state.dataReducer.statusCode,
});
const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(fetchData()),
    postToServer: (title, body, userId) => dispatch(postData(userId, title, body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
