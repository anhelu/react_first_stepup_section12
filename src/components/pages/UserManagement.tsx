import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../organism/user/UserCard";

export const UserManagement: VFC = () => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => {
    getUsers();
  }, []);

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
                    imageUrl={"https://source.unsplash.com/random"}
                    userName={user.username}
                    fullName={user.name}
                  />
                </WrapItem>
              ))
            }
          </Wrap>
        )
      }
    </>
  );
};
