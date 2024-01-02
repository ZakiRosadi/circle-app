import { Api } from "@/lib/axios";
import { UserRegisterType } from "@/type/UserType";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useRegister() {
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState<UserRegisterType>({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormRegister({
      ...formRegister,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await Api.post("/register", formRegister);
      navigate("/login");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    formRegister,
    handleChange,
    handleSubmit,
  };
}
