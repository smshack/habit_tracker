import React, { memo } from 'react';

const HabitAddForm = memo(props=>{
    const inputRef = React.createRef();
    const formRef =React.createRef();
    console.log('habitAddForm');

    const onSubmit =event =>{
        event.preventDefault(); //값을 전달할 경우 페이지가 넘어가는 걸 막아준다
        const name=inputRef.current.value;
        name && props.onAdd(name); //name의 값이 비어있지 않다면 onAdd로 name을 전달해 준다
        //inputRef.current.value=''; //값을 입력해 주고 난후 값을 input 의 값을 초기화 시켜준다
        formRef.current.reset();
    };
    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
            <button className="add-button">Add</button>
        </form>
    );    
});



export default HabitAddForm;