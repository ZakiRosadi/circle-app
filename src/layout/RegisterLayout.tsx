import ButtonComponent from "@/components/Button";
import useRegister from "@/hook/useRegister";
import { Box, Heading, Input, Text, Link, FormControl } from "@chakra-ui/react";

export default function RegisterLayout() {
  const { handleChange, handleSubmit } = useRegister();
  return (
    <Box
      w={"100%"}
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box w={"30%"}>
        <Heading as="h2" size="md">
          CIRCLE
        </Heading>
        <Text fontSize="lg">Create Account Circle</Text>

        <FormControl onClick={handleSubmit}>
          <Input
            onChange={handleChange}
            name="username"
            mt={"3"}
            placeholder="Username"
            size="md"
          ></Input>
          <Input
            onChange={handleChange}
            name="fullname"
            mt={"3"}
            placeholder="Full Name"
            size="md"
          />
          <Input
            onChange={handleChange}
            name="email"
            mt={"3"}
            placeholder="Email"
            size="md"
          />
          <Input
            onChange={handleChange}
            name="password"
            mt={"3"}
            mb={"3"}
            placeholder="Password"
            size="md"
          />
          <ButtonComponent Title="Create Account" />
        </FormControl>

        <Box display={"flex"} mt={"3"} gap={2}>
          <Text fontSize={"sm"}>Already have an account?</Text>
          <Link color={"green"}>Login</Link>
        </Box>
      </Box>
    </Box>
  );
}
