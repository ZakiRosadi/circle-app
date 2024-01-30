import useListFollow from "@/hook/useListFollow";
import useSuggestion from "@/hook/useSuggestion";
import { Api } from "@/lib/axios";
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SlUserFollow, SlUserFollowing } from "react-icons/sl";
import { useSelector } from "react-redux";

export default function Suggestion() {
  const [suggested, setSuggested] = useState<any[]>([]);

  const { handleFollow, follow, setFollow, handleUnfollow } = useSuggestion();

  const [active, setActive] = useState<number>(-1);

  const [listFollow, setListFollow] = useState<any[]>([]);

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

  const functionHandleFollow = (data: any, index: number) => {
    handleFollow(data);
    setActive(index);
  };

  const functionHandleUnfollow = (data: any) => {
    handleUnfollow(data);
    setActive(-1);
  };

  const getSuggested = async () => {
    const response = await Api.get("/userfollowed", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setSuggested(response.data.data);
  };

  useEffect(() => {
    getFollow();
    // listFollow?.map((item: any) => {
    //   return console.log("itemconsoleloggggggg", item.followedId);
    // });
  }, [listFollow]);

  useEffect(() => {
    getSuggested();
  }, []);

  return (
    <>
      <Box border={"1px"} borderColor={"gray.200"} p={4} borderRadius={"md"}>
        {suggested.map((item: any, index: number) => {
          const data = {
            followedId: item.id,
          };

          const filterListfollow = listFollow?.filter((dataFollow) => {
            return dataFollow.followedId === item.id;
          });
          console.log(filterListfollow);

          const isActive = active === index;
          return (
            <Box key={item.id}>
              <Flex my={3} w={"100%"} gap={2}>
                <Avatar src={item?.avatar} />
                <Box>
                  <Text>{item?.fullname}</Text>
                  <Text fontSize={"sm"} color={"gray.500"}>
                    {item?.username}
                  </Text>
                </Box>

                {isActive ? (
                  <Button
                    ml={"auto"}
                    bg={"green.500"}
                    color={"green"}
                    onClick={() =>
                      functionHandleUnfollow(filterListfollow[0].id)
                    }
                  >
                    <SlUserFollowing />
                  </Button>
                ) : (
                  <Button
                    ml={"auto"}
                    bg={"blue.500"}
                    color={"blue"}
                    gap={2}
                    onClick={() => functionHandleFollow(data, index)}
                  >
                    <SlUserFollow />
                  </Button>
                )}
              </Flex>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
