import { Button, TextField, Typography } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import customTheme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Instagram, Twitter, WhatsApp } from "@mui/icons-material";

export const Footer = () => {
  return (
    <div>
      
      <ThemeProvider theme={customTheme}>
        <Container className="pt-5">
        <div className="pt-3 pb-5">
              <hr />
            </div>
          <Row>
            <Col lg={4}>
              <Button
                sx={{ borderRadius: "16px", marginBottom: "20px" }}
                color="black"
              >
                <Typography variant="h3">BlogCommerce</Typography>
              </Button>
              <Typography variant="h6">
                <div>
                  We love working with ambitious people. Lets build something
                  great together now
                </div>
              </Typography>
              <Typography
                variant="h4"
                style={{
                  fontSize: 16,
                  fontWeight: "bolder",
                  paddingTop: "15px",
                }}
              >
                <div>Subscribe to Newsletter</div>
              </Typography>
              <div className="d-flex align-items-center pt-3">
                <div>
                  <TextField sx={{
                      borderRadius: "16px",
                      width: 350,
                    }} type="email" label="Email" color="black" />
                </div>
                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="black"
                    sx={{
                      borderRadius: "16px",
                      width: "100%",
                      height: 45,
                      marginLeft: 3,
                    }}
                  >
                    <Typography variant="h5">Login</Typography>
                  </Button>
                </div>
              </div>
            </Col>
            <Col>
              <Typography
                variant="h6"
                style={{ fontSize: 16, fontWeight: "bolder" }}
              >
                <div>Product</div>
              </Typography>
              <Typography variant="h6">
                <div>Pricing</div>
              </Typography>
              <Typography variant="h6">
                <div>Case Studies</div>
              </Typography>
              <Typography variant="h6">
                <div>Reviews</div>
              </Typography>
              <Typography variant="h6">
                <div>Updates</div>
              </Typography>
              <Typography variant="h6">
                <div>Features</div>
              </Typography>
            </Col>
            <Col>
              <Typography
                variant="h6"
                style={{ fontSize: 16, fontWeight: "bolder" }}
              >
                <div>Company</div>
              </Typography>
              <Typography variant="h6">
                <div>About</div>
              </Typography>
              <Typography variant="h6">
                <div>News</div>
              </Typography>
              <Typography variant="h6">
                <div>Blog</div>
              </Typography>
              <Typography variant="h6">
                <div>Contact</div>
              </Typography>
              <Typography variant="h6">
                <div>Careers</div>
              </Typography>
            </Col>
            <Col>
              <Typography
                variant="h6"
                style={{ fontSize: 16, fontWeight: "bolder" }}
              >
                <div>Support</div>
              </Typography>
              <Typography variant="h6">
                <div>Help Center</div>
              </Typography>
              <Typography variant="h6">
                <div>Status</div>
              </Typography>
              <Typography variant="h6">
                <div>Report a bug</div>
              </Typography>
              <Typography variant="h6">
                <div>Chat Support</div>
              </Typography>
            </Col>
            <Col>
              <div>
                <Typography
                  variant="h6"
                  style={{ fontSize: 16, fontWeight: "bolder" }}
                >
                  <div>Support</div>
                </Typography>
              </div>
              <div>
                <Button
                  sx={{ borderRadius: "16px" }}
                  color="black"
                  startIcon={<MailOutlineIcon />}
                >
                  <Typography variant="h6">hezekiel@chama.design</Typography>
                </Button>
              </div>
              <div>
                <Button
                  sx={{ borderRadius: "16px" }}
                  color="black"
                  startIcon={<PhoneIcon />}
                >
                  <Typography variant="h6">0712345678</Typography>
                </Button>
              </div>
              <div>
                <Button
                  sx={{ borderRadius: "16px" }}
                  color="black"
                  startIcon={<LocationOnIcon />}
                >
                  <Typography variant="h6">Thika Rd, Nairobi</Typography>
                </Button>
              </div>
            </Col>
          </Row>
          <Col className="pt-4">
            <hr />
          </Col>
          <Row className="pt-3 pb-5">
            <Col>
              <div>
                <Typography
                  variant="h6"
                  style={{ fontSize: 16, fontWeight: "bolder" }}
                >
                  <div>2023 BlogCommerce - ALl Rights reserved</div>
                </Typography>
              </div>
            </Col>
            <Col>
              <Row>
                <Col>
                  <FacebookIcon />
                </Col>
                <Col>
                  <WhatsApp />
                </Col>
                <Col>
                  <Instagram />
                </Col>
                <Col>
                  <Twitter />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </ThemeProvider>
    </div>
  );
};
