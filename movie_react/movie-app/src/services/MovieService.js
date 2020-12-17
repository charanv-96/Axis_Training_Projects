import axios from 'axios';

const movies_url = "http://localhost:8765/movie-service/movie-service/movie"

class MovieService {

    getMovies(){
        return axios.get(movies_url);
    }

    createMovie(movie) {
        return axios.post(movies_url, movie);
    }

    getMovieById(movieId)
    {
        return axios.get("http://localhost:8765/movie-service/movie-service/movieId/" + movieId + "/movie");
    }

    updateMovie(movie, movieId){
        return axios.put("http://localhost:8765/movie-service/movie-service/movie/" + movieId, movie);
    }

    deleteMovieById(movieId)
    {
        return axios.delete("http://localhost:8765/movie-service/movie-service/movieId/" + movieId + "/movie");
    }



    

}

export default new MovieService();