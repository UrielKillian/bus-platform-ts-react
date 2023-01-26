import { SeatI } from "./seat.interface";

// Create a interface
export interface ItemI {
  id: number;
  title: string;
  end_point: string;
  start_point: string;
  arrive_time: string;
  seat: SeatI;
  quantity: number;
  name: string;
  lastName: string;
  canBuy: boolean;
}
