package com.manipal.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manipal.bean.Ticket;
import com.manipal.bean.User;
import com.manipal.bean.Movie;
import com.manipal.exception.InvalidAgeException;
import com.manipal.exception.MovieNotFoundException;
import com.manipal.exception.TicketNotFoundException;
import com.manipal.exception.UserDetailsException;
import com.manipal.exception.UserNotFoundException;
import com.manipal.proxy.MovieServiceProxy;
import com.manipal.proxy.UserServiceProxy;
import com.manipal.repository.TicketRepository;
import com.manipal.service.TicketService;

import io.swagger.annotations.ApiOperation;

@Service
public class TicketServiceImpl implements TicketService{
	
	//static int ticketIdCounter = 0;
	
	@Autowired
	private TicketRepository ticketRepository;
	
	@Autowired
	private MovieServiceProxy movieServiceProxy;
	
	@Autowired
	private UserServiceProxy userServiceProxy;
	
	@Override
	public Ticket getTicketById(int ticketId) {
		
		return ticketRepository.findById(ticketId).orElseThrow(() -> new TicketNotFoundException("Ticket Details not found for id " + ticketId));
		
	}
	
	@Override
	public Ticket bookTicket(String userName, String movieName, int noOfTickets) {
		
		Ticket ticket = new Ticket();

		try {
			
			User user = userServiceProxy.getUserFromUserName(userName);
			
			Movie movie = movieServiceProxy.getMovieFromMovieName(movieName);
			
			if (movie.getRating().equals("A")) {
				if(user.getUserAge()<18) {
					throw new InvalidAgeException("Too young to watch this movie");
				}
			}
			

			
			//ticket.setTicketId(ticketIdCounter);
			ticket.setMovieId(movie.getMovieId());
			ticket.setUserId(user.getUserId());
			ticket.setNoOfTickets(noOfTickets);
			ticket.setTotalCost(calculateTotalTicketCost(noOfTickets));
			ticket.setTimeSlot(movie.getTimeSlot());
			
			movieServiceProxy.updateNoOfTickets(movie.getMovieId(), noOfTickets);
			
			
			
		}catch(UserNotFoundException unfe) {
			throw new UserNotFoundException("User details not found for " + userName);
		}catch(MovieNotFoundException mnfe) {
			throw new MovieNotFoundException("Movie details not found for " + movieName);
		}catch(InvalidAgeException iae) {
			throw new InvalidAgeException("Too young to watch this movie");
		}catch(Exception e) {
			throw new UserDetailsException("User or movie details not found");
		}
		
		

		return ticketRepository.save(ticket);

		
		//System.out.println(movie.getAvailableNoOfTickets());
		

			
	}
	
	@Override
	public double calculateTotalTicketCost(int noOfTickets) {
		
		return noOfTickets*150;
		
	}
	
	@Override
	public String cancelTicket(int ticketId) {
		// TODO Auto-generated method stub
		/*
		Object ticket = ticketRepository.findById(ticketId);
		
		Ticket ticketObject = (Ticket) ticket;
		
		movieServiceProxy.updateNoOfTicketsAdd(ticketObject.getMovieId(), ticketObject.getNoOfTickets());
		*/
		ticketRepository.deleteById(ticketId);
		
		return "Successfully cancelled ticket";
		
	}
	
	@Override
	public String deleteTickets() {
		// TODO Auto-generated method stub
		
		ticketRepository.deleteAll();
		
		return "Successfully deleted all tickets";
	}

	@Override
	public List<Ticket> getAllTickets() {
		// TODO Auto-generated method stub
		return ticketRepository.findAll();
	}

	@Override
	public Ticket setTicket(Ticket ticket) {
		// TODO Auto-generated method stub
		movieServiceProxy.updateNoOfTickets(ticket.getMovieId(), ticket.getNoOfTickets());
		return ticketRepository.save(ticket);
	}
	
	@Override
	public List<Ticket> getTicketsByUserId(int userId) {
		return ticketRepository.findAllByUserId(userId);
	}

}
