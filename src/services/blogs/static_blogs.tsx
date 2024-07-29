import { Container, Row, Col, Stack } from "react-bootstrap";
import "../../styles.css";
import { Button, Typography } from "@mui/material";
import customTheme from "../../components/theme";
import { ThemeProvider } from "@mui/material/styles";

export const StaticBlogs  = () => {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Container className="pt-5">
          <Row>
          <div className="pt-3 pb-3">
              <hr />
            </div>
            <Col>
              <Typography variant="h3">Recent Posts</Typography>
            </Col>
            <Col lg={2}>
                    <Button
                      style={{ borderRadius: "16px", width: "120px", height: "40px" }}
                      variant="contained"
                      color="black"
                    >
                      <Typography variant="h5">All Posts</Typography>
                    </Button>
                  </Col>
           
          </Row>
          <Row>
            <Col
              lg={4}
              style={{
                // backgroundColor: "red",
                height: "500px",
                overflow: "hidden",
                paddingTop: "20px",
                wordWrap: "break-word",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Stack gap={3}>
                <div style={{ height: "50%" }} className="blogImage"></div>
                <div className="pt-2" style={{ height: "20%" }}>
                  <Typography variant="h3">
                    Mastering UI Elements: A Practical Guide for Designers
                  </Typography>
                </div>
                <div className="pt-2" style={{ height: "30%" }}>
                  <Typography variant="h4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    esse consequuntur enim magnam deserunt reprehenderit, id quo
                    doloribus quisquam, ipsa quia cumque repudiandae pariatur
                    sit numquam quae adipisci necessitatibus perspiciatis.
                  </Typography>
                </div>
              </Stack>
            </Col>
            <Col
              lg={4}
              style={{
                // backgroundColor: "red",
                height: "500px",
                overflow: "hidden",
                paddingTop: "20px",
                wordWrap: "break-word",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Stack gap={3}>
                <div style={{ height: "50%" }} className="blogImage"></div>
                <div className="pt-2" style={{ height: "20%" }}>
                  <Typography variant="h3">
                    Mastering UI Elements: A Practical Guide for Designers
                  </Typography>
                </div>
                <div className="pt-2" style={{ height: "30%" }}>
                  <Typography variant="h4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    esse consequuntur enim magnam deserunt reprehenderit, id quo
                    doloribus quisquam, ipsa quia cumque repudiandae pariatur
                    sit numquam quae adipisci necessitatibus perspiciatis.
                  </Typography>
                </div>
              </Stack>
            </Col>
            <Col
              lg={4}
              style={{
                // backgroundColor: "red",
                height: "500px",
                overflow: "hidden",
                paddingTop: "20px",
                wordWrap: "break-word",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Stack gap={3}>
                <div style={{ height: "50%" }} className="blogImage"></div>
                <div className="pt-2" style={{ height: "20%" }}>
                  <Typography variant="h3">
                    Mastering UI Elements: A Practical Guide for Designers
                  </Typography>
                </div>
                <div className="pt-2" style={{ height: "30%" }}>
                  <Typography variant="h4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    esse consequuntur enim magnam deserunt reprehenderit, id quo
                    doloribus quisquam, ipsa quia cumque repudiandae pariatur
                    sit numquam quae adipisci necessitatibus perspiciatis.
                  </Typography>
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
        <Container>
          <Col className="pt-5 d-flex justify-content-center">
            <Typography variant="h3">Recent Posts</Typography>
          </Col>
          <div className="pt-3 pb-3">
              <hr />
            </div>          
          <Row className="pt-5">
            <Col>
              <div>
                <img className="newsImage" src="./Bg13.jpg" />
              </div>
            </Col>
            <Col>
              <div className="news">
                <div>
                  <Typography variant="h3">
                    Mastering UI Elements: A Practical Guide for Designers
                  </Typography>
                </div>
                <div className="pt-3">
                  <Typography variant="h4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    esse consequuntur enim magnam deserunt reprehenderit, id quo
                    doloribus quisquam, ipsa quia cumque repudiandae pariatur
                    sit numquam quae adipisci necessitatibus perspiciatis.
                  </Typography>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </ThemeProvider>
    </>
  );
};
