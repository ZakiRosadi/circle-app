import { Api } from "@/lib/axios";
import { AUTH_CHECK, AUTH_LOGIN } from "@/store/slice/AuthSlice";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
interface Object {
  password: string;
  email: string;
}
export default function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const [data, setData] = useState<Object>({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const saveDataUser = () => {
    const token: any = localStorage.getItem("token");
    const payload: any = jwtDecode(token);
    dispatch(AUTH_CHECK(payload.user));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await Api.post("/login", data);
      console.log(res);
      const payload = res.data;
      dispatch(AUTH_LOGIN(payload.token));
      saveDataUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return {
    data,
    handleChange,
    handleSubmit,
    saveDataUser,
    showPassword,
    handleClickShowPassword,
  };
}
