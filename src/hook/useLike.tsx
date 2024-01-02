import { Api } from "@/lib/axios";
import { useState } from "react";
export default function useLike() {
  //   const { id } = useParams();

  // const headers = {
  //   "Content-Type": "application/json",
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // };

  const [like, setLike] = useState<boolean>(false);

  const handleClick = async (id: string) => {
    try {
      const response = await Api.post(
        `/like/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(response);
      setLike(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnClick = async (id: string) => {
    try {
      const response = await Api.delete(`/like/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      setLike(false);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    handleClick,
    handleUnClick,
    like,
    setLike,
  };
}
