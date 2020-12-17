import React, { Component } from 'react';
import UserService from '../services/UserService';

class UserListComponent extends Component {

    constructor(props){

        super(props)

        this.state = {

            users : []

        }

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this); 

    }

    componentDidMount(){
        UserService.getUsers().then((res) =>{
            this.setState({ users : res.data });
        })
    }

    addUser() {
        this.props.history.push('/add-user/-1');
    }

    editUser(userId) {
        this.props.history.push(`/add-user/${userId}`);
    }

    deleteUser(userId) {

        UserService.deleteUserById(userId).then( (res) =>
        
        this.setState({users : this.state.users.filter(user => user.userId !== userId) })
        
        )

    }



    render() {
        return (
            <div>
                <br></br>
                <h2 className="text-center"> Users List </h2>
                <div className = "row">
                    <button className = "btn btn-primary" onClick = {this.addUser}> Add User </button>
                </div>
                <br></br>


                 <div className = "row">

                    <table className = "table table-striped table bordered">

                        <thead>
                            <tr>
                                <th> User Name </th>
                                <th> User Password </th>
                                <th> User Age </th>
                                <th> Actions </th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                this.state.users.map(
                                    user => 
                                    <tr key = {user.userId}>
                                        <td>{user.userName}</td>
                                        <td>{user.userPassword}</td>
                                        <td>{user.userAge}</td>
                                        <td>
                                            <button onClick = { () => this.editUser(user.userId) } className = "btn btn-info" >Update</button>

                                            <button style = {{marginLeft : "10px"}} onClick = { () => this.deleteUser(user.userId) } className = "btn btn-danger" >Delete</button>
                                        </td>

                                    </tr>
                                )
                            }

                        </tbody>

                    </table>


                </div> 
            </div>
        );
    }
}

export default UserListComponent;