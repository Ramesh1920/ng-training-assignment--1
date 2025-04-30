import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getAllTasks =()=>axios.get(API_URL/"tasks");
export const getTaskById =(id)=>axios.get(`${API_URL}/task/${id}`);
export const createTask=(Task)=> axios.post(API_URL/"task",Task);
export const updateTheTask = (id, Task) => axios.put(`${API_URL}/task/${id}`, Task);
export const deleteTask = (id) => axios.delete(`${API_URL}/task/${id}`);
