package com.manipal;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.atLeastOnce;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.manipal.bean.Movie;
import com.manipal.bean.Ticket;
import com.manipal.repository.TicketRepository;
import com.manipal.service.TicketService;

@SpringBootTest
public class TicketServiceTest {
	
	@InjectMocks
	TicketService ticketService;

	@Mock
	private TicketRepository ticketRepo;

	@Before
	public void init() {
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	public void getTicketByIdTest(){
		
		int ticketId = 9;
		Ticket ticket = new Ticket(7, 3, 450, 4, "10:00 AM");
		//List<User> users = new ArrayList<>();
		//users.add(user);
		when(ticketRepo.findById(ticketId)).thenReturn(Optional.of(ticket));
		Ticket expected = ticketService.getTicketById(ticketId);
		assertEquals(ticket, expected);
		//assertSame("Sai", expected.get().getUserName());
		
	}

	@Test
	public void cancelTicketTest(){
		
		Ticket ticket = new Ticket(7, 3, 450, 4, "10:00 AM");
		ticketService.cancelTicket(9);
		verify(ticketRepo, atLeastOnce()).deleteById(9);
		
	}
	


}
