import { useContext } from "react";
import { userContext } from "../context/UserContext";

const useUserData = () => {
  const ctx = useContext(userContext);

  if (!ctx) {
    throw new Error("useUserData must be used within a userContextProvider");
  }

  return ctx.userData;
};

export default useUserData;
