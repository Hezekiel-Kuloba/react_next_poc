import { useQueryClient, useMutation, useQuery } from "react-query";
import { request } from "../utilis/axios-utilis";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export const GetBlogs = async (accessToken: any) => {
  const response = await axios.post(
    "http://profiletasks.sandbox.co.ke:8989/blog/get-all",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};

const RegisterUser = async (user: any) => {
  const response = await axios.post(
    "http://profiletasks.sandbox.co.ke:8989/register",
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

const LoginUser = async (user: any) => {
  const response = await axios.post(
    "http://profiletasks.sandbox.co.ke:8989/user/login",
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};


export const UseRegisterData = () => {
  const navigate = useNavigate();

  return useMutation((user: any) => RegisterUser(user), {
    onSuccess: (data) => {
      sessionStorage.setItem("user", JSON.stringify(data));
      console.log("Registration successful:", data);
      navigate("/"); // Redirect to the desired page after successful registration
    },
    onError: (error: any) => {
      console.error("Registration failed:", error);

      if (error.response) {
        const {
          status: responseStatus,
          error: errorMessage,
          message,
        } = error.response.data;
        let toastMessage: string;

        if (responseStatus === 406) {
          toastMessage = "Some fields are empty";
        } else if (responseStatus === 500) {
          toastMessage = message || errorMessage || "Email already registered";
        } else {
          toastMessage = "Registration failed. Please try again later.";
        }

        toast.error(toastMessage);
      } else {
        toast.error("An error occurred. Please check your network connection.");
      }
    },
  });
};

export const UseLoginData = () => {
  const navigate = useNavigate();

  return useMutation((user: any) => LoginUser(user), {
    onSuccess: (data) => {
      sessionStorage.setItem("user", JSON.stringify(data));
      console.log("Login successful:", data);
      navigate("/"); // Redirect to the desired page after successful registration
    },
    onError: (error: any) => {
      console.error("Login failed:", error);

      if (error.response) {
        const {
          status: responseStatus,
          error: errorMessage,
          message,
        } = error.response.data;
        let toastMessage: string;

        if (responseStatus === 500) {
          toastMessage = message || errorMessage || "Email already registered";
        } else {
          toastMessage = "Login failed. Please try again later.";
        }

        toast.error(toastMessage);
      } else {
        toast.error("An error occurred. Please check your network connection.");
      }
    },
  });
};
