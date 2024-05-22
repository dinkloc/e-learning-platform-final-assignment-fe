const NextButton = (props: any) => {
  if (props.answer === null) return;
  if (props.index < props.numQuestion - 1) {
    return (
      <button
        className="block [font-family:inherit] [color:inherit] text-[1.5rem] border-[2px] border-[solid] border-[#495057] bg-[#495057] px-[2.4rem] py-[0.6rem] cursor-pointer rounded-[100px] [transition:0.3s] float-right"
        onClick={() => props.dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }
  if (props.index === props.numQuestion - 1) {
    return (
      <button
        className="block [font-family:inherit] [color:inherit] text-[1.5rem] border-[2px] border-[solid] border-[#495057] bg-[#495057] px-[2.4rem] py-[0.6rem] cursor-pointer rounded-[100px] [transition:0.3s] float-right"
        onClick={() => props.dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
};
export default NextButton;
