import React, { useEffect, useState } from "react";
import { getTodo, updateTodo } from "../services/todoService";
import { useParams, useNavigate } from "react-router-dom";

function EditTodo() {
    const [todo, setTodo] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchTodo();
    }, []);

    const fetchTodo = async () => {
        const response = await getTodo(id);
        setTodo(response.data);
    };

    const handleChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateTodo(id, todo);
        navigate("/");
    };

    return (
        <div>
            <h2>Edit Todo</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={todo.name || ""} onChange={handleChange} /><br />
                <textarea name="description" value={todo.description || ""} onChange={handleChange} /><br />
                <input type="date" name="dueDate" value={todo.dueDate || ""} onChange={handleChange} /><br />
                <select name="priority" value={todo.priority || ""} onChange={handleChange}>
                    <option>HIGH</option>
                    <option>MEDIUM</option>
                    <option>LOW</option>
                </select><br />
                <select name="status" value={todo.status || ""} onChange={handleChange}>
                    <option>PENDING</option>
                    <option>IN_PROGRESS</option>
                    <option>COMPLETED</option>
                </select><br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditTodo;
