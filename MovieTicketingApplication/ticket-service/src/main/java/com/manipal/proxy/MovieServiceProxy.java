package com.manipal.proxy;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.manipal.bean.Movie;
import com.manipal.bean.User;

@FeignClient(name = "zuul-api-gateway-server")
//@FeignClient(name = "movie-service")
@RibbonClient(name = "movie-service")
public interface MovieServiceProxy {
	
	@GetMapping("movie-service/movie-service/movieId/{movieId}/movie")
	public Movie getMovie(@PathVariable("movieId") int movieId);
	
	@GetMapping("movie-service/movie-service/movieName/{movieName}/movie")
	public Movie getMovieFromMovieName(@PathVariable("movieName") String movieName);
	
	@PutMapping("movie-service/movie-service/movieId/{movieId}/noOfTickets/{noOfTickets}")
	public Movie updateNoOfTickets(@PathVariable("movieId") int movieId, @PathVariable("noOfTickets") int noOfTickets);

	@PutMapping("movie-service/movie-service/add/movieId/{movieId}/noOfTickets/{noOfTickets}")
	public Movie updateNoOfTicketsAdd(@PathVariable("movieId") int movieId, @PathVariable("noOfTickets") int noOfTickets);

}
