package com.manipal.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class TicketResponseEntityExceptionHandler extends ResponseEntityExceptionHandler{
	
	@ExceptionHandler(TicketNotFoundException.class)
	public ResponseEntity<ExceptionResponse> ticketNotFound(TicketNotFoundException exception) {
		
		ExceptionResponse exceptionResponse = new ExceptionResponse(exception.getMessage(), LocalDateTime.now());
		
		return new ResponseEntity(exceptionResponse, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(InvalidAgeException.class)
	public ResponseEntity<ExceptionResponse> invalidAge(InvalidAgeException exception) {
		
		ExceptionResponse exceptionResponse = new ExceptionResponse(exception.getMessage(), LocalDateTime.now());
		
		return new ResponseEntity(exceptionResponse, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(UserDetailsException.class)
	public ResponseEntity<ExceptionResponse> userDetailsNotFound(UserDetailsException exception) {
		
		ExceptionResponse exceptionResponse = new ExceptionResponse(exception.getMessage(), LocalDateTime.now());
		
		return new ResponseEntity(exceptionResponse, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<ExceptionResponse> userDetailsNotFound(UserNotFoundException exception) {
		
		ExceptionResponse exceptionResponse = new ExceptionResponse(exception.getMessage(), LocalDateTime.now());
		
		return new ResponseEntity(exceptionResponse, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(MovieNotFoundException.class)
	public ResponseEntity<ExceptionResponse> userDetailsNotFound(MovieNotFoundException exception) {
		
		ExceptionResponse exceptionResponse = new ExceptionResponse(exception.getMessage(), LocalDateTime.now());
		
		return new ResponseEntity(exceptionResponse, HttpStatus.NOT_FOUND);
	}



}
