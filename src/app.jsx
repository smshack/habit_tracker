import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        return {...habit,count:habit.count+1}; // 오브젝트 복사 똑같이 복사하지만 count만 변경
      } 
      return item;
    })
    this.setState({ habits });
  };

  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        const count =habit.count-1;
        return {...habit,count:count <0?0:count}; // 오브젝트 복사 똑같이 복사하지만 count만 변경
      } 
      return item;
    })
    this.setState({ habits });
  };

  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    //기존 state에 habits를 새로운 배열에 복사해서
    //고유한 id를 사용하기 위해서 Date.now를 사용
    // name은 상위 컴포넌트에서 받아와서 ,count를 초기값 0으로 해서 
    this.setState({ habits });
    //this.habits의 값을 업데이트
  };

  handleReset = () => {
    const habits = this.state.habits.map(habit => { // habits를 돌면서 새로운 배열을 만들고 habit을 받아서 
      if(habit.count !==0){
        return{...habit,count:0};
      }
      return habit; //habit을 리턴해 준다
    });
    this.setState({ habits });
    //this.habits의 값을 업데이트
  };

  render() {
    console.log('--------------------------------------');
    console.log('app');
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}

        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;