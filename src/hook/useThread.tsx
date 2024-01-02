import { Api } from "@/lib/axios";
import IThreadPost from "@/type/Thread";
import { useState } from "react";

export default function useThread() {
  const [threadPost, setThreadPost] = useState<IThreadPost | any>({
    content: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setThreadPost({
      ...threadPost,
      [name]: files ? files[0] : value,
    });
    console.log(threadPost);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log(threadPost);

      const formData = new FormData();
      console.log(threadPost.image);

      formData.append("content", threadPost.content);
      formData.append("image", threadPost.image as any);
      console.log(formData);

      const res = await Api.post("/thread", formData, {
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
    threadPost,
    FormData,
    handleChange,
    handleSubmit,
  };
}
