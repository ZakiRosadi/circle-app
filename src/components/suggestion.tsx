import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";

export default function Suggestion() {
  const data = [
    {
      id: 1,
      avatar: "",
      fullname: "fany",
      username: "@fanypink",
      isFollowing: false,
    },
    {
      id: 2,
      avatar: "",
      fullname: "angel",
      username: "@angelkurs",
      isFollowing: true,
    },
    {
      id: 3,
      avatar: "",
      fullname: "insyiroh",
      username: "@iin",
      isFollowing: true,
    },
  ];
  return (
    <>
      <Box
        mt={"5px"}
        bg={"#1B4242"}
        border={"1px"}
        borderColor={"gray.200"}
        p={3}
        borderRadius={"5px"}
      >
        <Box>Suggested for you</Box>
        <Box>
          {data.map((item) => (
            <Box key={item.id}>
              <Flex my={3} w={"100%"} gap={2}>
                <Avatar src={item.avatar} />
                <Box>
                  <Text>{item.fullname}</Text>
                  <Text fontSize={"sm"} color={"gray.500"}>
                    {item.username}
                  </Text>
                </Box>
                <Button ml={"auto"}>Following</Button>
              </Flex>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
