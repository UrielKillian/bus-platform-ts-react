import http from "./http-common";

class AppService {
  createTripAndCreateSeats(data: any) {
    return http.post("/app", data);
  }
  createPassengerAndTicket(data: any) {
    return http.post("/app/app/ticket", data);
  }
}

const appService = new AppService();

export default appService;
