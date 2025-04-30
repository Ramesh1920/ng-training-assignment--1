import React, { useState } from "react";
import { createTodo } from "../services/todoService";
import { useNavigate } from "react-router-dom";

function AddTodo() {
    const [todo, setTodo] = useState({
        name: "",
        description: "",
        dueDate: "",
        priority: "MEDIUM",
        status: "PENDING"
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTodo(todo);
        navigate("/");
    };

    return (
        <div>
            <h2>Add Todo</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="name" onChange={handleChange} required /><br />
                <textarea name="description" placeholder="Description" onChange={handleChange} required /><br />
                <input type="date" name="dueDate" onChange={handleChange} required /><br />
                <select name="priority" onChange={handleChange}>
                    <option>HIGH</option>
                    <option>MEDIUM</option>
                    <option>LOW</option>
                </select><br />
                <select name="status" onChange={handleChange}>
                    <option>PENDING</option>
                    <option>IN_PROGRESS</option>
                    <option>COMPLETED</option>
                </select><br />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddTodo;
