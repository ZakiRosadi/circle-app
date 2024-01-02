import { Api } from "@/lib/axios";
import { Avatar, Box, Button, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
      <Stack border={"1px"} borderColor={"gray.200"} p={3} borderRadius={"5px"}>
        <Box>My Profile</Box>
        <Box
          w="100%"
          h="100px"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          position={"relative"}
        >
          <Avatar
            bg={"orange.500"}
            borderRadius="full"
            boxSize={"50px"}
            mt={"60px"}
            ml={"30px"}
            position={"absolute"}
            // src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src={profile?.profile_picture}
            name={profile?.fullname}
          />
        </Box>
        <Button
          colorScheme="teal"
          variant="outline"
          mt={1}
          ml={"auto"}
          display={"block"}
        >
          Edit Profile
        </Button>
        <Text fontSize={"lg"} fontWeight={"bold"}>
          {profile?.fullname}
        </Text>
        <Text fontSize={"xs"} fontWeight={"bold"}>
          {profile?.username}
        </Text>
        <Text>{profile?.profile_description}</Text>
      </Stack>
    </>
  );
}
