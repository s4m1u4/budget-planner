import React from "react";
import { Formik, Form } from "formik";
import { ProfileFormSchema } from "./ProfileFormSchema";
import { ButtonComponent, InputComponent } from "../../../../components/shared";

import { ButtonGroup } from "./ProfileForm.styles";

export class ProfileForm extends React.Component {
  handleClick = () => {
    this.props.navigate(-1);
  };

  handleSubmit = async (values) => {
    const userData = {
      ...this.props.userData,
      ...values,
    };
    await this.props.setNewUserData(userData);
    this.props.navigate(-1);
    await this.props.setUserData();
  };

  render() {
    return (
      <Formik
        enableReinitialize
        validationSchema={ProfileFormSchema}
        initialValues={{
          firstName: this.props.userData.firstName,
          lastName: this.props.userData.lastName,
          email: this.props.userData.email,
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
              value={values.firstName}
              error={touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
            />
            <InputComponent
              label="Last name"
              type="text"
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              error={touched.lastName && !!errors.lastName}
              helperText={touched.lastName && errors.lastName}
            />
            <InputComponent
              label="Email"
              type="text"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
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
                Сancel
              </ButtonComponent>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    );
  }
}
