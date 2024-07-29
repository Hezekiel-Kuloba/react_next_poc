import { Button, TextField, Typography } from "@mui/material";
import customTheme from "../../components/theme";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "react-bootstrap/Stack";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../styles.css";
import { useMutation } from "react-query";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseLoginData } from "../useAPiData";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
});

interface IFormInput {
  email: string;
}

export const Forgot_password = () => {
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
              <form
              //   onSubmit={handleSubmit()}
              >
                <Stack gap={1}>
                  <div className="pt-3"></div>
                  <div className="pt-5"></div>
                  <div>
                    <Typography variant="h3">Forgot your password ?</Typography>
                  </div>
                  <div>
                    <Typography variant="h4" className="pt-2">
                      Enter your email to receive a password reset link
                    </Typography>
                  </div>

                  <div className="pt-4 d-flex justify-content-center">
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

                  <div className="pt-3 d-flex justify-content-center">
                    <Col lg={8}>
                      <Button
                        className="authButton"
                        type="submit"
                        variant="contained"
                        color="black"
                        sx={{ borderRadius: "16px", width: "100%", height: 45 }}
                      >
                        <Typography variant="h5">Reset password</Typography>
                      </Button>
                    </Col>
                  </div>
                  <div>
                    <Typography variant="h4" className="pt-3">
                      Don't have an account ?
                      <span>
                        <Button
                          sx={{
                            borderRadius: "16px",
                            marginBottom: "5px",
                            textDecoration: "underline",
                          }}
                          color="black"
                        >
                          <Link to="/passwordReset">
                            <Typography variant="h4" style={{textDecoration: 'underline'}}>
                              Register
                            </Typography>
                          </Link>
                        </Button>
                      </span>
                    </Typography>
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
