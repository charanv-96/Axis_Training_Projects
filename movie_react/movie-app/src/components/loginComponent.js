import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { getUser , userStatus } from "../actions/UserAction";
import MovieListComponent from './MovieListComponent'
import TicketListComponent from './TicketListComponent'
import UserListComponent from './UserListComponent'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import CreateMovieComponent from './CreateMovieComponent';
import CreateUserComponent from './CreateUserComponent';
import CreateTicketComponent from './CreateTicketComponent';
import MyTicketListComponent from './MyTicketListComponent'

class Login extends Component {

    state = {
        userDetails : {
            userName : "",
            password : ""
        },
        loggedUserDetails : {
            userName : "",
            password : ""
        },
        currentPage : "login"
    }

    componentDidMount() {
        //this.props.userStatus();
       this.setState({loggedUserDetails : JSON.parse(localStorage.getItem("loggedUser"))}) 
        console.log(this.state)
        console.log("Component Loaded..")

    }

    setValues = (e) => {
        this.setState((prevState, props) => ({
            userDetails: {
                ...prevState.userDetails,
                [e.target.name] : e.target.value
            },
        }));

        console.log(this.state.doctor)
    }

    login = ()=>{
        this.props.getUser(this.state.userDetails)
        this.setState({loggedUserDetails : JSON.parse(localStorage.getItem("loggedUser"))})
    }

    togglePage = (pagename) => {
       /*  window.location.href="/add-user/:userId" */
       this.setState({currentPage : pagename})
    }


    render()
    {
        let loggedIn = false;
       // let userName = this.props.userName;
       let userDetails = this.state.loggedUserDetails;
        if (userDetails !== null) {
            loggedIn = true
            console.log(this.props)
        }

        return (
            <div>

            { loggedIn ? (
                <div>
                <HeaderComponent />
                <div className="container">
                <Switch> 
                {/* <Route path = "/" exact component = {MovieListComponent}></Route> */}
                <Route path = "/movies" component = {MovieListComponent}></Route>
                <Route path = "/add-movie/:movieId" component = {CreateMovieComponent}></Route>
                <Route path = "/users" component = {UserListComponent}></Route>
                {/* <Route path = "/add-user/:userId" component = {CreateUserComponent}></Route> */}
                {/* <Route path = "/ticket" component = {TicketListComponent}></Route> */}
                <Route exact path = "/" component = {TicketListComponent}></Route>
                <Route path = "/book-ticket" component = {CreateTicketComponent}></Route>
                <Route path = "/my-tickets" component = {MyTicketListComponent}></Route>
              </Switch>
              </div>
              </div>
                //{/* <TicketListComponent /> */}
                
           
            ) : (
                <div>
                                                <br></br>
                            <br></br>
                {/*  <Switch>
                    <Route path = "/add-user/:userId" component = {CreateUserComponent}></Route>
                </Switch> */}
                {
                    (this.state.currentPage === "login")?
                    (
                        <center><div className="my-5 card" style={{width : 25 + 'rem',"background-color" : "#D3C8BB"}}>
                        <div className="card-body" >
                            <h5 className="card-title">Login</h5>
                            <form onSubmit={(e)=>{this.login();e.preventDefault()}} >
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        <label className="float-left font-weight-bold">Username:</label><br />
                                        <input type="text" name="userName" value={this.state.userName} onChange={this.setValues} className="form-control" placeholder="Enter your username" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        <label align="left" className="float-left font-weight-bold">Password:</label><br />
                                        <input type="password" name="password" className="form-control" onChange={this.setValues} placeholder="Enter your password" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-12">
                                    <button type="submit"  className="btn btn-primary my-2" style={{width : 100 + '%'}}>Login</button>
                                    <button type="submit" className="btn btn-info" style={{width : 100 + '%'}} onClick={()=>{this.togglePage("register")}}>Register</button>
                                    </div>
                                </div>
                            </form>

                        </div>

                        </div></center>
                    ):
                    (
                        <CreateUserComponent userId="-1" togglePage={this.togglePage}/>
                    )
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
                </div>
            )}
            
            </div>
        )
    }
}

//this.props.history.push("http://localhost:3001/movies")

const mapStatetoProps = state => (
    {
       // userId: state.user.userId,
        userName: state.user.userName
    }
)

export default connect(mapStatetoProps, { getUser , userStatus })(Login);
//export default Login;