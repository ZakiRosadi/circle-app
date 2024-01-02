import { Avatar, Box, Flex, Icon, Input } from "@chakra-ui/react";
import ButtonComponent from "./Button";
import { SlPicture } from "react-icons/sl";
import { useRef } from "react";
import useReply from "@/hook/useReply";

//

export default function PostReply() {
  const { reply, handleChange, handleSubmit } = useReply();

  const imageRef = useRef<HTMLInputElement>(null);
  const HandleImageRef = () => {
    imageRef.current?.click();
  };

  return (
    <>
      <Box>
        <form
          encType="multipart/form-data"
          // method="post"
          onSubmit={handleSubmit}
        >
          <Flex alignItems={"center"} gap={"4px"}>
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Input
              onChange={handleChange}
              name="content"
              value={reply.content}
              placeholder="say something as a reply"
              size="md"
            />

            <Input
              name="image"
              onChange={handleChange}
              ref={imageRef}
              type="file"
              hidden
            />
            <Icon
              // value={threadPost.image}
              // name="image"
              fontSize={"2xl"}
              height={"100px"}
              cursor={"pointer"}
              onClick={HandleImageRef}
              as={SlPicture}
            />

            <ButtonComponent type="submit" Title="Post" />
          </Flex>
        </form>
      </Box>
    </>
  );
}
