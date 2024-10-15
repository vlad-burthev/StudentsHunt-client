import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import LoginPage from "@/pages/LoginPage/LoginPage";
import Layout from "@/layout/Layout";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";
import HomePage from "@/pages/HomePage/HomePage";

interface RouterProps {}

const Router: FC<RouterProps> = () => {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={routes.studentLogin} element={<LoginPage />} />
        <Route path={routes.companyLogin} element={<LoginPage />} />
        <Route path={routes.universityLogin} element={<LoginPage />} />
        <Route path={routes.recruiterLogin} element={<LoginPage />} />
        <Route path={routes.companyReg} element={<RegisterPage />} />
        <Route path={routes.studentReg} element={<RegisterPage />} />
        <Route path={routes.universityReg} element={<RegisterPage />} />

        <Route path="*" element={<h1>'NOT FOUND'</h1>} />
      </Routes>
    </>
  );
};

export default Router;
