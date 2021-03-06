import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

// Login section
export const Login: VFC = memo(() => {
  // variable section
  const [userId, setUserId] = useState("");
  const { login, loading } = useAuth();

  // function section
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const onClickLogin = () => {
    login(userId);
  };

  return (
    <Flex align={"center"} justify={"center"} height={"100vh"}>
      <Box bg={"white"} w={"sm"} p={4} borderRadius={"md"}>
        <Heading as={"h1"} size={"lg"} textAlign={"center"}>
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder={"ユーザーID"}
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            onClick={onClickLogin}
            disabled={userId === ""}
            loading={loading}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
