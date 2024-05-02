import { authActions } from "../../stores/slices/auth/index";
import { useAppDispatch } from "../../stores/index";
import Header from "../../layouts/Header/index";
import CardCourse from "../CardCourse";
import Footer from "../../layouts/Footer/index";
import IntroPageComponent from "../IntroHome";

const HomePageComponent = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Header />
      <IntroPageComponent />
      <CardCourse />
      {/* <button
        onClick={() => {
          dispatch(authActions.logout());
        }}
      >
        Logout
      </button> */}
      <Footer />
    </div>
  );
};

export default HomePageComponent;
