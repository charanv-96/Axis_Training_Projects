package com.manipal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.manipal.bean.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {
	
	Movie findByMovieName(String movieName);
	
	Movie findByMovieId(int movieId);

}
