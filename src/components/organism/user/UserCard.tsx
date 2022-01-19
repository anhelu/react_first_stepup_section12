import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import React, { memo, ReactNode, VFC } from "react";
import { User } from "../../../types/api/User";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box
      w={"260px"}
      h={"260px"}
      bg={"white"}
      borderRadius={"10px"}
      shadow={"md"}
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign={"center"}>
        <Image
          borderRadius={"full"}
          boxSize={"160px"}
          src={imageUrl}
          alt="プロフィール画像"
          m={"auto"}
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
