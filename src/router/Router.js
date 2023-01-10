import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ErrorPage from "../pages/ErrorPage";
import PaginaProdutos from "../pages/PaginaProdutos";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route paph="*" element={<ErrorPage />} />
        <Route path="/produtos/:id" element={<PaginaProdutos />} />
      </Routes>
    </BrowserRouter>
  );
};
