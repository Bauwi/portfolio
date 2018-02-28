import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withFormik } from "formik";
import Yup from "yup";
import classnames from "classnames";
import axios from "axios";
import { notification } from "antd";

import { startLogin } from "./../actions/auth";

const openNotificationWithIcon = type => {
  if (type === "success")
    notification.success({
      message: "Message sent !",
      description: "Thank you ! I will get back to you as quickly as possible."
    });
  else if (type === "error") {
    notification.error({
      message: "Oops, something went wrong.",
      description: "Please try again or use my e-mail address directly."
    });
  }
};

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, "C'mon, your password can not be that short")
      .required("Sorry but I need your name !"),

    email: Yup.string()
      .email("This is not a valid email !")
      .required("I need a way to contact you !"),

    body: Yup.string()
      .min(1, "Your message must be 1 character long minimum.")
      .required("Please, do not send me an empty message.")
  }),

  mapPropsToValues: ({ user }) => ({
    ...user
  }),
  handleSubmit: (payload, formikBag) => {
    const html = `
      <div>
        <h1>${payload.name}</h1>
        <p>new message from: ${payload.email}</p>
        <p>${payload.body}</p>
      </div>
    `;
    const content = {
      to: "kvn.philippe@gmail.com",
      from: payload.email,
      subject: payload.name,
      text: payload.body,
      html
    };
    axios
      .post("http://localhost:3001/send-email", content)
      .then(() => {
        openNotificationWithIcon("success");
        formikBag.setSubmitting(false);
      })
      .catch(error => openNotificationWithIcon("error"));
  },
  displayName: "MyForm"
});

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    "input-group",
    {
      "animated shake error": !!error
    },
    className
  );
  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};

const TextArea = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    "input-group",
    {
      "animated shake error": !!error
    },
    className
  );
  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <textarea
        id={id}
        className="text-area"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};

export const MyForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    isSubmitting
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="name"
        type="text"
        label="Name / Company"
        placeholder="ex: Geronimo11th"
        error={touched.name && errors.name}
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="email"
        type="email"
        label="E-mail"
        placeholder="ex: drwho@universe.com"
        error={touched.email && errors.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextArea
        name="body"
        cols="30"
        rows="5"
        id="body"
        type="text"
        label="Your Message"
        placeholder="ex: drwho@universe.com"
        error={touched.body && errors.body}
        value={values.body}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <div className="button__wrapper ">
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
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: credentials => dispatch(startLogin(credentials))
});

export default withRouter(
  connect(undefined, mapDispatchToProps)(formikEnhancer(MyForm))
);
