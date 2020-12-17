package com.manipal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.manipal.bean.Ticket;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Integer> {

	Ticket deleteByTicketId(int ticketId);
	
	@Query(value = "SELECT * FROM TICKET WHERE USER_ID = ?1", nativeQuery = true)
	List<Ticket> findAllByUserId(int userId);

}
