package com.example.service;

import java.util.List;
import java.util.Optional;

import com.example.model.Users;

public interface UserService {
      
	public List<Users> getUsers();
	
	public String saveUser(Users user);
	
	public String deleteUser(int id);
	
	public Users getUser(int userId);
	
}
