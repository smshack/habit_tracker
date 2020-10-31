import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    componentDidMount(){
        console.log(`habit:${this.props.habit.name} moundted`);
        //컴포넌트가 마운트 되서 보여질때
        //소켓 등을 초기화 하는 부분등에 사용
    }
    componentWillUnmount(){
        console.log(`habit:${this.props.habit.name} unmoundted`);
        //컴포넌트가 언마운트 되서 사라질때
        //정리하고 리소스를 지우는 부분에 사용
    }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    console.log(`habit: ${name}`);

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;