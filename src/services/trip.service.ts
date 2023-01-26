import http from "./http-common";

class TripService {
  createTrip(data: any) {
    return http.post("/trips", data);
  }
  getAllTrips() {
    return http.get("/trips");
  }
  deleteTrip(id: any) {
    return http.delete(`/trips/${id}`);
  }
  findByPoints(start: any, end: any) {
    return http.get(`/trips/start/${start}/end/${end}`);
  }
}

export default new TripService();
