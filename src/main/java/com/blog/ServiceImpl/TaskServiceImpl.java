package com.blog.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.blog.Entity.Task;
import com.blog.Respistory.TaskRepsitory;
import com.blog.Service.TaskService;

public class TaskServiceImpl implements TaskService {
	
	@Autowired
	private TaskRepsitory repo;

	//create the Task
	@Override
	public Task createTask(Task task) {
		Task create_task =repo.save(task);
		return create_task;
	}
	
	
	
	//get details of task through id
	@Override
	public Task getTaskById(Long id) { 
		return repo.findById(id).orElseThrow(()-> new RuntimeException("Id not found"));
	}

	
	//get all tasks
	@Override
	public List<Task> getAllTasks() {
		List<Task> task = repo.findAll();
		return task;
	}

	//update the task
	@Override
	public Task updateTheTask(Long id, Task task) {
		Task tasks = getTaskById(id);
		tasks.setDescription(task.getDescription());
		tasks.setDueDate(task.getDueDate());
		tasks.setPriority(task.getPriority());
		tasks.setStatus(task.getStatus());
		tasks.setName(task.getName());
		return repo.save(tasks);
	}
	
	//delete the task
	@Override
	public void deleteTask(Long id) {
		Task task = getTaskById(id);
		repo.delete(task);
	}

}
