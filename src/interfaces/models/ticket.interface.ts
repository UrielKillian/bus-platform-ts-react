import { SeatI } from "./seat.interface";
import { TripI } from "./trip.interface";

// Create a interface
export interface TicketI {
  id: number;
  trip: TripI;
  seat: SeatI;
}
