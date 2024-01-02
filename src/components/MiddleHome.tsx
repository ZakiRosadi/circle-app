import useLike from "@/hook/useLike";
import {
  Card,
  CardHeader,
  Flex,
  Avatar,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiChat } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

type Props = {
  item: any;
};

export default function MiddleHome(props: Props) {
  const { item } = props;
  const [likeId, setLikeId] = useState<any>(0);
  const { handleClick, handleUnClick, like } = useLike();
  const userId = useSelector((state: any) => state.auth.id); //to secure id

  const dataLike = item.like.filter((data: any) => {
    if (data.userId == userId) {
      return item;
    }
  });
  // useEffect(() => {

  // }, [handleClick, handleUnClick, item.like, userId]);

  useEffect(() => {
    item.like.filter((data: any) => {
      if (data.userId == userId) {
        return setLikeId(data.id);
      }
    });
  }, [item.like, userId]);

  return (
    <Card mb={4} w={"100%"}>
      <Link to={`/threadDetail/${item.id}`}>
        {/* <Link to={`/threadDetail/${id}`}> */}
        <CardHeader>
          <Flex gap={2}>
            <Avatar name={item.user?.fullname} src={item.avatar} />
            <Box>
              <Heading size="sm">{item.user?.fullname}</Heading>
              <Text color="gray.500">{item.user?.username}</Text>
            </Box>
          </Flex>
          <Text mt={"5"}>{item.content}</Text>
          {/* <Text>{content}</Text> */}
        </CardHeader>

        <CardBody>
          <Box display={"flex"}>
            {item.image ? (
              <Image
                h={"200px"}
                w={"50%"}
                objectFit={"cover"}
                src={item.image}
              />
            ) : null}
          </Box>
        </CardBody>
      </Link>

      <CardFooter gap={2}>
        <Button>
          {!like && dataLike.length == 0 ? (
            <FaRegHeart onClick={() => handleClick(item.id)} />
          ) : (
            <FaHeart onClick={() => handleUnClick(likeId)} color="red" />
          )}
          {item.like.length}
        </Button>

        <Button variant="ghost" gap={2}>
          <BiChat /> {item.reply.length}
        </Button>
      </CardFooter>
    </Card>
  );
}
