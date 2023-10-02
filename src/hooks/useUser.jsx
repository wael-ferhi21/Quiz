import { useContext } from "react";
import { userContext } from "../context/userContext";

const useUser = () => {
  const user = useContext(userContext);
  if (!user) {
    throw Error("user context doesn't exist inside userProvider");
  }
  return user;
};

export default useUser;
