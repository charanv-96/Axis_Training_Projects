package com.manipal.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manipal.bean.Movie;
import com.manipal.exception.MovieNotFoundException;
import com.manipal.repository.MovieRepository;
import com.manipal.service.MovieService;

@Service
public class MovieServiceImpl implements MovieService{
	
	//static int movieIdCounter = 1;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Override
	public Movie getMovieById(int movieId) {
		
		return movieRepository.findById(movieId).orElseThrow(() -> new MovieNotFoundException("Movie Details not found for id " + movieId));
		
	}
	
	@Override
	public Movie setMovie(Movie movie) {
		
		//Movie movie = new Movie(movieName, rating, availableNoOfTickets);
		
		return movieRepository.save(movie);
		
	}
	
	@Override
	public Movie getMovieFromMovieName(String movieName) {
		
		return movieRepository.findByMovieName(movieName);
	}
	
	@Override
	public Movie updateNoOfTicketsOfMovie(int movieId, int noOfTickets) {
		
		Movie movie = movieRepository.findByMovieId(movieId);
		
		movie.setAvailableNoOfTickets(movie.getAvailableNoOfTickets()-noOfTickets);
		
		return movieRepository.save(movie);
		
	}
	
	@Override
	public String removeMovie(int movieId) {
		// TODO Auto-generated method stub
		movieRepository.deleteById(movieId);
		
		return "Movie removed successfully";
	}
	
	@Override
	public List<Movie> getAllMovies() {
		// TODO Auto-generated method stub
		return movieRepository.findAll();
	}
	
	@Override
	public String removeAllMovies() {
		// TODO Auto-generated method stub
		
		movieRepository.deleteAll();
		
		return "All movies removed";
	}

	@Override
	public Movie updateNoOfTicketsOfMovieAdd(int movieId, int noOfTickets) {
		// TODO Auto-generated method stub
		
		Movie movie = movieRepository.findByMovieId(movieId);
		
		movie.setAvailableNoOfTickets(movie.getAvailableNoOfTickets()+noOfTickets);
		
		return movieRepository.save(movie);
	}
	

}
