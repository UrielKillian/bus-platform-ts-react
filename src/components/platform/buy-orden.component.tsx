import {
  ClockIcon,
  HomeIcon,
  MapPinIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useRef } from "react";
import appService from "../../services/app.service";
export interface BuyOrdenComponentI {
  start_point: string;
  end_point: string;
  arrive_time: string;
  selected: any;
  setSelected: any;
  tripId: number;
  setOpen: any;
  init: any;
  setOpenCart: any;
}
export default function BuyOrdenComponent({
  start_point,
  end_point,
  arrive_time,
  selected,
  setSelected,
  tripId,
  setOpen,
  init,
  setOpenCart
}: BuyOrdenComponentI) {

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto md:pt-1 pt-10">
          <h1 className="text-xl font-semibold text-white">Factura</h1>
        </div>
      </div>
      <div className="-mx-4 mt-4 flex flex-col sm:-mx-6 md:mx-0">
        <div className="border border-pal3 rounded-md p-5 space-y-2 bg-pal3 text-white">
          <label>Detalle del viaje: </label>
          <span className="flex items-center">
            <HomeIcon className="w-6 h-6 p-0.5 mr-1 flex rounded-md bg-pal1 text-white" />{" "}
            {start_point}
          </span>
          <span className="flex items-center">
            <MapPinIcon className="w-6 h-6 p-0.5 mr-1  rounded-md bg-pal1 text-white" />{" "}
            {end_point}
          </span>
          <span className="flex items-center">
            <ClockIcon className="w-6 h-6 p-0.5 mr-1 rounded-md bg-pal1 text-white" />{" "}
            {new Date(arrive_time).toLocaleDateString("en-gb")}
            {" - "}
            {Intl.DateTimeFormat("en", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            }).format(new Date(arrive_time))}
          </span>
        </div>
        <div className=" mt-5 border border-pal1 rounded-md p-5 space-y-2 bg-pal1 text-white">
          <button
            onClick={() => {
              setOpen(false);
              setOpenCart(true);
            }}
            type="button"
            className="inline-flex w-full justify-center items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <ShoppingBagIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Ir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
