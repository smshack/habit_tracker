import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    handleIncrement = () => {
        console.log(`habit.jsx =>handleIncrement`);
        this.props.onIncrement(this.props.habit);
      };
    
      handleDecrement = () => {
        console.log(`habit.jsx =>handleDecrement`);
        this.props.onDecrement(this.props.habit);
      };
    
      handleDelete = () => {
        console.log(`habit.jsx =>handleDelete`);
        this.props.onDelete(this.props.habit);
      };

      handleAdd =name =>{
          this.props.onAdd(name);
      }
  render() {
    console.log('habits');
    return (
          <>
          <HabitAddForm 
          onAdd ={this.handleAdd}/>
          <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}> Reset All</button>
          </>
        

    );
  }
}

export default Habits;