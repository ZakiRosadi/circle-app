import {
  Box,
  Button,
  Flex,
  Text,
  Icon,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { BiMoon, BiSun } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { AUTH_LOGOUT } from "@/store/slice/AuthSlice";

export default function SideBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(AUTH_LOGOUT());
    navigate("/login");
  };
  const data = [
    {
      id: 1,
      name: "home",
      icon: <FaHome />,
      link: "/",
    },
    {
      id: 2,
      name: "search",
      icon: <Icon as={FaSearch} />,
      link: "/search",
    },
    {
      id: 3,
      name: "follows",
      icon: <Icon as={FaHeart} />,
      link: "/follows",
    },
    {
      id: 4,
      name: "profile",
      icon: <Icon as={CgProfile} />,
      link: "/profile",
    },
  ];
  return (
    <>
      <Stack height={"100vh"} justifyContent={"align-items"} padding={"10px"}>
        <Box padding={"10px"}>
          <Box fontSize={"3xl"}>
            <Flex>
              <Text>
                Circle
                <Button ml={4} onClick={toggleColorMode}>
                  <Icon as={colorMode === "light" ? BiSun : BiMoon} />
                </Button>
              </Text>
            </Flex>
          </Box>

          <Box>
            {data.map((item: any) => (
              <Link to={item.link} key={item.id}>
                <Box my={5} display={"flex"} alignItems={"center"} gap={2}>
                  {item.icon}
                  <Text>{item.name}</Text>
                </Box>
              </Link>
            ))}
          </Box>

          <Button colorScheme="teal" size="md">
            Create Post
          </Button>
        </Box>
        <Button
          onClick={handleLogout}
          colorScheme="teal"
          variant="ghost"
          mt={"auto"}
        >
          <Icon as={GrLogout} />
          Logout
        </Button>
      </Stack>
    </>
  );
}
