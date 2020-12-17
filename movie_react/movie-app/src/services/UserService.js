import axios from 'axios';

const users_url = "http://localhost:8765/user-service/user-service/user"

class UserService {

    getUsers(){
        return axios.get(users_url);
    }

    createUser(user) {
        return axios.post(users_url, user);
    }

    getUserById(userId)
    {
        return axios.get("http://localhost:8765/user-service/user-service/userId/" + userId + "/user");
    }

    updateMovie(user, userId){
        return axios.put("http://localhost:8765/user-service/user-service/user/" + userId, user);
    }

    deleteUserById(userId)
    {
        return axios.delete("http://localhost:8765/user-service/user-service/userId/" + userId + "/user");
    }

    getUserByUserName(userName)
    {
        /*  axios.get("http://localhost:8765/user-service/user-service/userName/" + userName + "/user").then((res) =>{
             console.log(res.data)
             return res.data
         }) */
         return axios.get("http://localhost:8765/user-service/user-service/userName/" + userName + "/user").then( (res) => 
         {
             return res.data
         }
         )
    }

}

export default new UserService();