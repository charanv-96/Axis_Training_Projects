package com.manipal.service;

import java.util.List;

import com.manipal.bean.Ticket;

public interface TicketService {
	
	public Ticket getTicketById(int ticketId);
	
	public Ticket bookTicket(String userName, String movieName, int noOfTickets);
	
	public double calculateTotalTicketCost(int noOfTickets);
	
	public String cancelTicket(int ticketId);
	
	public String deleteTickets();
	
	public List<Ticket> getAllTickets(); 
	
	public Ticket setTicket(Ticket ticket) ;
	
	public List<Ticket> getTicketsByUserId(int userId);

}
