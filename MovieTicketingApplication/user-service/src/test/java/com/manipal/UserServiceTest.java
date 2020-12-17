package com.manipal;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.atLeastOnce;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.manipal.bean.User;
import com.manipal.repository.UserRepository;
import com.manipal.service.UserService;

@SpringBootTest
public class UserServiceTest {

	@InjectMocks
	UserService userService;

	@Mock
	private UserRepository userRepo;

	@Before
	public void init() {
		MockitoAnnotations.initMocks(this);
	}

	
	@Test
	public void getUserByIdTest() {		
		int userId = 4;
		User user = new User("charan", "v123", 24);
		//List<User> users = new ArrayList<>();
		//users.add(user);
		when(userRepo.findById(userId)).thenReturn(Optional.of(user));
		User expected = userService.getUserById(userId);
		assertEquals(user, expected);
		//assertSame("Sai", expected.get().getUserName());
	}
	
	@Test
	public void getUserFromUserNameTest(){
		
		String userName = "charan";
		User user = new User("charan", "v123", 24);
		//List<User> users = new ArrayList<>();
		//users.add(user);
		when(userRepo.findByUserName(userName)).thenReturn(user);
		User expected = userService.getUserFromUserName(userName);
		assertEquals(user, expected);
		
	}
	
	@Test
	public void setUserTest() {
		
		User user = new User("charan", "v123", 24);
		//userRepository.save(user);
		userService.setUser(user);
		//verify(userRepo, times(1)).save(user);
		verify(userRepo, atLeastOnce()).save(user);
		
	}
	
	@Test
	public void removeUserTest() {
		
		User user = new User("charan", "v123", 24);
		userService.removeUser(4);
		verify(userRepo, atLeastOnce()).deleteById(4);
		
	}
	
	@Test
	public void getAllUsers() {
		
	    List<User> users = new ArrayList<>();
	    users.add(new User("charan", "v123", 24));
	    users.add(new User("vallapaneni", "v123", 22));
	    users.add(new User("vivek", "v123", 12));
	    when(userRepo.findAll()).thenReturn(users);
		//List<Song> expected = songService.findAllSongs();
		assertEquals(3, userService.getAllUsers().size());
		
	}
	
	
	
}	