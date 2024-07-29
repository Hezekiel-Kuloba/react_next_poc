import React, { useState, useEffect } from "react";
import { Button, TextField, Typography } from "@mui/material";
import customTheme from "../../components/theme";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "react-bootstrap/Stack";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import {  UseUpdateUserData } from "../useAPiData";
import { useQuery } from "react-query";

export const UserUpdateTwo = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [userId, setUserId ] = useState("");

  interface UserData {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    // Other properties (firstName, lastName, etc.) go here
  }

  const { data } = useQuery<UserData>("user");

  const user_cache = data;

  const id = user_cache?.id

  const { mutate: UpdateUser, isLoading, isError, error } = UseUpdateUserData();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const user_data = { id, firstName, lastName, email, phoneNumber, password }
    UpdateUser (user_data)
    console.log(user_data)
  };


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;

return (
  <ThemeProvider theme={customTheme}>
    <Container
      style={{ height: "500px", marginLeft: "90px", textAlign: "center" }}
    >
      <Row>
        <Col lg={6}>
          <form onSubmit={handleSubmit}>
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
                      label="firstname"
                      placeholder={user_cache?.firstName}
                      color="black"
                      value={firstName}
                      onChange={(e) => setFirstname(e.target.value)}
                      fullWidth
                    />
                  </Col>
                  <Col lg={5}>
                    <TextField
                      style={{ marginBottom: 20 }}
                      className="auth_text_field"
                      type="text"
                      label="lastname"
                      placeholder={user_cache?.lastName}
                      color="black"
                      value={lastName}
                      onChange={(e) => setLastname(e.target.value)}
                      fullWidth
                    />
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
                    placeholder={user_cache?.email}
                    color="black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                  />
                </Col>
              </div>

              <div className="pt-1 d-flex justify-content-center">
                <Col lg={10}>
                  <TextField
                    style={{ marginBottom: 20 }}
                    className="auth_text_field"
                    type="tel"
                    label="Phone number"
                    placeholder={user_cache?.phoneNumber}
                    color="black"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    fullWidth
                  />
                </Col>
              </div>
              <div className="pt-1">
                <Row className="d-flex justify-content-center">
                  <Col lg={10}>
                    <TextField
                      style={{ marginBottom: 20 }}
                      className="auth_text_field"
                      type="password"
                      label="Password"
                      color="black"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      fullWidth
                    />
                  </Col>
                  {/* <Col lg={5}>
                    <TextField
                      style={{ marginBottom: 20 }}
                      className="auth_text_field"
                      type="password"
                      label="Confirm password"
                      color="black"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      fullWidth
                    />
                  </Col> */}
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
);
}
