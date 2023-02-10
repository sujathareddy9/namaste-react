import React from "react";

import { validateObject } from "./config";
const Login = ({handleUser}) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validateObject,
    onSubmit: (values) => {
        localStorage.setItem('login', true);
        localStorage.setItem('email',values.email);
        handleUser();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='center'>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <div>
      <button type="submit" className="button-submit">LOGIN</button>
      </div>
    </form>
  );
};
export default Login;