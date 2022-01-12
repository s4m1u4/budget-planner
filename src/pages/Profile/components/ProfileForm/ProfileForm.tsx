import React, { Component } from "react";
import { Formik, Form } from "formik";
import { ProfileFormSchema } from "./ProfileFormSchema";
import { IUserData } from "../../../../types";
import { ButtonComponent, InputComponent } from "../../../../components/shared";

import { ButtonGroup } from "./ProfileForm.styles";

interface IHandleSubmitValues {
  firstName: string;
  lastName: string;
  email: string;
}

interface ProfileFormProps {
  navigate: (path: string | number) => void;
  userData: IUserData;
  setUserData: () => void;
  setNewUserData: (userData: IUserData) => void;
}

export class ProfileForm extends Component<ProfileFormProps> {
  handleClick = () => {
    this.props.navigate(-1);
  };

  handleSubmit = async (values: IHandleSubmitValues) => {
    const userData: IUserData = {
      ...this.props.userData,
      ...values,
    };
    await this.props.setNewUserData(userData);
    this.props.navigate(-1);
    await this.props.setUserData();
  };

  render() {
    const { firstName, lastName, email } = this.props.userData;

    return (
      <Formik
        enableReinitialize
        validationSchema={ProfileFormSchema}
        initialValues={{
          firstName: firstName,
          lastName: lastName,
          email: email,
        }}
        validateOnBlur
        onSubmit={async (values) => {
          await this.handleSubmit(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          dirty,
        }) => (
          <Form>
            <InputComponent
              label="First name"
              type="text"
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName || ""}
              error={(touched.firstName && !!errors.firstName) || false}
              helperText={(touched.firstName && errors.firstName) || ""}
            />
            <InputComponent
              label="Last name"
              type="text"
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName || ""}
              error={(touched.lastName && !!errors.lastName) || false}
              helperText={(touched.lastName && errors.lastName) || ""}
            />
            <InputComponent
              label="Email"
              type="text"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email || ""}
              error={(touched.email && !!errors.email) || false}
              helperText={(touched.email && errors.email) || ""}
            />
            <ButtonGroup>
              <ButtonComponent
                type="submit"
                color="success"
                disabled={!dirty}
                onClick={handleSubmit}
              >
                Save
              </ButtonComponent>
              <ButtonComponent
                type="button"
                color="error"
                onClick={this.handleClick}
              >
                Cancel
              </ButtonComponent>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    );
  }
}
