import React, { Component } from "react";
import { Formik, Form } from "formik";
import { EditModeSchema } from "./EditModeSchema";
import { IUserData } from "../../../../types";
import { ButtonComponent, InputComponent } from "../../../../components/shared";
import { PasswordModal } from "../PasswordModal";
import { IPasswordData } from "../../../Records/types";

import { ButtonGroup } from "./EditMode.styles";

interface IHandleSubmitValues {
  firstName: string;
  lastName: string;
  email: string;
}

interface EditModeProps {
  onSubmit: (values: IHandleSubmitValues) => void;
  editMode: string;
  navigate: (path: string | number) => void;
  userData: IUserData;
  setUserData: () => void;
  setNewUserData: (userData: IUserData) => void;
  setNewPassword: (passwordData: IPasswordData) => string | null;
}

interface EditModeState {
  isOpenModal: boolean;
}

export class EditMode extends Component<EditModeProps, EditModeState> {
  constructor(props: EditModeProps) {
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
    this.props.onSubmit(values);
  };

  handleClickChangePassword = () => {
    this.handleOpen();
  };

  render() {
    const { firstName, lastName, email } = this.props.userData;

    return (
      <Formik
        enableReinitialize
        validationSchema={EditModeSchema}
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
          <Form style={{ width: "100%", maxWidth: "300px" }}>
            <PasswordModal
              open={this.state.isOpenModal}
              handleClose={this.handleClose}
              setNewPassword={this.props.setNewPassword}
              onSubmit={(values) => values}
            />
            <InputComponent
              fullWidth
              id="firstName"
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
              fullWidth
              id="lastName"
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
              fullWidth
              id="email"
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
              fullWidth
              style={{ marginBottom: "1rem" }}
              type="button"
              color="secondary"
              onClick={this.handleClickChangePassword}
            >
              Change password
            </ButtonComponent>
            <ButtonGroup>
              {!this.props.editMode ? (
                <ButtonComponent
                  fullWidth
                  type="button"
                  color="primary"
                  onClick={this.handleClickEdit}
                >
                  Edit
                </ButtonComponent>
              ) : (
                <>
                  <ButtonComponent
                    fullWidth
                    type="submit"
                    color="success"
                    disabled={!dirty}
                    onClick={handleSubmit}
                  >
                    Save
                  </ButtonComponent>
                  <ButtonComponent
                    fullWidth
                    type="button"
                    color="error"
                    disabled={dirty}
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
