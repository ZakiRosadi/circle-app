import PostReply from "@/components/PostReply";
import Reply from "@/components/Reply";
import useLike from "@/hook/useLike";
import { Api } from "@/lib/axios";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiChart, BiChat } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ThreadDetailLayout() {
  const [threadDtl, setThreadDtl] = useState<any>();

  const { id } = useParams();

  const [likeId, setLikeId] = useState<any>(0);
  const { handleClick, handleUnClick, like } = useLike();
  const userId = useSelector((state: any) => state.auth.id);

  const getThreadDtl = async () => {
    try {
      const res = await Api.get(`/thread/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setThreadDtl(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getThreadDtl();
  }, [threadDtl]);

  const dataLike = threadDtl?.like.filter((data: any) => {
    if (data.userId == userId) {
      return data;
    }
  });

  // useEffect(() => {
  //   console.log(dataLike);
  // });

  useEffect(() => {
    threadDtl?.like.filter((data: any) => {
      if (data.userId == userId) {
        return setLikeId(data.id);
      }
    });
  });

  return (
    <>
      <Box px={10} w={"100%"}>
        <Card mb={1}>
          <CardHeader>
            <Flex gap={2}>
              <Avatar
                name={threadDtl?.user?.fullname}
                src={threadDtl?.avatar}
              />
              <Heading size="sm">{threadDtl?.user?.fullname}</Heading>
              <Text color="gray.500">{threadDtl?.user?.username}</Text>
            </Flex>
            {/* <Text>{content}</Text> */}
          </CardHeader>
          <CardBody>
            <Text>{threadDtl?.content}</Text>
            <Box display={"flex"}>
              <Image
                h={"200px"}
                w={"50%"}
                objectFit={"cover"}
                src={threadDtl?.image}
              />
            </Box>
          </CardBody>

          <CardFooter gap={2}>
            <Button variant="ghost">
              {!like && dataLike?.length == 0 ? (
                <FaRegHeart onClick={() => handleClick(threadDtl?.id)} />
              ) : (
                <FaHeart onClick={() => handleUnClick(likeId)} color="red" />
              )}

              {threadDtl?.like.length}
            </Button>

            <Button variant="ghost" gap={2}>
              <BiChat /> {threadDtl?.reply.length}
            </Button>
          </CardFooter>
        </Card>
      </Box>
      <PostReply />
      {threadDtl?.reply.map((data: any) => (
        <Reply item={data} key={data.id} />
      ))}

      {/* {threadDtl?.reply.map((data: any) => (
        <PostReply key={data.id} item={data} />
      ))} */}
    </>
  );
}
