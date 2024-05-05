import { useAppSelector } from "../../stores/index";
import Header from "../../layouts/Header/index";
import CardCourse from "../CardCourse";
import Footer from "../../layouts/Footer/index";
import IntroPageComponent from "../IntroHome";
import LoadingComponent from "../Loading";

const HomePageComponent = () => {
  const { isLogout } = useAppSelector((state) => state.auth);
  return isLogout ? (
    <>
      <Header />
      <LoadingComponent />
      <IntroPageComponent />
      <CardCourse />
      <Footer />
    </>
  ) : (
    <>
      <Header />
      <IntroPageComponent />
      <CardCourse />
      <Footer />
    </>
  );
};

export default HomePageComponent;
