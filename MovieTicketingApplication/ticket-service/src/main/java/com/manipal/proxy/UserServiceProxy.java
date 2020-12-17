package com.manipal.proxy;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.manipal.bean.Movie;
import com.manipal.bean.User;

@FeignClient(name = "zuul-api-gateway-server")
//@FeignClient(name = "user-service")
@RibbonClient(name = "user-service")
public interface UserServiceProxy {
	
	@GetMapping("user-service/user-service/userId/{userId}/user")
	public User getUser(@PathVariable("userId") int userId);
	
	@GetMapping("user-service/user-service/userName/{userName}/user")
	public User getUserFromUserName(@PathVariable("userName") String userName);

}
