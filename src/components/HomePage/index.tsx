import { authActions } from "../../stores/slices/auth/index";
import { useAppDispatch } from "../../stores/index";

const HomePageComponent = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      Home Page
      <button
        onClick={() => {
          dispatch(authActions.logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default HomePageComponent;
