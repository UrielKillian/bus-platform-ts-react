import { SeatI } from "./seat.interface";
import { TripI } from "./trip.interface";

export interface PassengerI {
  id: number;
  name: string;
  lastName: string;
  tickets: TripI[];
  seats: SeatI[];
}
