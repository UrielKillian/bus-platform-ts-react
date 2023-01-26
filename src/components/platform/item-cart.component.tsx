import Input1Component from "../../shared/components/inputs/input-1.component";
import { useRef, useState } from "react";
import { LockClosedIcon, LockOpenIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from 'react-redux';
import { removeItem, updateNameAndLastName, canBuyToTrue, canBuyToFalse } from "../../redux/slice/cartSlice";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ErrorMessage1Component from "../../shared/components/messages/ErrorMessages/error-message.component";
import AlertMessage1Component from "../../shared/components/messages/AlertMessages/alert-message-1.component";
export default function ItemCartComponent({ item }: any) {
    const name = useRef("");
    const lastName = useRef("");
    const [save, setSave] = useState(false);
    const dispatch = useDispatch()
    const validationSchema = Yup.object({
        name: Yup.string()
            .required(element => <AlertMessage1Component message={"El nombre es requerido."} />),
        lastName: Yup.string().required(
            element => <AlertMessage1Component message={"El apellido es requerido"} />
        ),
    });
    const initialValues = {
        name: "",
        lastName: "",
    };
    const renderError = (message: any) => <div>{message}</div>;

    return (
        <div className="border border-gray-600 rounded-md">
            <button onClick={() => {
                console.log(item)
            }
            }>
                Ver el item
            </button>
            <div className="grid grid-cols-4 h-[22rem]">
                <div className="col-span-1">
                    <div className="h-full bg-[url('https://images.unsplash.com/photo-1567748534085-467f8a8a475d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80')] bg-cover bg-center" />
                </div>
                <div className="col-span-3">
                    <div className="p-2">
                        <div className="items-center flex justify-between">
                            <label>{item.start_point} - {item.end_point}</label>
                            <button
                                onClick={() => {
                                    dispatch(removeItem({
                                        id: item.id,
                                    }))
                                }}>
                                <XMarkIcon className="h-6 w-6 text-red-500" />
                            </button>

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
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={async (values, { resetForm }) => {

                                    if (save) {
                                        dispatch(updateNameAndLastName({
                                            id: item.id,
                                            name: values.name,
                                            lastName: values.lastName,
                                        }))
                                        dispatch(canBuyToTrue({
                                            id: item.id
                                        }))
                                    } else {
                                        dispatch(canBuyToFalse({
                                            id: item.id
                                        }))
                                    }
                                }}
                            >
                                <Form>
                                    <div className="text-black">
                                        <Field
                                            id="name"
                                            name="name"
                                            type="text"
                                            disabled={save}
                                            required
                                            placeholder="Tu nombre"
                                            className="input block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        />
                                        <div className="mt-2 ">
                                            <ErrorMessage name="name" render={renderError} />
                                        </div>
                                    </div>
                                    <div className="text-black mt-2">
                                        <Field
                                            id="lastName"
                                            name="lastName"
                                            type="lastName"
                                            disabled={save}
                                            placeholder="Tu apellido"
                                            required
                                            className="input block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        />
                                        <div className="mt-1 ">
                                            <ErrorMessage name="lastName" render={renderError} />
                                        </div>
                                    </div>
                                    <div className="">
                                        {
                                            save ? <button
                                                onClick={() => {
                                                    setSave(!save)
                                                }}
                                                type="submit"
                                                className="w-full justify-center inline-flex mt-2 items-center rounded-md border border-transparent bg-pal1 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pal1 focus:outline-none focus:ring-2 focus:ring-pal1 focus:ring-offset-2"
                                            >
                                                <LockClosedIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                                Editar
                                            </button> : <button
                                                onClick={() => {
                                                    setSave(!save)
                                                }}
                                                type="submit"
                                                className="w-full justify-center inline-flex mt-2 items-center rounded-md border border-transparent bg-pal1 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pal1 focus:outline-none focus:ring-2 focus:ring-pal1 focus:ring-offset-2"
                                            >
                                                <LockOpenIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                                Guardar
                                            </button>
                                        }

                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}