import axios from 'axios';

const tickets_url = "http://localhost:8765/ticket-service/ticket-service/ticket"

class TicketService {

   async createTicket(ticket) {
       await axios.post(tickets_url, ticket).then(
            (res) =>
            {
                console.log(res.data)
                if(res.status ===200){
                    alert("Ticket Booked Successfully")
                    window.location.href = "/";
                }
                return res.data
            }

        ).catch((err) => {
            alert(err.message)
        })
    }

    getTicketsByUserId(userId)
    {
        return axios.get("http://localhost:8765/ticket-service/ticket-service/userId/" + userId + "/ticket").then(
            (res) =>
            {
                return res.data
            }
        );
    }

    deleteTicketById(ticketId)
    {
        return axios.delete("http://localhost:8765/ticket-service/ticket-service/cancel/" + ticketId + "/ticket");
    }

}


export default new TicketService();