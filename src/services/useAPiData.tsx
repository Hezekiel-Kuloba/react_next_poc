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

const UpdateUser = async (accessToken: any, user_data: any) => {
  const response = await axios.post(
    "http://profiletasks.sandbox.co.ke:8989/user/update",
    user_data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
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
  const queryClient = useQueryClient();

  return useMutation((user: any) => RegisterUser(user), {
    onSuccess: (data) => {
      queryClient.setQueryData("user", data);
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
  const queryClient = useQueryClient();

  return useMutation((user: any) => LoginUser(user), {
    onSuccess: (data) => {
      queryClient.setQueryData("user", data);
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

// export const UseGetUser = () => {
//   return useQuery('user', async () => {
//     // Fetch the user data from the cache
//     const queryClient = useQueryClient();
//     const userCache = await queryClient.getQueryData('user');
//     if (userCache) {
//       console.log(userCache)
//       return userCache;
//     }
//   }, {
//     staleTime: 60 * 60 * 1000, // Cache the user data for 1 hour
//     cacheTime: 60 * 60 * 24 * 7 * 1000, // Keep the cache for 1 week
//   });
// };

export const UseUpdateUserData = () => {

  interface UserData {
    token: string;
    // Other properties (firstName, lastName, etc.) go here
  }

  const queryClient = useQueryClient();
  
  const { data } = useQuery<UserData>("user");

  const user_cache = data;

  const accessToken = user_cache?.token

  return useMutation((user_data) => UpdateUser(accessToken, user_data), {
    onSuccess: (data) => {
      console.log("Update successful:", data);
      queryClient.setQueryData("user", data);
      toast.success("Details updated succesfully");
    },
    onError: (error: any) => {
      console.error("Update failed:", error);

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
          toastMessage = "Update failed. Please try again later.";
        }

        toast.error(toastMessage);
      } else {
        toast.error("An error occurred. Please check your network connection.");
      }
    },
  });
};
