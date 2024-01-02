import { Box, Icon, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <Box>
      <Box display={"flex"} gap={2}>
        <Text fontSize={"sm"}>
          Developed by Person Originially from Indonesia
        </Text>
        <Box>
          <Icon mr={"1"} as={FaGithub} color="gray.500" />
          <Icon mr={"1"} as={FaLinkedin} color="gray.500" />
          <Icon mr={"1"} as={FaFacebook} color="gray.500" />
          <Icon as={FaInstagram} color="gray.500" />
        </Box>
      </Box>
      <Text>Supported by dumbways</Text>
    </Box>
  );
}
