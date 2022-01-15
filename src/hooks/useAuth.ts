import { UseMessage } from "./UseMessage";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/User";

/** obj section */
export const useAuth = () => {
  /** var section */
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = UseMessage();

  /** fun section */
  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            // login success
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            // login error
            showMessage({
              title: "ユーザーが見つかりません",
              status: "error",
            });
          }
        })
        .catch((err) => {
          showMessage({ title: "ログインできません", status: "error" });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [history, showMessage]
  );

  /** main section */
  return { login, loading };
};
