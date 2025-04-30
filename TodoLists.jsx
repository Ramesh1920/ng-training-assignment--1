import React ,{useEffect ,useState} from "react";
import {getTodos ,deleteTodo } from "../services/todoService";

function TodoList(){
    const [todos , setTodos] = useState([]);

    useEffect(()=>{
        fetchTodos();
    },[])

    const fetchTodos = async()=>{
        const response = await getTodos();
        setTodos(response.data);
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        fetchTodos();
    };

    return (
        <div>
            <h2>All Tasks</h2>
            <a href="/add">Add New Task</a>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.name}</td>
                            <td>{todo.description}</td>
                            <td>{todo.dueDate}</td>
                            <td>{todo.priority}</td>
                            <td>{todo.status}</td>
                            <td>
                                <a href={`/edit/${todo.id}`}>Edit</a> | 
                                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;