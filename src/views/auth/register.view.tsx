import { ErrorMessage, Field, Form, Formik } from "formik";
import AlertMessage1Component from "../../shared/components/messages/AlertMessages/alert-message-1.component";
import ErrorMessage1Component from "../../shared/components/messages/ErrorMessages/error-message.component";
import * as Yup from "yup";
import usersService from "../../services/users.service";
import authService from "../../services/auth.service";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useState } from "react";
import XNotificationComponent from "../../shared/components/notifications/x-notification.component";
export default function RegisterViewindex() {
  let navigate: NavigateFunction = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(element => <ErrorMessage1Component
        message={"Correo electrónico no válido"}
        item_1={"El correo debe tener un dominio válido."}
        item_2={"Revisa que el correo ingresado sea el correcto."}
      />
      )
      .required(element => <AlertMessage1Component message={"El correo es requerido."} />),
    password: Yup.string().required(
      element => <AlertMessage1Component message={"La contraseña es requerida"} />
    )
  });

  const initialValues = {
    email: "",
    password: "",
  };
  const renderError = (message: any) => <div>{message}</div>;

  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <div className="flex h-screen bg-pal4 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://www.redbus.pe/i/59538b35953097248522a65b4b79650e.png"
            alt="RedBus"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Crea tu cuenta</h2>

        </div>

        <div className="mt-8 p-3 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-pal1 h-full w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-600 rounded-md py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Formik initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                usersService.getUserByEmail(values.email).then(
                  response => {
                    if (response.data) {
                      setShowAlert(true);
                      resetForm();
                    }
                  }).catch(error => {
                    usersService.register({
                      email: values.email,
                      password: values.password,
                    }).then(
                      response => {
                        console.log(response);
                      },
                    )
                    authService.login({
                      email: values.email,
                      password: values.password,
                    }).then(response => {
                      console.log(response);
                      navigate('/platform');
                    })
                  })

              }}>
              <Form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-pal4">
                    Correo Electrónico
                  </label>
                  <div className="mt-1">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    <div className="mt-1">
                      <ErrorMessage name="email" render={renderError} />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-pal4">
                    Contraseña
                  </label>
                  <div className="mt-1">
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mt-1">
                    <ErrorMessage name="password" render={renderError} />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-pal3 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-pal3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Registrarse
                  </button>
                </div>
              </Form>
            </Formik>

          </div>
        </div>
        <XNotificationComponent title={"Correo en uso"} message={"El correo ya se encuentra registrado"} show={showAlert} setShow={setShowAlert} />
      </div>
    </>
  )
}
