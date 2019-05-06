import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import * as emailjs from 'emailjs-com'
import Fade from 'react-reveal/Fade'
import {
  InputWrapper,
  FormWrapper,
  Placeholder,
  Label,
  Message,
  ErrorMessage,
  CheckBox,
  ConsentText,
  Submit,
} from './FormStyles'


const SignUp = ({
  values,
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched
}) => (
  <div>
  <Fade bottom>
    <FormWrapper onSubmit={handleSubmit}>
      <Label htmlFor="name">
      {errors.name && touched.name && (
        <ErrorMessage id="feedback">{errors.name}</ErrorMessage>
      )}
        <InputWrapper
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name || ''}
          name="name"
        />
        <Placeholder>Name</Placeholder>
      </Label>
      <Label htmlFor="email">
      {errors.email && touched.email && (
        <ErrorMessage id="feedback">{errors.email}</ErrorMessage>
      )}
        <InputWrapper
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email || ''}
          name="email"
          noValidate
        />
        <Placeholder>Email</Placeholder>
      </Label>
      <Label htmlFor='message'>
      {errors.message && touched.message && (
        <ErrorMessage id="feedback">{errors.message}</ErrorMessage>
      )}
      <Message
        id="message"
        onChange={handleChange}
        onBlur={handleBlur}
        name="message"
        rows='4'
        value={values.message || ""}
        ></Message>
      <Placeholder>Message</Placeholder>
      </Label>
      <label htmlFor="consent">
      {errors.consent && touched.consent && (
        <ErrorMessage id="feedback">{errors.consent}</ErrorMessage>
      )}
        <ConsentText>
          I agree with the
          <a
            href='#www'
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            T&CS,
          </a>
          <a
            href="#www"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Privacy Policy
          </a>{" "}
          and for RKK to contact me to discuss my request
        </ConsentText>
        <CheckBox
          type="checkbox"
          name="consent"
          checked={values.consent}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
      <Submit type="Submit">submit</Submit>
    </FormWrapper>
    </Fade>
  </div>
);

const Form = withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    message: "",
    consent: false
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be more than 1 character")
      .required("Name is needed"),
    email: Yup.string()
      .email("Whoops, thats not a valid email address")
      .required("Email is needed"),
    consent: Yup.bool()
      .oneOf([true], "Please give us consent to contact you")
      .required("Please give us consent to contact you"),
    message: Yup.string()
      .min(2, "Please leave a message or provide telephone number to request a callback")
      .required("Please leave a message or provide telephone number to request a callback"),
  }),


    handleSubmit: (values, {setSubmitting, resetForm }) => {
        const service_id = 'rkk_form_server';
        const template_id = 'rkk_form_forward';
        const user_id = 'user_Yx8GcXupiG88q1ZoCTSjT';
        const template_params = {
            userName: values.name,
            userEmail: values.email,
            userMessage: values.message,
            userConsent: values.consent
        };

        emailjs.send(service_id, template_id, template_params, user_id)
            .then(function (response) {
                alert("We've received your request and we'll respond ASAP");
                resetForm();
            }, function (error) {
                alert("Process failed. Please try again.");
                console.log('Email sending failed', error);
            });
    },

    displayName: "Basic Form"
  })(SignUp);

  export default Form;
