import { FidgetSpinner } from "react-loader-spinner";

const LoadingComponent = () => {
  return (
    <div className="z-[999] flex justify-center w-full h-full backdrop-blur-sm items-center absolute mt-[-100px]">
      <FidgetSpinner
        visible={true}
        height="180"
        width="180"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
        backgroundColor="#00008B"
      />
    </div>
  );
};

export default LoadingComponent;
