package com.manipal.exception;

import java.time.LocalDateTime;

public class ExceptionResponse {

	private String message;
	private LocalDateTime timeStamp;

	public ExceptionResponse(String message, LocalDateTime timeStamp) {
		super();
		this.message = message;
		this.timeStamp = timeStamp;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public LocalDateTime getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(LocalDateTime timeStamp) {
		this.timeStamp = timeStamp;
	}

	public ExceptionResponse() {
	}

}
