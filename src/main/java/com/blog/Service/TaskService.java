package com.blog.Service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.blog.Entity.Task;


@Service
public interface TaskService {

	Task createTask(Task task);

	List<Task> getAllTasks();

	Task updateTheTask(Long id, Task task);

	Task getTaskById(Long id);

	void deleteTask(Long id);
	

}
