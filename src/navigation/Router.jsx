import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import ProtectedRoute from "../components/ProtectedRoute";
import { Login } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route
            path='*'
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          />

          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
