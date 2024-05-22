import Options from "./Options";
const Question = (props: any) => {
  return (
    <div>
      <h4 className="text-2xl mb-3">{props.question.question}</h4>
      <Options
        options={props.question.options}
        dispatch={props.dispatch}
        answer={props.answer}
        correctOption={props.question.correctOption}
      />
    </div>
  );
};

export default Question;
