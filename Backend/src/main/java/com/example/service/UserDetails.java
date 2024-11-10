package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Users;
import com.example.repo.UserRepo;

@Service
public class UserDetails implements UserService {
     
	@Autowired
	private UserRepo repo;
	

	@Override
	public List<Users> getUsers() {
		// TODO Auto-generated method stub
		return (List<Users>) repo.findAll();
	}


	@Override
	public String saveUser(Users user) {
		
		repo.save(user);
		return "SUCCESS";
	}


	@Override
	public String deleteUser(int id) {
		
		repo.deleteById(id);
		
		return "SUCCESS";
	}

	@Override
	public Users getUser(int userId) {
	    return repo.findById(userId).orElse(null); // Return null if user not found
	}

}
