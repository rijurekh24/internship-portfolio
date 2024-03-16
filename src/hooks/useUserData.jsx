import { useContext } from "react";
import { userContext } from "../context/UserContext";

const useUserData = () => {
  const ctx = useContext(userContext);
  const userData = ctx.userData;

  return { userData };
};

export default useUserData;
