import React, { Component } from "react";
import { Formik, Form } from "formik";
import { ProfileFormSchema } from "./ProfileFormSchema";
import { IUserData } from "../../../../types";
import { ButtonComponent, InputComponent } from "../../../../components/shared";
import { ProfileModal } from "../ProfileModal";
import { IPasswordData } from "../../../Records/types";

import { ButtonGroup } from "./ProfileForm.styles";

interface IHandleSubmitValues {
  firstName: string;
  lastName: string;
  email: string;
}

interface ProfileFormProps {
  editMode: string;
  navigate: (path: string | number) => void;
  userData: IUserData;
  setUserData: () => void;
  setNewUserData: (userData: IUserData) => void;
  setNewPassword: (passwordData: IPasswordData) => string | null;
}

interface ProfileFormState {
  isOpenModal: boolean;
}

export class ProfileForm extends Component<ProfileFormProps, ProfileFormState> {
  constructor(props: ProfileFormProps) {
    super(props);
    this.state = {
      isOpenModal: false,
    };
  }

  handleOpen = () => this.setState({ isOpenModal: true });
  handleClose = () => this.setState({ isOpenModal: false });

  handleClickEdit = () => {
    this.props.navigate("edit");
  };

  handleClickCancel = () => {
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

  handleClickChangePassword = () => {
    this.handleOpen();
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
            <ProfileModal
              open={this.state.isOpenModal}
              handleClose={this.handleClose}
              setNewPassword={this.props.setNewPassword}
            />
            <InputComponent
              disabled={!Boolean(this.props.editMode)}
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
              disabled={!Boolean(this.props.editMode)}
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
              disabled={!Boolean(this.props.editMode)}
              label="Email"
              type="text"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email || ""}
              error={(touched.email && !!errors.email) || false}
              helperText={(touched.email && errors.email) || ""}
            />
            <ButtonComponent
              style={{ marginBottom: "1rem", minWidth: "250px" }}
              type="button"
              color="secondary"
              onClick={this.handleClickChangePassword}
            >
              Change password
            </ButtonComponent>
            <ButtonGroup>
              {!this.props.editMode ? (
                <ButtonComponent
                  type="button"
                  color="primary"
                  onClick={this.handleClickEdit}
                >
                  Edit
                </ButtonComponent>
              ) : (
                <>
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
                    onClick={this.handleClickCancel}
                  >
                    Cancel
                  </ButtonComponent>
                </>
              )}
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    );
  }
}
