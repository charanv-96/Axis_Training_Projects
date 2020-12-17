package com.manipal;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.manipal.bean.User;
import com.manipal.controller.UserController;
import com.manipal.service.impl.UserServiceImpl;

@WebMvcTest(UserController.class)
public class UserControllerTest {

	@Autowired
	 MockMvc mvc;
	 
	 @MockBean
	 private UserServiceImpl userService;
	 
	 @Test
	 void checkDetailsTest() throws Exception {
	 ObjectMapper objectMapper = new ObjectMapper();
	 User user = new User("charan", "v123", 24);
	 mvc.perform(MockMvcRequestBuilders
	 .get("/user-service/user")
	 .content(objectMapper.writeValueAsString(user))
	 .accept(MediaType.APPLICATION_JSON)
	 .contentType(MediaType.APPLICATION_JSON))
	 .andExpect(status().isOk());
	 }
	 
	 @Test
	 void addDetailsTest() throws Exception {
	 ObjectMapper objectMapper = new ObjectMapper();
	 User user = new User("charan", "v123", 24);
	 mvc.perform(post("/user-service/user")
	 .content(objectMapper.writeValueAsString(user))
	 .accept(MediaType.APPLICATION_JSON)
	 .contentType(MediaType.APPLICATION_JSON))
	 .andDo(print())
	 .andExpect(status().isOk());
	 }
	 
	 @Test
	 void deleteDetailsTest() throws Exception {
	 ObjectMapper objectMapper = new ObjectMapper();
	 User user = new User("charan", "v123", 24);
	 mvc.perform(MockMvcRequestBuilders
	 .delete("/user-service/users")
	 .content(objectMapper.writeValueAsString(user))
	 .accept(MediaType.APPLICATION_JSON)
	 .contentType(MediaType.APPLICATION_JSON))
	 .andDo(print())
	 .andExpect(status().isOk());
	 }
	
	
}
