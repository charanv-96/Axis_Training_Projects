import React, { Component } from 'react';
import MovieService from '../services/MovieService';

class CreateMovieComponent extends Component {

    constructor(props){

        super(props)

        this.state = {
            movieId : this.props.match.params.movieId,
            movieName : '',
            rating : '',
            timeSlot : '',
            availableNoOfTickets : ''

        }

        this.changeMovieNameHandler = this.changeMovieNameHandler.bind(this);
        this.changeRatingHandler = this.changeRatingHandler.bind(this);
        this.changeTimeSlotHandler = this.changeTimeSlotHandler.bind(this);
        this.changeAvailableNoOfTicketsHandler = this.changeAvailableNoOfTicketsHandler.bind(this);

        this.saveMovie = this.saveMovie.bind(this);

    }

    changeMovieNameHandler = (event) => {
        this.setState({ movieName : event.target.value })
    } 

    changeRatingHandler = (event) => {
        this.setState({ rating : event.target.value })
    } 

    
    changeTimeSlotHandler = (event) => {
        this.setState({ timeSlot : event.target.value })
    } 

    changeAvailableNoOfTicketsHandler = (event) => {
        this.setState({ availableNoOfTickets : event.target.value })
    } 

    saveMovie = (e) => {
        e.preventDefault();

        let movie = {movieName : this.state.movieName, rating : this.state.rating, timeSlot : this.state.timeSlot, availableNoOfTickets : this.state.availableNoOfTickets};
        console.log('movie =>' + JSON.stringify(movie));
        if (this.state.movieId == -1) {
            MovieService.createMovie(movie).then(res => {
                this.props.history.push('/movies');
            });
        }
        else {
            MovieService.updateMovie(movie, this.state.movieId).then( res => {
                this.props.history.push('/movies');
            })
        }

    
    }

    cancel() {
        this.props.history.push('/movies');
    }

    componentDidMount() {

        if (this.state.movieId == -1) {
            return
        }
        else {
            MovieService.getMovieById(this.state.movieId).then( (res) => {
                let movie = res.data;
                this.setState({movieName : movie.movieName, 
                    rating : movie.rating, 
                    timeSlot : movie.timeSlot, 
                    availableNoOfTickets : movie.availableNoOfTickets});
            });
        }

    }

    getTitle(){
        if(this.state.movieId == -1)
        {
            return <h3 className = "text-center"> Add Movie </h3>
        }
        else
        {
            return <h3 className = "text-center"> Update Movie </h3>
        }

    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Movie Name : </label>
                                        <input placeholder = "Movie Name" name = "movieName" className = "form-control" 
                                            value = {this.state.movieName} onChange = {this.changeMovieNameHandler} />
                                    </div>
                                    <div className = "form-group">
                                        <label> Rating : </label>
                                        <input placeholder = "U or A" name = "rating" className = "form-control" 
                                            value = {this.state.rating} onChange = {this.changeRatingHandler} />
                                    </div>
                                    <div className = "form-group">
                                        <label> Time Slot : </label>
                                        <input placeholder = "Time Slot" name = "timeSlot" className = "form-control" 
                                            value = {this.state.timeSlot} onChange = {this.changeTimeSlotHandler} />
                                    </div>
                                    <div className = "form-group">
                                        <label> Available Number Of Tickets : </label>
                                        <input placeholder = "Available Number Of Tickets" name = "availableNoOfTickets" className = "form-control" 
                                            value = {this.state.availableNoOfTickets} onChange = {this.changeAvailableNoOfTicketsHandler} />
                                    </div>

                                    <button className = "btn btn-success" onClick = {this.saveMovie} >Save</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft : "10px"}} >Cancel</button>
                                </form>
                            </div>

                        </div>

                    </div>

                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default CreateMovieComponent;