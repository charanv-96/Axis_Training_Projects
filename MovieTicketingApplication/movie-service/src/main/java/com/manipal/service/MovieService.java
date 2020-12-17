package com.manipal.service;

import java.util.List;

import com.manipal.bean.Movie;

public interface MovieService {
	
	public Movie getMovieById(int movieId);
	
	public Movie setMovie(Movie movie);
	
	public Movie getMovieFromMovieName(String movieName);
	
	public Movie updateNoOfTicketsOfMovie(int movieId, int noOfTickets);
	
	public String removeMovie(int movieId);
	
	public List<Movie> getAllMovies();
	
	public String removeAllMovies();

	public Movie updateNoOfTicketsOfMovieAdd(int movieId, int noOfTickets);

}
