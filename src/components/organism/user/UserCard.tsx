import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import React, { memo, ReactNode, VFC } from "react";

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName } = props;
  return (
    <Box
      w={"260px"}
      h={"260px"}
      bg={"white"}
      borderRadius={"10px"}
      shadow={"md"}
    >
      <Stack textAlign={"center"}>
        <Image
          borderRadius={"full"}
          boxSize={"160px"}
          src={imageUrl}
          alt="プロフィール画像"
          m={"auto"}
          p={4}
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        />
        <Text fontSize={"sm"} fontWeight={"gray"}>
          {userName}
        </Text>
        <Text fontSize={"sm"} color={"gray"}>
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
