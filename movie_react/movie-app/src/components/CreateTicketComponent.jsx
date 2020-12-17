import React, { Component } from 'react';
import TicketService from '../services/TicketService';
import MovieService from '../services/MovieService';
import UserService from '../services/UserService';
import {connect} from 'react-redux';
import TicketListComponent from './TicketListComponent';

class CreateTicketComponent extends Component {


    constructor(props){

        super(props)

        this.state = {

            movieId : this.props.movieId,
            noOfTickets : ''

        }

        this.changeNoOfTicketsHandler = this.changeNoOfTicketsHandler.bind(this);

        this.bookTicket = this.bookTicket.bind(this);

    }

    changeNoOfTicketsHandler = (event) => {
        this.setState({ noOfTickets : event.target.value })
    } 

    bookTicket = (e) =>
    {
        e.preventDefault();

        let user = UserService.getUserByUserName(this.props.userName);
        let movie = MovieService.getMovieById(this.state.movieId)

        let ticket = {userId : user.userId, movieId : this.state.movieId, noOfTickets : this.state.noOfTickets, totalCost : this.state.noOfTickets*150, timeSlot : movie.timeSlot};
        
        console.log('ticket =>' + JSON.stringify(ticket));

       /*  let bookedTicket = ; */
        console.log(TicketService.createTicket(ticket));
        //window.location.href="/";

        // TicketService.createTicket(ticket).then(res => {
        //     <TicketListComponent />
        // });

    }

    cancel() {
        this.props.history.push('/');
    }


    render() {
        return (
 <div>
                <br></br>
                <br></br>
                <br></br>
                <div className = "container" >
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3" style={{"background-color" : "#D3C8BB"}}>
                            <h2>Booking</h2>
                            <div className = "card-body" >
                                <form>
                                    <div className = "form-group">
                                        <label> Number Of Tickets : </label>
                                        <input placeholder = "Number Of Tickets" name = "noOfTickets" className = "form-control" 
                                            value = {this.state.noOfTickets} onChange = {this.changeNoOfTicketsHandler} />
                                    </div>

                                    <div className = "form-group">
                                        <label> totalCost : </label>
                                        <h3>{this.state.noOfTickets*150}</h3>
                                    </div>


                                    <button className = "btn btn-success" onClick = {this.bookTicket} >Book</button>
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

const mapStatetoProps = state => (
    {
       // userId: state.user.userId,
        userName: state.user.userName
    }
)

connect(mapStatetoProps)(CreateTicketComponent);

export default CreateTicketComponent;