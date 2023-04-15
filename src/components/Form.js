import { Formik } from "formik";
import { DisplayFormikState } from "./DisplayFormikState";
import * as Yup from "yup";

export default function Form() {

    
  return (
    <div>
         <Formik
      initialValues={{ email: "", username: "" }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
            .email()
            .required("Required"),
        username: Yup.string()
            .required("Required")
            .max(5, "Too long sucker")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <label htmlFor="username" style={{ display: "block" }}>
              Username
            </label>
            <input
              id="username"
              placeholder="Enter your username"
              type="text"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.username && touched.username
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.username && touched.username && (
              <div className="input-feedback">{errors.username}</div>
            )}
            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

            <DisplayFormikState {...props} />
          </form>
        );
      }}
    </Formik>
    </div>
  )
}
