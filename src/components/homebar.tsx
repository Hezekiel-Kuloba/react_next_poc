import Container from "react-bootstrap/Container";
import { Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./theme";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import EastIcon from "@mui/icons-material/East";
import "../styles.css";

export const Homebar = () => {
  return (
    <>
      {/* <CssBaseline /> */}
      <ThemeProvider theme={customTheme}>
        <div>
          <Container
            className="pageBackground d-flex justify-content-center align-items-center"
            style={{ height: "500px", textAlign: "center" }}
          >
            <div className="pt-3 pb-3">
              <hr />
            </div>
            <Stack gap={2}>
              <div className="pt-3"></div>
              <div className="pt-4"></div>

              <div className="pt-5 d-flex justify-content-center">
                <Col lg={8}>
                <Typography variant="h1">
                  Mastering UI Elements: A Practical Guide for Designers{" "}
                </Typography>
                </Col>
              </div>
              {/* <div className="p-3">
              <Typography variant="h3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, odit. Ab, similique quae obcaecati ea, animi at, esse
                nostrum mollitia dolores tempora tenetur? Dolore eveniet,
                distinctio fugit quidem debitis doloremque.
              </Typography>
            </div> */}
              <div className="p-4">
                <Button
                  sx={{ borderRadius: "16px" }}
                  variant="contained"
                  color="black"
                  size="large"
                  endIcon={<EastIcon />}
                >
                  <Typography variant="h5">Getting Started</Typography>
                </Button>
              </div>
              {/* <div className="p-3">
              <Typography variant="h4">Small Text</Typography>
            </div> */}
            </Stack>
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
};
