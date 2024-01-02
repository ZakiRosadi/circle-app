import Home from "../src/page/home";
import MainLayout from "./layout/mainLayout";
import { Routes, Route } from "react-router-dom";
import Threaddetaill from "./page/Threaddetaill";
import Register from "./page/Register";
import Login from "./page/Login";
import useLogin from "./hook/useLogin";
import { useEffect } from "react";

export default function App() {
  const { saveDataUser } = useLogin();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveDataUser();
    }
  }, []);

  //put logic here
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/threadDetail/:id" element={<Threaddetaill />}></Route>
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}
