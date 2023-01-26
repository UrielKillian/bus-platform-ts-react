import http from "./http-common";

class TicketService {
  getAllTicket() {
    return http.get("/tickets");
  }
  getTicketByOne(id: any) {
    return http.get(`/tickets/${id}`);
  }
  getTicketByUser(id: any) {
    return http.get(`/tickets/user/${id}`);
  }
}

const ticketService = new TicketService();

export default ticketService;
