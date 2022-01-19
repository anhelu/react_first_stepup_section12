import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserCard } from "../organism/user/UserCard";
import { UserDetailModal } from "../organism/user/UserDetailModal";

export const UserManagement: VFC = () => {
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectUser();

  useEffect(() => {
    getUsers();
  }, []);

  const onCLickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
      onOpen();
    },
    [users, onSelectUser, onOpen]
  );

  return (
    <>
      {
        /** ts area */
        loading ? (
          <Center h={"100vh"}>
            <Spinner />
          </Center>
        ) : (
          <Wrap p={{ base: 4, md: 10 }}>
            {
              /** ts area */
              users.map((user) => (
                <WrapItem key={user.id} mx={"auto"}>
                  <UserCard
                    id={user.id}
                    imageUrl={"https://source.unsplash.com/random"}
                    userName={user.username}
                    fullName={user.name}
                    onClick={onCLickUser}
                  />
                </WrapItem>
              ))
            }
          </Wrap>
        )
      }
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </>
  );
};
