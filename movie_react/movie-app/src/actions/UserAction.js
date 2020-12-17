import axios from 'axios'

export const getUser = (userDetails) => async dispatch => {
    try {
        console.log("Get user started")
        console.log(JSON.stringify(userDetails))

        if(userDetails.userName === "admin" && userDetails.password === "admin")
        {
            localStorage.setItem("loggedUser" , JSON.stringify(userDetails))
        }
        else{
        axios.get('http://localhost:8765/user-service/user-service/login/'+userDetails.userName +'/' + userDetails.password).then(res => {
            console.log(res)
            if(res.data === true)
            {
                localStorage.setItem("loggedUser" , JSON.stringify(userDetails))
                dispatch(
                    {
                        type: "GET_USER",
                        pload: userDetails
                    })
            }
            else{
                alert("Invalid Login Credentials")
            }
        
        })
    }

    } catch (error) {
        console.log(error);
    }

}

export const userStatus = () => async dispatch => {
    try {
        console.log("User Status started")
        dispatch(
            {
                type: "USER_STATUS"
            })

    } catch (error) {
        console.log(error);
    }

}