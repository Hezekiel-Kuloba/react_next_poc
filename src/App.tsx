import "./App.css";
import { SignIn } from "./pages/sign_in";
import { Sign_up } from "./pages/sign_up";
import { Home } from "./pages/home";
import { Blogs } from "./pages/all_blogs";
import { Update_user } from "./pages/user_update";
import ProtectedRoute from "./services/protected_routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from 'react-query/devtools'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { OneBlog } from "./pages/get_blog_by_id";
import { Reset_password } from "./pages/reset_password";
import { Dashboard } from "./pages/dashboard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Sign_up />} />
        <Route path="/passwordReset" element={<Reset_password />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/update_user"
          element={
            <ProtectedRoute>
              <Update_user />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <Blogs />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:id" element={<OneBlog />} />
      </>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={5000} />
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
    </QueryClientProvider>
  );
}

export default App;
