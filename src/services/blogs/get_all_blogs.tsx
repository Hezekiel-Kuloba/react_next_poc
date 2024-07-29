import { TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Stack } from "react-bootstrap";
import customTheme from "../../components/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { GetBlogs } from "../useAPiData";

export const GetAllBlogs = () => {
  const storedUser = sessionStorage.getItem("user");
  let accessToken = "";

  if (storedUser) {
    try {
      const user = JSON.parse(storedUser);
      accessToken = user.token;
      console.log(accessToken);
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }

  const { isLoading, data, isError, error } = useQuery(
    "blog",
    () => GetBlogs(accessToken),
    {
      enabled: !!accessToken,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }

  if (!data) {
    return <div>No blog data found</div>;
  }

  interface Blog {
    id: string;
    title: string;
    content: string;
  }

  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <div>
          <Container>
            <Col className="d-flex justify-content-center"></Col>
            <Row>
              {data.map((blog: Blog) => (
                <Col
                  key={blog.id}
                  lg={4}
                  style={{
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
                      <Typography variant="h3">{blog.title} </Typography>
                    </div>
                    <div className="pt-2" style={{ height: "30%" }}>
                      <Typography variant="h4">{blog.content}</Typography>
                    </div>
                  </Stack>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </ThemeProvider>
    </div>
  );
};
