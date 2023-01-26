import { ErrorMessage, Field, Form, Formik } from "formik";
import AlertMessage1Component from "../../shared/components/messages/AlertMessages/alert-message-1.component";
import ErrorMessage1Component from "../../shared/components/messages/ErrorMessages/error-message.component";
import * as Yup from "yup";

export default function RegisterViewindex() {

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
    ),
    dni: Yup.string().required(
      element => <AlertMessage1Component message={"El DNI es requerido"} />
    ).min(8, element => <AlertMessage1Component message={"El DNI debe tener 8 dígitos."}/>).max(8, element => <AlertMessage1Component message={"El DNI debe tener 8 dígitos"} />),
  });

  const initialValues = {
    email: "",
    password: "",
    dni: "",
  };

    const onSubmit = (values:any) => {
    alert(JSON.stringify(values, null, 2));
  };
    const renderError = (message:any) => <div>{message}</div>;


  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Crea tu cuenta</h2>
       
        </div>

        <div className="mt-8 p-3 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-pal1 rounded-md py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Formik  initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                  await onSubmit(values);
                  resetForm();
                }}>
            <Form className="space-y-6" action="#" method="POST">
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
                <label htmlFor="password" className="block text-sm font-medium text-pal4">
                  DNI
                </label>
                <div className="mt-1">
                  <Field
                    id="dni"
                    name="dni"
                    type="text"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  </div>
                  <div className="mt-1">
                    <ErrorMessage name="dni" render={renderError} />
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
      </div>
    </>
  )
}
