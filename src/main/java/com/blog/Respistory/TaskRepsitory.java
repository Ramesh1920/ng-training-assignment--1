package com.blog.Respistory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blog.Entity.Task;

public interface TaskRepsitory  extends JpaRepository<Task ,Long>{

}
