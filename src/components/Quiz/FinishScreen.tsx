const FinishScreen = (props: any) => {
  const percentage = props.point / props.maxPointPossible / 100;
  return (
    <>
      <p className="bg-[#1098ad] text-[#f1f3f5] rounded-[100px] text-center px-[0] py-4 text-[1.5rem] font-medium mb-[1.6rem]">
        You score <strong>{props.point}</strong> out of {props.maxPointPossible}{" "}
        ({Math.ceil(percentage)} %)
      </p>
      <p className="text-[1.5rem] text-center mb-[4.8rem]">
        (Highscore: {props.highscore} points)
      </p>
      <button
        className="block [font-family:inherit] [color:inherit] text-[1.5rem] border-[2px] border-[solid] border-[#495057] bg-[#495057] px-[2.4rem] py-[0.8rem] cursor-pointer rounded-[100px] [transition:0.3s] float-righ"
        onClick={() => props.dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishScreen;
