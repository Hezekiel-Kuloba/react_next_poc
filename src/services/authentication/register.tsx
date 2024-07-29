import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import customTheme from "../../components/theme";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "react-bootstrap/Stack";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { UseRegisterData } from "../useAPiData";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(3, "First name must be at least 3 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(
      /^(\+?\d{1,3}[- ]?)?\(?\d{1,3}\)?[- ]?\d{3,4}[- ]?\d{4}$/,
      "Invalid phone number"
    ),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const navigate = useNavigate();
  const { mutate: RegisterUser, isLoading, isError, error } = UseRegisterData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: any = (data: any) => {
    RegisterUser(data);
  };

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Container
          style={{ height: "500px", marginLeft: "90px", textAlign: "center" }}
        >
          <Row>
            <Col lg={6}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack gap={1}>
                  <div className="pt-5">
                    <Typography variant="h3">Hi, Welcome to blogee</Typography>
                  </div>
                  <div className="pt-3">
                    <Typography variant="h4">Create a new account</Typography>
                  </div>

                  <div className="pt-4">
                    <Row className="d-flex justify-content-center">
                      <Col lg={5}>
                        <TextField
                          style={{ marginBottom: 20 }}
                          className="auth_text_field"
                          type="text"
                          label="Firstname"
                          color="black"
                          fullWidth
                          {...register("firstName")}
                        />
                        {errors.firstName?.message && (
                          <p style={{ color: "red" }}>
                            {errors.firstName.message}
                          </p>
                        )}
                      </Col>
                      <Col lg={5}>
                        <TextField
                          style={{ marginBottom: 20 }}
                          className="auth_text_field"
                          type="text"
                          label="Lastname"
                          color="black"
                          {...register("lastName")}
                          fullWidth
                        />
                        {errors.lastName?.message && (
                          <p style={{ color: "red" }}>
                            {errors.lastName.message}
                          </p>
                        )}
                      </Col>
                    </Row>
                  </div>
                  <div className="pt-1 d-flex justify-content-center">
                    <Col lg={10}>
                      <TextField
                        style={{ marginBottom: 20 }}
                        className="auth_text_field"
                        type="email"
                        label="Email"
                        color="black"
                        {...register("email")}
                        fullWidth
                      />
                      {errors.email?.message && (
                        <p style={{ color: "red" }}>{errors.email.message}</p>
                      )}
                    </Col>
                  </div>

                  <div className="pt-1 d-flex justify-content-center">
                    <Col lg={10}>
                      <TextField
                        style={{ marginBottom: 20 }}
                        className="auth_text_field"
                        type="tel"
                        label="Phone number"
                        color="black"
                        {...register("phoneNumber")}
                        fullWidth
                      />
                      {errors.phoneNumber?.message && (
                        <p style={{ color: "red" }}>
                          {errors.phoneNumber.message}
                        </p>
                      )}
                    </Col>
                  </div>
                  <div className="pt-1">
                    <Row className="d-flex justify-content-center">
                      <Col lg={5}>
                        <TextField
                          style={{ marginBottom: 20 }}
                          className="auth_text_field"
                          type="password"
                          label="Password"
                          color="black"
                          {...register("password")}
                          fullWidth
                        />
                        {errors.password?.message && (
                          <p style={{ color: "red" }}>
                            {errors.password.message}
                          </p>
                        )}
                      </Col>
                      <Col lg={5}>
                        <TextField
                          style={{ marginBottom: 20 }}
                          className="auth_text_field"
                          type="password"
                          label="Confirm password"
                          color="black"
                          {...register("confirmPassword")}
                          fullWidth
                        />
                        {errors.confirmPassword?.message && (
                          <p style={{ color: "red" }}>
                            {errors.confirmPassword.message}
                          </p>
                        )}
                      </Col>
                    </Row>
                  </div>
                  <div className="pt-1 d-flex justify-content-center">
                    <Col lg={10}>
                      <Button
                        className="authButton"
                        type="submit"
                        variant="contained"
                        color="black"
                        sx={{ borderRadius: "16px", width: "100%", height: 45 }}
                      >
                        <Typography variant="h5">Register</Typography>
                      </Button>
                    </Col>
                  </div>
                </Stack>
              </form>
            </Col>
            <Col className="background-image"></Col>
          </Row>
        </Container>
      </ThemeProvider>
    </>
  );
};



