import { Fragment } from "react";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CurrencyDollarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import ItemCartComponent from "./item-cart.component";
import appService from "../../services/app.service";
import { NavigateFunction, useNavigate } from 'react-router-dom';

export interface BuyCartComponentI {
    open: boolean;
    setOpen: any;
    setXNotificationMessage: any;
}
export default function BuyCartComponent({ open, setOpen, setXNotificationMessage }: BuyCartComponentI) {
    let navigate: NavigateFunction = useNavigate();
    const cart = useSelector((state: any) => state.cart);
    function createTicket() {
        let user: any = localStorage.getItem("user");
        if (user) {
            user = JSON.parse(user);
            const canIBuy = cart.find((item: any) => item.canBuy === false)
            if (!canIBuy) {
                if (cart.length < 1) {
                    setXNotificationMessage(true);
                } else {
                    cart.map((item: any) => {
                        appService
                            .createPassengerAndTicket({
                                tripId: item.tripId,
                                seatId: item.id,
                                passengerName: item.name,
                                passengerLastName: item.lastName,
                                arrivedTime: "2024-01-25T21:53:33.299Z",
                                userId: user.authenticatedUser.id,
                            })
                            .then((res) => {
                                console.log(res);
                            });
                    })
                    navigate('/platform/tickets');
                }
            } else {
                alert("No se puede comprar un ticket que no está disponible")
            }
            ;

            /* appService
                .createPassengerAndTicket({
                    tripId: tripId,
                    seatId: selected.id,
                    passengerName: name.current,
                    passengerLastName: lastName.current,
                    arrivedTime: "2023-01-25T21:53:33.299Z",
                    userId: user.authenticatedUser.id,
                })
                .then((res) => {
                    console.log(res);
                }); */
        } else {
            return;
        }

    }
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="bg-pal1 py-6 px-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <Dialog.Title className="text-lg font-medium text-white">
                                                    Carrito de compras
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="rounded-md bg-pal1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="mt-1">
                                                <p className="text-sm text-white">
                                                    Todos los tickets agregados a este carrito serán
                                                    comprados en un solo pago.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex-1 py-6 px-4 sm:px-6">
                                            {/* Replace with your content */}
                                            <div className="absolute inset-0 py-6 px-4 sm:px-6">
                                                <div className="space-y-4">
                                                    {cart?.map((item: any) => (
                                                        <div key={item.id}>
                                                            <ItemCartComponent item={item} />
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="mt-4">
                                                    <button
                                                        onClick={() => {
                                                            createTicket();
                                                        }}
                                                        type="button"
                                                        className=" justify-center inline-flex w-full items-center rounded-md border border-transparent bg-pal3 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pal3 focus:outline-none focus:ring-2 focus:ring-pal3 focus:ring-offset-2"
                                                    >
                                                        < CurrencyDollarIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                                        Comprar lo agregado al carrito
                                                    </button>
                                                </div>
                                            </div>

                                            {/* /End replace */}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
