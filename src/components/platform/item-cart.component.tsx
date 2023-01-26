import Input1Component from "../../shared/components/inputs/input-1.component";
import { useRef, useState } from "react";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/outline";
export default function ItemCartComponent({ item }: any) {
    const name = useRef("");
    const lastName = useRef("");
    const [save, setSave] = useState(false);
    return (
        <div className="border border-gray-600 rounded-md">
            {/* <button onClick={() => {
                console.log(item)
            }
            }>
                Ver el item
            </button> */}
            <div className="grid grid-cols-4 h-[22rem]">
                <div className="col-span-1">
                    <div className="h-full bg-[url('https://images.unsplash.com/photo-1567748534085-467f8a8a475d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80')] bg-cover bg-center" />
                </div>
                <div className="col-span-3">
                    <div className="p-2">
                        <div>
                            {item.start_point} - {item.end_point}
                        </div>
                        <div className="inline-flex space-x-2">

                            <div>
                                <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                                    <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                                        <circle cx={4} cy={4} r={3} />
                                    </svg>
                                    Fecha: {new Date(item.arrive_time).toLocaleDateString(
                                        "en-gb"
                                    )}
                                </span>
                            </div>
                            <div>
                                <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                                    <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                                        <circle cx={4} cy={4} r={3} />
                                    </svg>
                                    Hora: {Intl.DateTimeFormat("en", {
                                        hour: "numeric",
                                        minute: "numeric",
                                        hour12: true,
                                    }).format(new Date(item.arrive_time))}
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                                    <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                                        <circle cx={4} cy={4} r={3} />
                                    </svg>
                                    Asiento: {item.seat.seatNumber}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="p-2 border bg-pal4">
                            <div className="text-black">
                                <Input1Component
                                    title={"Ingrese nombre"}
                                    example={"Edinson"}
                                    type={"text"}
                                    value={name}
                                    name="Name-ticket"
                                    disabled={save}
                                />
                            </div>
                            <div className="text-black">
                                <Input1Component
                                    title={"Ingrese apellido"}
                                    example={"Cabrera"}
                                    type={"text"}
                                    value={lastName}
                                    name="LastName-ticket"
                                    disabled={save}
                                />
                            </div>
                            <div className="">
                                {
                                    save ? <button
                                        onClick={() => {
                                            setSave(false);
                                        }}
                                        type="button"
                                        className="w-full justify-center inline-flex mt-2 items-center rounded-md border border-transparent bg-pal1 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pal1 focus:outline-none focus:ring-2 focus:ring-pal1 focus:ring-offset-2"
                                    >
                                        <LockClosedIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                        Editar
                                    </button> : <button
                                        onClick={() => {
                                            setSave(true);
                                        }}
                                        type="button"
                                        className="w-full justify-center inline-flex mt-2 items-center rounded-md border border-transparent bg-pal1 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pal1 focus:outline-none focus:ring-2 focus:ring-pal1 focus:ring-offset-2"
                                    >
                                        <LockOpenIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                        Guardar
                                    </button>
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}