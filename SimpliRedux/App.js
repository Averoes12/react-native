import React from 'react';
import {View} from 'react-native';
import {actionCreators} from './redux/todoListReducer';
import List from './component/List';
import Input from './component/Input';
import Title from './component/Title';
import store from './redux/store';

export default class App extends React.Component {
  state = {};

  unsubscribe = store.subscribe(() => {
    const {todos} = store.getState();
    this.setState({todos});
  });

  UNSAFE_componentWillMount() {
    const {todos} = store.getState();
    this.setState({todos});
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  onAddTodo = text => {
    store.dispatch(actionCreators.add(text));
  };
  onRemoveTodo = index => {
    store.dispatch(actionCreators.remove(index));
  };
  render() {
    const {todos} = this.state;
    return (
      <View>
        <Title>To-Do List</Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List list={todos} onPressItem={this.onRemoveTodo} />
      </View>
    );
  }
}
