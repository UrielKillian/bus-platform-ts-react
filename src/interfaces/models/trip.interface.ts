import { DepartmentI } from "./department.interface";
import { SeatI } from "./seat.interface";

// Create a interface
export interface TripI {
  id: number;
  departureTime: string;
  createdAt: string;
  originPoint: DepartmentI;
  destinationPoint: DepartmentI;
  seats: SeatI[];
}
