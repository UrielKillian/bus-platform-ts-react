import http from "./http-common";

class TicketService {
  getAllTicket() {
    return http.get("/tickets");
  }
  getTicketByOne(id: any) {
    return http.get(`/tickets/${id}`);
  }
}

export default new TicketService();
