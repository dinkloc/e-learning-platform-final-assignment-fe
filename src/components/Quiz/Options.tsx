const Options = (props: any) => {
  const hasAnswered = props.answer !== null;
  return (
    <div className="flex flex-col gap-[1.2rem] mb-[3.2rem]">
      {props.options.map((option: any, index: any) => (
        <button
          className={`block [font-family:inherit] [color:inherit] text-[1.5rem] border-[2px] border-[solid] border-[#495057] bg-[#495057] px-[2.4rem] py-[0.8rem] cursor-pointer rounded-[100px] [transition:0.3s] w-full text-left hover:translate-x-[1.2rem] ${
            index === props.answer ? "answer" : ""
          } ${
            hasAnswered
              ? index === props.correctOption
                ? "bg-[#1098ad] border-[2px] border-[solid] border-[#1098ad] text-[#f1f3f5]"
                : "bg-[#ffa94d] border-[2px] border-[solid] border-[#ffa94d] text-[#343a40]"
              : ""
          }`}
          onClick={() => props.dispatch({ type: "newAnswer", payload: index })}
          key={option}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
