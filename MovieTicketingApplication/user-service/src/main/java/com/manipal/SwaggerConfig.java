package com.manipal;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RestController;

import com.manipal.controller.UserController;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.withClassAnnotation(RestController.class))
				.paths(PathSelectors.any())
				.build();
				//.apiInfo(apiInfo());
	}
/*
 private ApiInfo apiInfo() {
return new ApiInfo(
"Twitter Clone API",
"Performed Registration, Login and Tweet CRUD Operations on MySQL DB Using Spring Boot",
"Version 1.0",
"Terms of service",
new Contact("Param Attri", "https://paramattri.github.io/Portfolio/", "attri.param@gmail.com"),
"License of API", "API license URL", Collections.emptyList());
}
*/
}