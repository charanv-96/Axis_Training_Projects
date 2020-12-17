package com.manipal;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.atLeastOnce;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.manipal.bean.Movie;
import com.manipal.repository.MovieRepository;
import com.manipal.service.MovieService;

@SpringBootTest
public class MovieServiceTest {
	
	@InjectMocks
	MovieService movieService;

	@Mock
	private MovieRepository movieRepo;

	@Before
	public void init() {
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	public void getMovieByIdTest(){
		
		int movieId = 7;
		Movie movie = new Movie("avengers", "A", 120, "10:00 AM");
		//List<User> users = new ArrayList<>();
		//users.add(user);
		when(movieRepo.findById(movieId)).thenReturn(Optional.of(movie));
		Movie expected = movieService.getMovieById(movieId);
		assertEquals(movie, expected);
		//assertSame("Sai", expected.get().getUserName());
		
		
	}
	
	@Test
	public void getMovieFromMovieName(){
		
		String movieName = "avengers";
		Movie movie = new Movie("avengers", "A", 120, "10:00 AM");
		//List<User> users = new ArrayList<>();
		//users.add(user);
		when(movieRepo.findByMovieName(movieName)).thenReturn(movie);
		Movie expected = movieService.getMovieFromMovieName(movieName);
		assertEquals(movie, expected);
		
	}

	@Test
	public void setMovieTest(){
		
		Movie movie = new Movie("avengers", "A", 120, "10:00 AM");
		//userRepository.save(user);
		movieService.setMovie(movie);
		//verify(userRepo, times(1)).save(user);
		verify(movieRepo, atLeastOnce()).save(movie);
		
	}

	@Test
	public void removeMovieTest(){
		
		Movie movie = new Movie("avengers", "A", 120, "10:00 AM");
		movieService.removeMovie(7);
		verify(movieRepo, atLeastOnce()).deleteById(7);
		
	}
/*	
	@Test
	public void updateNoOfTicketsTest(){
		int movieId = 7; 
		int noOfTickets = 2;
		Movie movie = new Movie("avengers", "A", 118);
		//List<User> users = new ArrayList<>();
		//users.add(user);
		when(movieRepo.save(movie)).thenReturn(movie);
		Movie expected = movieService.updateNoOfTicketsOfMovie(movieId, noOfTickets);
		assertEquals(movie, expected);
		
	}
*/
	@Test
	public void getAllMoviesTest(){
		
	    List<Movie> movies = new ArrayList<>();
	    movies.add(new Movie("avengers", "A", 120, "10:00 AM"));
	    movies.add(new Movie("hitch", "U", 120, "12:30 PM"));
	    movies.add(new Movie("300", "A", 120, "3:30 PM"));
	    movies.add(new Movie("dark knight", "A", 120, "6:30 PM"));
	    when(movieRepo.findAll()).thenReturn(movies);
		//List<Song> expected = songService.findAllSongs();
		assertEquals(4, movieService.getAllMovies().size());
		
	}

}
