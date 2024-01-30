import { useEffect, useState } from "react";
import { GridItem } from "@chakra-ui/react";
import { Api } from "@/lib/axios";
import MiddleHome from "@/components/MiddleHome";
import PostThread from "@/components/PostThread";
import IProfileType from "@/type/ProfileType";
export default function Home() {
  const [thread, setThread] = useState<IProfileType[]>([]);

  const getThread = async () => {
    const res = await Api.get("/thread", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setThread(res.data.data);
  };
  useEffect(() => {
    getThread();
    console.log(thread);
  }, []);

  return (
    <>
      <GridItem>
        <PostThread />
        {thread.map((data: any) => (
          <MiddleHome item={data} key={data.id} />
        ))}
      </GridItem>
    </>
  );
}
