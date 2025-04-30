import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./Components/TodoLists";
import AddTodo from "./Components/AddTodoList";
import EditTodo from "./Components/EditTodo";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
    </Router>
  );
}

export default App;
