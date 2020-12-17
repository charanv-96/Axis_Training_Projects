import React, { Component } from 'react';
import MovieService from '../services/MovieService';
//import logo from "../images/Movie.jpg";
import logo from "../images/Movies_Coverart.jpg";

class MovieListComponent extends Component {

    constructor(props){

        super(props)

        this.state = {

            movies : []

        }

        this.addMovie = this.addMovie.bind(this);
        this.editMovie = this.editMovie.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this); 

    }

    componentDidMount(){
        MovieService.getMovies().then((res) =>{
            this.setState({ movies : res.data });
        })
    }

    addMovie() {
        this.props.history.push('/add-movie/-1');
    }

    editMovie(movieId) {
        this.props.history.push(`/add-movie/${movieId}`);
    }

    deleteMovie(movieId) {

        MovieService.deleteMovieById(movieId).then( (res) =>
        
        this.setState({movies : this.state.movies.filter(movie => movie.movieId !== movieId) })
        
        )

    }



    render() {
        var count = 0;



        return (
            <div>
                <br></br>
                <h2 className="text-center"> Movies List </h2>
                <div className = "row">
                    <button className = "btn btn-primary" onClick = {this.addMovie}> Add Movie </button>
                </div>
                <br></br>

                <div className="container">
                    <div className = "row">
                        {
                            this.state.movies.map((movie) => (
                                <div className="col-md-3 col-sm-6 my-2" >
                                <div className="card" key={movie.movieId} style={{border : 2 + 'px solid black'}}>
                                    <img className="card-img-top" src={logo}></img>
                                    <div className="card-body bg-secondary">
                                        <h1 className="card-title">{movie.movieName}</h1>
                                    
                                        <h4>Rating : {movie.rating}</h4>
                                        <h4>Time Slot : {movie.timeSlot}</h4>
                                        <h4>Available Number Of Tickets : {movie.availableNoOfTickets}</h4>
                                        
                                        <button onClick = { () => this.editMovie(movie.movieId) } className = "btn btn-info" >Update</button>

                                        <button style = {{marginLeft : "10px"}} onClick = { () => this.deleteMovie(movie.movieId) } className = "btn btn-danger" >Delete</button>
                                    
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
                    {/* <table className = "table table-striped table bordered">

                        <thead>
                            <tr>
                                <th> Movie Name </th>
                                <th> Rating </th>
                                <th> Available Number Of Tickets </th>
                                <th> Time Slot </th>
                                <th> Actions </th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                this.state.movies.map(
                                    movie => 
                                    <tr key = {movie.movieId}>
                                        <td>{movie.movieName}</td>
                                        <td>{movie.rating}</td>
                                        <td>{movie.timeSlot}</td>
                                        <td>{movie.availableNoOfTickets}</td>
                                        <td>
                                            <button onClick = { () => this.editMovie(movie.movieId) } className = "btn btn-info" >Update</button>

                                            <button style = {{marginLeft : "10px"}} onClick = { () => this.deleteMovie(movie.movieId) } className = "btn btn-danger" >Delete</button>
                                        </td>

                                    </tr>
                                )
                            }

                        </tbody>

                    </table> */}


            </div>
        );
    }
}

export default MovieListComponent;