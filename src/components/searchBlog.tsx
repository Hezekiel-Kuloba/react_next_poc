import React from "react";
import { TextField, Typography } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./theme";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export const SearchBlog = () => {
  interface Blog {
    id: string;
    title: string;
    content: string;
  }

  const [searchText, setSearchText] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [accessToken, setAccessToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    console.log(storedUser);
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setAccessToken(user.token);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  useEffect(() => {
    let timeout;

    const searchBlogs = async () => {
      if (!accessToken) return;

      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        };
        const response = await fetch(
          "http://profiletasks.sandbox.co.ke:8989/blog/search",
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
              text: searchText,
            }),
          }
        );
        if (response.ok) {
          const data: Blog[] = await response.json();
          setBlogs(data);
        } else {
          console.error("Error fetching blogs:", response.status);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      searchBlogs();
    }, 500);

    return () => clearTimeout(timeout);
  }, [accessToken, searchText]);

  const handleSearch = (event: any) => {
    setSearchText(event.target.value);
  };


  const handleViewBlog = (id: string) => {
    navigate(`/blog/${id}`);
  };
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <div>
          <Container>
            <Col className="d-flex justify-content-center">
              <div>
                <TextField
                  type="search"
                  color="black"
                  label="Search blog"
                  value={searchText}
                  onChange={handleSearch}
                  style={{
                    width: "1000px",
                    marginBottom: "16px",
                    borderRadius: 20,
                  }}
                  startIcon={<SearchOutlined />}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '30px', // Set the desired border radius value
                    },
                  }}
                />
              </div>
            </Col>
            <Row>
              {blogs.map((blog) => (
                <Col
                  onClick={() => handleViewBlog(blog.id)}
                  key={blog.id}
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
