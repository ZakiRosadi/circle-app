import { Api } from "@/lib/axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function useSuggestion() {
  const [follow, setFollow] = useState<number>(0);

  // const { id } = useParams();
  const handleFollow = async (data: any) => {
    try {
      const response = await Api.post("/follow", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUnfollow = async (id: any) => {
    try {
      const response = await Api.delete(`/follow/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      // setFollow(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    follow,
    setFollow,
    handleFollow,
    handleUnfollow,
  };
}
