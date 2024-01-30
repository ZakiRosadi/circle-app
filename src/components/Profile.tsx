import { Api } from "@/lib/axios";
import { Avatar, Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});

  const getProfile = async () => {
    const res = await Api.get("/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    // const data = res.data.data;
    setProfile(res.data.data);
  };
  useEffect(() => {
    getProfile();
  }, [profile]);
  return (
    <>
      <Box>
        <Stack
          border={"1px"}
          borderColor={"gray.200"}
          p={3}
          borderRadius={"5px"}
        >
          <Box>My Profile</Box>
          <Box
            w="100%"
            h="100px"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            position={"relative"}
          >
            <Box>
              <Avatar
                h={"100%"}
                bg={"orange.500"}
                borderRadius="full"
                boxSize={"60px"}
                mt={"60px"}
                ml={"30px"}
                position={"absolute"}
                // src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                src={profile?.profile_picture}
                name={profile?.fullname}
              />
            </Box>
          </Box>
          <Button
            colorScheme="teal"
            variant="outline"
            mt={1}
            ml={"auto"}
            display={"block"}
            borderRadius={"5px"}
          >
            Edit Profile
          </Button>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            {profile?.fullname}
          </Text>
          <Text fontSize={"xs"} fontWeight={"bold"}>
            {profile?.username}
          </Text>
          {/* <Text>{profile?.email}</Text> */}
          <Text>{profile?.profile_description}</Text>
          <Flex gap={2}>
            <Text>{profile?.follows} Following</Text>
            <Text>{profile?.followed} Followers</Text>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
