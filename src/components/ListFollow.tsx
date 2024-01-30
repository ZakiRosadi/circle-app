import useListFollow from "@/hook/useListFollow";
import useSuggestion from "@/hook/useSuggestion";
import { Api } from "@/lib/axios";
import {
  Avatar,
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function ListFollow() {
  // const [listFollowed, setListFollowed] = useState<any>([]);
  // const [listFollowing, setListFollowing] = useState<any>([]);

  // const { handleUnfollow } = useSuggestion();

  // const functionHandleUnfollow = (data: any) => {
  //   handleUnfollow(data);
  // };

  // const getListFollowed = async () => {
  //   try {
  //     const res = await Api.get("/followed", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     });
  //     setListFollowed(res.data.data);
  //     // console.log(res.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getListFollowing = async () => {
  //   try {
  //     const res = await Api.get("/following", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     });
  //     setListFollowing(res.data.data);
  //     console.log(res.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getListFollowed();
  //   getListFollowing();
  // }, []);

  const { listFollow, getFollow, listFollowed, getFollowed } = useListFollow();
  const { handleUnfollow } = useSuggestion();
  const functionHandleUnfollow = (data: any) => {
    handleUnfollow(data);
  };

  useEffect(() => {
    getFollow();
    getFollowed();
  }, []);
  return (
    <>
      <Tabs colorScheme="whatsapp">
        <TabList>
          <Tab w={"50%"} fontFamily={"Inter"}>
            Followers
          </Tab>
          <Tab w={"50%"} fontFamily={"Inter"}>
            Following
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box overflow={"auto"} w={"100%"}>
              {listFollowed?.map((item: any, index: number) => (
                <Box border={"1px"} borderColor={"gray.200"} p={2} key={index}>
                  <Box
                    key={item?.user.id}
                    display={"flex"}
                    gap={2}
                    alignItems={"center"}
                    mt={4}
                  >
                    <Avatar src={item?.user.avatar} />

                    <Box>
                      <Text>{item?.user.fullname}</Text>
                      <Text>{item?.user.username}</Text>
                    </Box>
                    <Button colorScheme="teal" ml={"auto"}>
                      {item?.isFollowing ? "Following" : "Follow"}
                    </Button>
                  </Box>
                  <Text mt={4}>{item?.user.profile_description}</Text>
                </Box>
              ))}
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>
              {listFollow.map((item: any, index: number) => (
                <Box border={"1px"} borderColor={"gray.200"} p={2} key={index}>
                  <Box
                    key={item?.followed.id}
                    display={"flex"}
                    gap={2}
                    alignItems={"center"}
                    mt={4}
                  >
                    <Avatar>{item?.followed.profile_picture}</Avatar>
                    <Box>
                      <Text>{item?.followed.fullname}</Text>
                      <Text>{item?.followed.username}</Text>
                    </Box>
                    <Button
                      onClick={() => functionHandleUnfollow(item.id)}
                      colorScheme="teal"
                      ml={"auto"}
                    >
                      Unfollow
                    </Button>
                  </Box>
                  <Text mt={4}>{item?.followed.profile_description}</Text>
                </Box>
              ))}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
