package com.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Users;
import com.example.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {
     
	@Autowired
	private UserService service;
	
	
	@GetMapping("/userform")
	public List<Users> userform(){
		return service.getUsers();
	}
	
	@GetMapping("/editUser/{userId}")
	public ResponseEntity<Users> getUser(@PathVariable int userId) {
	    Users user = service.getUser(userId);
	    if (user != null) {
	        return ResponseEntity.ok(user);
	    } else {
	        return ResponseEntity.notFound().build(); // Return 404 if user not found
	    }
	}
	
	@PostMapping("/userform")
	public String addUser(@RequestBody Users user) {
		//TODO: process POST request
		String str=service.saveUser(user);
		
		return "str";
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteUser(@PathVariable int id) {
		
		String str=service.deleteUser(id);
		
		return "SUCCESS";
	}
	
	@PutMapping("/edit")
	public ResponseEntity<String> editUser(@RequestBody Users user) {
	    String response = service.saveUser(user);
	    return ResponseEntity.ok("SUCCESS");
	  }
	}
