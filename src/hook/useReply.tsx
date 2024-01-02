import { Api } from "@/lib/axios";
import IProfileType from "@/type/ProfileType";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useReply() {
  const { id } = useParams();
  const [reply, setReply] = useState<IProfileType>({
    id: 0,
    content: "",
    image: "",
  });

  useEffect(() => {
    console.log(reply);
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setReply({
      ...reply,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      console.log(reply.image);

      formData.append("content", reply.content);
      formData.append("image", reply.image as any);
      console.log(formData);

      const res = await Api.post(`/reply/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    reply,
    handleChange,
    handleSubmit,
    FormData,
  };
}
