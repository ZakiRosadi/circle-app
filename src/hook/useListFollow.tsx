import { Api } from "@/lib/axios";
import { useState } from "react";

export default function useListFollow() {
  const [listFollow, setListFollow] = useState<any[]>([]);
  const [listFollowed, setListFollowed] = useState<any[]>([]);
  const getFollow = async () => {
    try {
      const res = await Api.get("/following", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res.data.data);

      setListFollow(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFollowed = async () => {
    const res = await Api.get("/followed", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setListFollowed(res.data.data);
  };
  return {
    listFollow,
    getFollow,
    listFollowed,
    getFollowed,
  };
}
