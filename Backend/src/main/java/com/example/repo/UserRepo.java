package com.example.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Users;

@Repository
public interface UserRepo extends CrudRepository<Users, Integer> {

}
