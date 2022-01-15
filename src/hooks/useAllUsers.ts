import { UseMessage } from "./UseMessage";
import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/User";

export const useAllUsers = () => {
  /** var section */
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const { showMessage } = UseMessage();

  /** func section */
  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { getUsers, users, loading };
};
