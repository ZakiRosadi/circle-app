import ButtonComponent from "@/components/Button";
import {
  Box,
  Heading,
  Input,
  Text,
  Link,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import useLogin from "@/hook/useLogin";

export default function LoginLayout() {
  const {
    data,
    handleChange,
    handleSubmit,
    showPassword,
    handleClickShowPassword,
  } = useLogin();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"700px"}
    >
      <Box w={"30%"}>
        <Heading color={"green"} mb={"3"}>
          Login
        </Heading>

        <Text>Sign in to your account</Text>

        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            value={data.email}
            name="email"
            mt={"3"}
            placeholder="Email"
          />
          <InputGroup>
            <Input
              onChange={handleChange}
              value={data.password}
              name="password"
              type={showPassword ? "text" : "password"}
              mt={"3"}
              placeholder="Password"
            />
            <InputRightElement>
              <Button onClick={handleClickShowPassword} mt={6}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Text mt={"3"} mb={"3"}>
            Forgot your password?
          </Text>

          <ButtonComponent type="submit" Title="Login" />
        </form>

        <Box display={"flex"} mt={"3"} gap={2}>
          <Text fontSize={"sm"}>Already have an account?</Text>
          <Link color={"green"}>Login</Link>
        </Box>
      </Box>
    </Box>
  );
}
