import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./theme";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { grey } from "@mui/material/colors";
import { EmailOutlined } from "@mui/icons-material";
import { useQuery, useQueryClient } from "react-query";

export const NavBar: React.FC = () => {
  // const userString = sessionStorage.getItem("user");
  // const user = userString ? JSON.parse(userString) : null;

  const [user, setUser] = useState<UserData | null>(null);
  const [hasLoggedOut, setHasLoggedOut] = useState(false);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  interface UserData {
    id: number;
    email: string;
    firstName: string;
    // Other properties (firstName, lastName, etc.) go here
  }

  const { data } = useQuery<UserData>("user", {
    // cacheTime: 60 * 1000 * 60, // Cache the user data for 30 seconds
    onSuccess: (data) => {
      // Handle successful data fetching
      setUser(data);
    },
    onError: (error) => {
      // Handle error scenarios
      // logoutAndRedirect();
      // setHasLoggedOut(true);
      console.error("Error fetching user data:", error);
    },
  });

  const user_cache = data;

  const email = user_cache?.email
  const firstName = user_cache?.firstName
  const firstCharacter = email?.charAt(0);

  const logoutAndRedirect = () => {
    // Clear user data or tokens as needed
    // This could involve setting localStorage items to null or clearing cookies
    setUser(null);
    queryClient.setQueryData('user', null);    // Redirect to login page
    navigate("/login");
  };


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Container fluid className="pt-5 pb-4 w-100">
          <Row>
            <Col lg={2} className="px-5">
              <div className=" d-flex justify-content-start">
                <Button sx={{ borderRadius: "16px" }} color="black">
                  <Link to="/home" style={{ textDecoration: "none" }}>
                    <Typography variant="h3">BlogCommerce</Typography>
                  </Link>
                </Button>
              </div>
            </Col>

            <Col className="d-flex align-items-center justify-content-center">
              <div className="d-flex justify-content-center">
                <Row>
                  <Col lg={3}>
                    <Button sx={{ borderRadius: "16px" }} color="black">
                      <Link to="/" style={{ textDecoration: "none" }}>
                        <Typography variant="h4">Home</Typography>
                      </Link>
                    </Button>
                  </Col>
                  <Col lg={3}>
                    <Button sx={{ borderRadius: "16px" }} color="black">
                      <Link to="/blogs" style={{ textDecoration: "none" }}>
                        <Typography variant="h4">Blogs</Typography>
                      </Link>
                    </Button>
                  </Col>
                  <Col lg={3}>
                    <Button sx={{ borderRadius: "16px" }} color="black">
                      <Link to="/home" style={{ textDecoration: "none" }}>
                        <Typography variant="h4">Contact</Typography>
                      </Link>
                    </Button>
                  </Col>
                  <Col lg={3}>
                    <Button sx={{ borderRadius: "16px" }} color="black">
                      <Link to="/home" style={{ textDecoration: "none" }}>
                        <Typography variant="h4">About</Typography>
                      </Link>
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={3} className="px-5">
              <div className="d-flex justify-content-center">
                <Row className="d-flex align-items-center">
                  {user_cache ? (
                    <>
                      {/* <Col>
                        <Button
                          sx={{ borderRadius: "16px" }}
                          color="black"
                          aria-controls={open ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          <Typography variant="h4">
                              {user.email || user.email}
                              </Typography>
                        </Button>
                      </Col> */}
                      <Col>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                        >
                          {/* <Tooltip title="Account settings"> */}
                          <IconButton
                            onClick={handleClick}
                            sx={{ ml: 2 }}
                            size="large"
                            aria-controls={open ? "account-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                          >
                            <Avatar
                              sx={{
                                bgcolor: grey[900],
                                width: 40,
                                height: 40,
                              }}
                            >
                              {firstCharacter}
                            </Avatar>
                          </IconButton>
                          {/* </Tooltip> */}
                        </Box>
                        <Menu
                          anchorEl={anchorEl}
                          id="account-menu"
                          open={open}
                          onClose={handleClose}
                          onClick={handleClose}
                          PaperProps={{
                            elevation: 0,
                            sx: {
                              overflow: "visible",
                              filter:
                                "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                              mt: 1.5,
                              "& .MuiAvatar-root": {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                              },
                              "&::before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                              },
                            },
                          }}
                          transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                          }}
                          anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                          }}
                        >
                          <MenuItem onClick={handleClose}>
                            <Avatar /> {firstName}
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                              <EmailOutlined />
                            </ListItemIcon>
                            {email}
                          </MenuItem>
                          <Divider />
                          <Link
                            style={{ color: "black", textDecoration: "none" }}
                            to="/update_user"
                          >
                            <MenuItem onClick={handleClose}>
                              <ListItemIcon>
                                <PersonAdd fontSize="small" />
                              </ListItemIcon>
                              Update account
                            </MenuItem>
                          </Link>
                          <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                              <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                          </MenuItem>
                          <MenuItem onClick={logoutAndRedirect}>
                            <ListItemIcon>
                              <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                          </MenuItem>
                        </Menu>
                      </Col>
                      {/* <Col>
                        <Button
                          style={{
                            borderRadius: "16px",
                            width: "130px",
                            height: "40px",
                          }}
                          variant="contained"
                          color="black"
                          startIcon={<LogoutIcon />}
                          onClick={handleLogout}
                        >
                          <Link
                            to="/register"
                            style={{ textDecoration: "none" }}
                          >
                            <Typography variant="h5">Logout</Typography>
                          </Link>
                        </Button>
                      </Col> */}
                    </>
                  ) : (
                    <>
                      <Col>
                        <Button
                          sx={{ borderRadius: "16px" }}
                          color="black"
                          startIcon={<LoginIcon />}
                        >
                          <Link to="/login" style={{ textDecoration: "none" }}>
                            <Typography variant="h4">Login</Typography>
                          </Link>
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          style={{
                            borderRadius: "16px",
                            width: "100px",
                            height: "35px",
                          }}
                          variant="contained"
                          color="black"
                        >
                          <Link
                            to="/register"
                            style={{ textDecoration: "none" }}
                          >
                            <Typography variant="h5">Register</Typography>
                          </Link>
                        </Button>
                      </Col>
                    </>
                  )}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </ThemeProvider>
    </>
  );
};
