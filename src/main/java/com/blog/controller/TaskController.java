package com.blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.Entity.Task;
import com.blog.Service.TaskService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "https://localhost:3000")
public class TaskController {
	
	@Autowired
	private TaskService service;
	
	
	//create the Task
	@PostMapping("/task")
	public Task createTask(@RequestBody Task task) {
		Task tasks = service.createTask(task);
		return tasks;
		
	}
	
	
	//list get by Id
		@GetMapping("/{id}")
		public Task getTaskById(@PathVariable Long id) {
			Task task = service.getTaskById(id);
			return task;
			
		}
	
	
	//get all details of all tasks
	@GetMapping("/tasks")
	public List<Task> getAllTasks() {
		List<Task> task = service.getAllTasks();
		return task;
	}
	
	
	//update the task
	@PutMapping("/task/{id}")
	public Task updateTheTask(@PathVariable Long id ,@RequestBody Task task) {
		Task tasks = service.updateTheTask(id ,task);
		return tasks;
		
	}
	
	//Delete the task
	@DeleteMapping("/task/{id}")
	public void deleteTask(@PathVariable Long id) {
		service.deleteTask(id);
			
	}
}
