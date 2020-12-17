import React, { Component } from 'react';
import TicketService from '../services/TicketService';
//import logo from "../images/Movie.jpg";
import logo from "../images/Movies_Coverart.jpg";
import MovieService from '../services/MovieService';
import CreateMovieComponent from './CreateMovieComponent';
import CreateTicketComponent from './CreateTicketComponent';
import CarouselInfo from './CarouselInfo';

class TicketListComponent extends Component {


    constructor(props){

        super(props)

        this.state = {

            movies : [],
            createMovieFlag : false,
            createMovieBody : ""

        }

        // this.addMovie = this.addMovie.bind(this);
        // this.editMovie = this.editMovie.bind(this);
        // this.deleteMovie = this.deleteMovie.bind(this); 

    }

    componentDidMount(){
        MovieService.getMovies().then((res) =>{
            this.setState({ movies : res.data });
        })
    }

    bookTicket = (movieId) =>
    {
        //this.props.history.push("/book-ticket");
        let bookBody = <CreateTicketComponent movieId = {movieId} />;
        this.setState({createMovieFlag : true, createMovieBody : bookBody})
    }

    render() {

        

        return (
            
        

            

            

            <div>
                <br></br>
                
            
            
            {
                

                this.state.createMovieFlag?(
                   this.state.createMovieBody
                ):(
                    <div>

                        <CarouselInfo />
                    
                    
                    <br></br>
                    <h2 className="text-center"> Movies List </h2>
                    <div className = "row">
         
                    </div>
                    <br></br>
        
        
                    <div className="container">
                            <div className = "row">
                                {
                                    this.state.movies.map((movie) => (
                                        <div className="col-md-3 col-sm-6 my-2" key={movie.movieId}>
                                        <div className="card"  style={{border : 2 + 'px solid black'}}>
                                            <img className="card-img-top" src={logo}></img>
                                            <div className="card-body  bg-secondary" >
                                                <h1 className="card-title">{movie.movieName}</h1>
                                            
                                                <h4>Rating : {movie.rating}</h4>
                                                <h4>Time Slot : {movie.timeSlot}</h4>
                                                <h4>Available Number Of Tickets : {movie.availableNoOfTickets}</h4>
                                               
                                                <button onClick = { () => this.bookTicket(movie.movieId) } className = "btn btn-info" >Book</button>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }
           
            </div>
        );
    }
}

export default TicketListComponent;

