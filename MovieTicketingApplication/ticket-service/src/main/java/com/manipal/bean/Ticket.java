package com.manipal.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Ticket {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ticketId;
	private int userId;
	private int movieId;
	private int noOfTickets;
	private double totalCost;
	private String timeSlot;
	
	

	public String getTimeSlot() {
		return timeSlot;
	}

	public void setTimeSlot(String timeSlot) {
		this.timeSlot = timeSlot;
	}

	public int getTicketId() {
		return ticketId;
	}

	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getMovieId() {
		return movieId;
	}

	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}

	public int getNoOfTickets() {
		return noOfTickets;
	}

	public void setNoOfTickets(int noOfTickets) {
		this.noOfTickets = noOfTickets;
	}

	public double getTotalCost() {
		return totalCost;
	}

	public void setTotalCost(double totalCost) {
		this.totalCost = totalCost;
	}

	public Ticket(int userId, int movieId, int noOfTickets, double totalCost, String timeSlot) {
		super();
		//this.ticketId = ticketId;
		this.userId = userId;
		this.movieId = movieId;
		this.noOfTickets = noOfTickets;
		this.totalCost = totalCost;
		this.timeSlot = timeSlot;
	}

	public Ticket() {
	}

}
