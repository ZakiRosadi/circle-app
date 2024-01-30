import { Api } from "@/lib/axios";
import { Avatar, Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";

type props = {
  item: any;
};

export default function Reply(props: props) {
  const [reply, setReply] = useState<any>();
  const { item } = props;
  const getReply = async () => {
    try {
      const res = await Api.get(`/reply/${item.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setReply(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReply();
    console.log(reply);
  }, []);

  return (
    <>
      <Box>
        <Flex gap={2}>
          <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Text> {reply?.user.fullname}</Text>
          <Text> {reply?.user.username}</Text>
          <Text> {item.postedAt}</Text>
        </Flex>
        <Box mt={5}>
          <Text>{item.content}</Text>
        </Box>
        <Box mt={3}>
          <Image w={"50%"} h={"200px"} src={reply?.image} />
        </Box>
        <Icon mt={5} as={CiHeart} />
      </Box>
    </>
  );
}
