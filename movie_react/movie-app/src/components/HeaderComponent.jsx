import React, { Component } from 'react';
import logo from "../images/mta-logo-scaled.jpeg";

class HeaderComponent extends Component {

    constructor(props){

        super(props)

        this.state = {

        }

    }

    logout = ()=>{
        localStorage.removeItem("loggedUser")
        window.location.href="/"
    }

    MyTickets = () => {
        window.location.href="/my-tickets"
    }

    Movies = () => {
        window.location.href="/movies"
    }

    render() {

        let user = JSON.parse(localStorage.getItem("loggedUser"))

        return (
            <div>
                {
                   (user !== null && user.userName === "admin")?(
                        <div>
                        <header>
                            <nav className="navbar navbar-light" style={{"background-color": "#A39787"}} >
                                
                                <div><a href="/" className="navbar-brand"><b>Movie Ticketing App : Admin Panel</b></a></div>
                                <ul className="navbar-nav" >
                                    <li className="nav-item" style={{position: 'absolute', left : 400, top : 5}}>
                                        <button className="nav-link btn btn-outline-success" onClick={()=>{this.Movies()}}><b>Movies</b></button>
                                    </li>

                                    <li className="nav-item" style={{position: 'absolute', right: 10, top : 5}}>
                                        <button className="nav-link btn btn-outline-info" onClick={()=>{this.logout()}}><b>Logout</b></button>
                                    </li>
                                </ul>
        
                            </nav>
                        </header>
                        </div>
                    ):(
                <div>
                <header>
                    <nav className="navbar navbar-light" style={{"background-color": "#A39787"}} >
                        
                        <div><a href="/" className="navbar-brand"><b>Movie Ticketing App</b></a></div>
                        <ul className="navbar-nav" >
                             <li className="nav-item"  style={{position: 'absolute', left : 250, top : 5}}>
                                <button className="nav-link btn btn-outline-success" onClick={()=>{this.MyTickets()}}><b>My Tickets</b></button>
                            </li> 

                            <li className="nav-item" style={{position: 'absolute', right: 10, top : 5}}>
                                <button className="nav-link btn btn-outline-info" onClick={()=>{this.logout()}}><b>Logout</b></button>
                            </li>

                        </ul>

                    </nav>
                </header>
                </div>
                    )
                }
            </div>

           
            
        );
    }
}

export default HeaderComponent;