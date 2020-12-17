package com.manipal.service;

import java.util.List;

import com.manipal.bean.User;

public interface UserService {
	
	public User getUserById(int userId);
	
	public User setUser(User user);
	
	public User getUserFromUserName(String userName);
	
	public String removeUser(int userId);
	
	public boolean login(String userName, String userPassword);
	
	public List<User> getAllUsers();
	
	public String deleteUsers();

}
