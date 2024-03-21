
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "../REDUX/Slices/TodoSlice";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { complete } from "../REDUX/Slices/completedSlice";

const Todo = () => {
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos);
    const lengthis = useSelector((state) => state.completedReducer.length)
    const completed = useSelector(state => state.completedReducer)
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleAddTodo = () => {
        if (text) {
            dispatch(addTodo(text));
            setText("");
        }
    };

    const handleToggleComplete = (id, todo) => {
        dispatch(toggleComplete(id));
        dispatch(complete(todo))
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className="container pt-5">

            <div className="ps-5 ms-5 " style={{ marginLeft: '60vw' }}>
                <Form.Group style={{ marginLeft: '25vw' }} className="mb-3 d-flex " controlId="formBasictodo">
                    <Form.Control value={text} onChange={handleInputChange} type="type" placeholder="Add Todo" className='w-25 me-3' />
                    <Button onClick={handleAddTodo} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </div>

            <ul>
                {todos.map((todo) => (
                    <li className="container px-5 d-flex justify-content-around py-4 "
                        key={todo.id}>
                        <span onClick={() => handleToggleComplete(todo.id, todo)} className='d-flex align-items-center'>
                            <input type='checkbox' className='mr-3' ></input>
                            {todo.text}
                        </span>
                        <button className="btn btn-danger" onClick={() => handleDeleteTodo(todo.id)}> Delete </button>
                    </li>
                ))}
            </ul>
            <div className='pt-5 container'>
                <ul>
                <h1>Total Completed Items:{lengthis}</h1>
                    {completed?.map((todo) => (
                        <div>
                            <li className="container px-5 d-flex justify-content-around py-4 "
                                key={todo.id}>
                                <span className='d-flex align-items-center'>
                                    <input type='checkbox' className='mr-3' ></input>
                                    {todo.text}
                                </span>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todo;