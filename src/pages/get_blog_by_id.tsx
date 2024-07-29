import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";

interface Blog {
  title: string;
  content: string;
  // Add any other properties you want to display
}

export const OneBlog: React.FC = () => {
  const { id } = useParams<{ id?: string }>(); // Note the optional type for id
  const [blog, setBlog] = useState<Blog | null>(null);
  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setAccessToken(user.token);
        if (id) {
          fetchBlogById(user.token, id);
        } else {
          console.error("Blog ID is missing.");
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, [id]);

  const fetchBlogById = async (token: string, id: string) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      };

      const response = await fetch(
        `http://profiletasks.sandbox.co.ke:8989/blog/get`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            id: id,
          }),
        }
      );

      if (response.ok) {
        const data: Blog = await response.json();
        setBlog(data);
      } else {
        console.error("Error fetching blog:", response.status);
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar/>
      <div>
        <h2>
          <span>Blog Title: </span>
          {blog.title}
        </h2>
        <h2>
          <span>Blog Content: </span>
          {blog.content}
        </h2>
        {/* Add any other task details you want to display */}
      </div>
      {/* Add any other blog details you want to display */}
      <Footer/>
    </div>
  );
};
