import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useState } from "react"
import * as Yup from "yup";
import usersService from "../../../services/users.service";
import AlertMessage1Component from "../../../shared/components/messages/AlertMessages/alert-message-1.component";

export default function MessageInput({
    send,
}: {
    send: (value: string, email: string) => void
}) {
    const validationSchema = Yup.object({
        message: Yup.string().required(
            element => <AlertMessage1Component message={"Tu mensaje está vacío"} />
        ),
    });
    const initialValues = {
        message: "",
    };
    const myEmail: string = usersService.getActualEmail()

    const renderError = (message: any) => <div>{message}</div>;
    return (
        <>
            <div className="px-8 mb-5">
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                    Escribele a toda la plataforma
                </label>
                <div className="mt-1">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { resetForm }) => {
                            send(values.message, myEmail)
                            resetForm()
                        }}
                    >
                        <Form>
                            <div>
                                <Field
                                    id="message"
                                    name="message"
                                    type="text"
                                    placeholder="Escribe tu mensaje"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    defaultValue={''}
                                />
                                <div className="mt-1 ">
                                    <ErrorMessage name="message" render={renderError} />
                                </div>
                            </div>

                            <div className="mt-3 w-full">
                                <button
                                    type="submit"
                                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <ArrowRightCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                    Enviar mensaje
                                </button>
                            </div>
                        </Form>

                    </Formik>
                </div>
            </div>
        </>
    )
}