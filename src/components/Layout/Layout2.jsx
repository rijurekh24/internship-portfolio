import Header2 from "../Header/Header2";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import CustomCursor from "../CustomCursor/CustomCursor";
import Axios from "axios";

const Layout2 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const ctx = useContext(userContext);
  useEffect(() => {
    Axios.get(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    ).then((response) => {
      ctx.setUserData(response.data.user);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="st-get-sidebar">
          <CustomCursor />
          <Header2 />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};
export default Layout2;
