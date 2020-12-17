package com.manipal.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manipal.bean.User;
import com.manipal.repository.UserRepository;
import com.manipal.service.UserService;
import com.manipal.exception.UserNameNotAvailableException;
import com.manipal.exception.UserNotFoundException;

@Service
public class UserServiceImpl implements UserService{
	
	//static int userIdCounter = 1;
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User getUserById(int userId) {
		
		return userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("User Details not found for id " + userId));
		
		
	}
	
	@Override
	public User setUser(User user) {
		
		//User user = new User(userName, userPassword, userAge);
		
		//userIdCounter += 1;
		
		return userRepository.save(user);
		
	}
	
	@Override
	public User getUserFromUserName(String userName) {
		
		return userRepository.findByUserName(userName);
		
	}

	@Override
	public String removeUser(int userId) {
		// TODO Auto-generated method stub
		
		userRepository.deleteById(userId);
		
		return "user removed successfully";
	}

	@Override
	public boolean login(String userName, String userPassword) {
		// TODO Auto-generated method stub
		try
		{
			if(userRepository.findByUserName(userName).equals(null))
			{
				return false;
			}
			else {
				if(userRepository.findByUserName(userName).getUserPassword().equals(userPassword))
				{
					return true;
				}
				else {
					return false;
				}
			}
		}
		catch(Exception e) {
			throw new UserNameNotAvailableException("Invalid User Name");
		}


	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	@Override
	public String deleteUsers() {
		// TODO Auto-generated method stub
		
		userRepository.deleteAll();
		
		return "Removed all users";
	}

	
	
}
