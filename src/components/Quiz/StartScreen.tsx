const StartScreen = (props: any) => {
  return (
    <div className="text-center flex flex-col justify-center">
      <h2 className="text-2xl">Welcome to the React Quiz!</h2>
      <h3 className="text-2xl mb-3">
        {props.numQuestion} Question to test your React mastery
      </h3>
      <div className="flex justify-center">
        <button
          onClick={() => props.dispatch({ type: "start" })}
          className=" block w-1/3 [font-family:inherit] [color:inherit] text-[1.5rem] border-[2px] border-[solid] border-[#495057] bg-[#495057] px-[2.4rem] py-[0.8rem] cursor-pointer rounded-[100px] [transition:0.3s] float-right"
        >
          Let's start
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
