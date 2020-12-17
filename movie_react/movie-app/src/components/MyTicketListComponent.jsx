import React, { Component } from 'react';
import TicketService from '../services/TicketService';
import logo from "../images/Movie.jpg";
import MovieService from '../services/MovieService';
import UserService from '../services/UserService';
import CreateMovieComponent from './CreateMovieComponent';
import CreateTicketComponent from './CreateTicketComponent';

class MyTicketListComponent extends Component {


    constructor(props){

        super(props)

        this.state = {

            tickets : []

        }

        // this.addMovie = this.addMovie.bind(this);
        // this.editMovie = this.editMovie.bind(this);
        // this.deleteMovie = this.deleteMovie.bind(this); 

    }

    componentDidMount(){

        let userName = JSON.parse(localStorage.getItem("loggedUser")).userName
        UserService.getUserByUserName(userName).then((res) =>{
             console.log(res.data)
             TicketService.getTicketsByUserId(res.data.userId).then((res) =>{
                 console.log(res.data)
                 this.setState({ tickets : res.data });
             })
         })
        

       
    }

    cancelTicket = (ticketId) =>
    {
        TicketService.deleteTicketById(ticketId).then( (res) =>
        
        this.setState({tickets : this.state.tickets.filter(ticket => ticket.ticketId !== ticketId) })
        
        )
    }

    render() {

        

        return (

            <div>
            {

                // this.state.createMovieFlag?(
                //    this.state.createMovieBody
                // ):(
                    <div>
                    <br></br>
                    <h2 className="text-center"> Your Tickets </h2>
                    <div className = "row">
         
                    </div>
                    <br></br>
                    <br></br>
        
                    <div className="container">
                            <div className = "row">
                                {
                                    this.state.tickets.map((ticket) => (
                                        <div className="col-md-3 col-sm-6 my-2" key={ticket.ticketId}>
                                        <div className="card"  style={{border : 2 + 'px solid black'}}>
                                            <img className="card-img-top" src={logo}></img>
                                            <div className="card-body">
                                                <h3 className="card-title">Ticket Id : {ticket.ticketId}</h3>
                                            
                                                <h4>Number of Tickets : {ticket.noOfTickets}</h4>
                                                <h4>Time Slot : {ticket.timeSlot}</h4>
                                                <h4>Total Cost : {ticket.totalCost}</h4>
                                                <td>
                                                    <button onClick = { () => this.cancelTicket(ticket.ticketId) } className = "btn btn-info" >Cancel</button>
                                                </td>
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                
            }
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
           <br></br>

            </div>
        );
    }
}

export default MyTicketListComponent;

