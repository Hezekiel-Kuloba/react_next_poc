import { Button, TextField, Typography } from "@mui/material";
import customTheme from "../../components/theme";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "react-bootstrap/Stack";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../styles.css";
// import { useMutation } from "react-query";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseLoginData } from "../useAPiData";
import { useQueryClient } from "react-query";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required"),
});

interface IFormInput {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const { mutate: LoginUser, isLoading, isError, error } = UseLoginData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: any = (data: any) => {
    LoginUser(data);
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
                  <div className="pt-3"></div>
                  <div className="pt-5"></div>
                  <div>
                    <Typography variant="h3">Welcome to blogCommerce</Typography>
                  </div>
                  <div>
                    <Typography variant="h3">Login To See All Blogs</Typography>
                  </div>
                  <div>
                    <Typography variant="h4" className="pt-5">
                      Don't you have an account
                      <span>
                        <Button
                          sx={{
                            borderRadius: "16px",
                            marginBottom: "5px",
                            textDecoration: "underline",
                          }}
                          color="black"
                        >
                          <Link to="/register">
                            <Typography
                              variant="h4"
                              style={{ textDecoration: "underline" }}
                            >
                              Create an account
                            </Typography>
                          </Link>
                        </Button>
                      </span>
                    </Typography>
                  </div>

                  <div className="pt-3 d-flex justify-content-center">
                    <Col lg={8}>
                      <TextField
                        style={{ marginBottom: 20 }}
                        className="auth_text_field"
                        type="email"
                        label="Email"
                        color="black"
                        fullWidth
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    </Col>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Col lg={8}>
                      <TextField
                        style={{ marginBottom: 20 }}
                        className="auth_text_field"
                        type="password"
                        label="Password"
                        color="black"
                        fullWidth
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        // value={password}
                        // onChange={(event) => setPassword(event.target.value)}
                      />
                    </Col>
                  </div>

                  <div className="pt-1 d-flex justify-content-center">
                    <Col lg={8}>
                      <Button
                        className="authButton"
                        type="submit"
                        variant="contained"
                        color="black"
                        sx={{ borderRadius: "16px", width: "100%", height: 45 }}
                      >
                        <Typography variant="h5">Login</Typography>
                      </Button>
                    </Col>
                  </div>
                  <div className="d-flex justify-content-end pt-3">
                    <Col lg={8}>
                      <Button
                        sx={{
                          borderRadius: "16px",
                          marginBottom: "5px",
                          textDecoration: "underline",
                        }}
                        color="black"
                      >
                        <Link to="/passwordReset">
                          <Typography
                            variant="h4"
                            style={{ textDecoration: "underline" }}
                          >
                            Forgot password
                          </Typography>
                        </Link>
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
