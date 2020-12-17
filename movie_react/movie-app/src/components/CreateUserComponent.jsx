import React, { Component } from 'react';
import UserService from '../services/UserService';

class CreateUserComponent extends Component {

    constructor(props){

        super(props)

        this.state = {
            userId : this.props.userId,
            userName : '',
            userPassword : '',
            userAge : ''

        }

        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeUserPasswordHandler = this.changeUserPasswordHandler.bind(this);
        this.changeUserAgeHandler = this.changeUserAgeHandler.bind(this);

        this.saveUser = this.saveUser.bind(this);

    }

    changeUserNameHandler = (event) => {
        this.setState({ userName : event.target.value })
    } 

    changeUserPasswordHandler = (event) => {
        this.setState({ userPassword : event.target.value })
    } 

    
    changeUserAgeHandler = (event) => {
        this.setState({ userAge : event.target.value })
    } 

    saveUser = (e) => {
        e.preventDefault();

        let user = {userName : this.state.userName, userPassword : this.state.userPassword, userAge : this.state.userAge};
        console.log('user =>' + JSON.stringify(user));
        if (this.state.userId == -1) {
            UserService.createUser(user).then(res => {
                alert("Registration Successfull")
                this.props.togglePage("login");
            });
        }
        else {
            UserService.updateUser(user, this.state.userId).then( res => {
                //this.props.history.push('/');
            })
        }

    
    }

    cancel() {
        this.props.history.push('/');
    }

    componentDidMount() {

        if (this.state.userId == -1) {
            return
        }
        else {
            UserService.getUserById(this.state.userId).then( (res) => {
                let user = res.data;
                this.setState({userName : user.userName, 
                    userPassword : user.userPassword, 
                    userAge : user.userAge});
            });
        }

    }

    getTitle(){
        if(this.state.userId == -1)
        {
            return <h3 className = "text-center"> Add User </h3>
        }
        else
        {
            return <h3 className = "text-center"> Update User </h3>
        }

    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3" style={{"background-color" : "#D3C8BB"}}>
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> User Name : </label>
                                        <input placeholder = "User Name" name = "userName" className = "form-control" 
                                            value = {this.state.userName} onChange = {this.changeUserNameHandler} />
                                    </div>
                                    <div className = "form-group">
                                        <label> User Password : </label>
                                        <input placeholder = "Alpha Numeric Password" name = "userPassword" className = "form-control" 
                                            value = {this.state.userPassword} onChange = {this.changeUserPasswordHandler} />
                                    </div>
                                    <div className = "form-group">
                                        <label> User Age : </label>
                                        <input placeholder = "Enter Age" name = "userAge" className = "form-control" 
                                            value = {this.state.userAge} onChange = {this.changeUserAgeHandler} />
                                    </div>

                                    <button className = "btn btn-success" onClick = {this.saveUser} >Register</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft : "10px"}} >Cancel</button>
                                </form>
                            </div>

                        </div>

                    </div>

                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default CreateUserComponent;