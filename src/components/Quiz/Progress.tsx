const Progress = (props: any) => {
  return (
    <header className="mb-16 grid justify-between gap-[1.2rem] grid-cols-[auto_auto] text-[1.5rem] text-[#ced4da]">
      <progress
        className="w-full h-[12px] col-span-full rounded-lg"
        max={props.numQuestion}
        value={props.index + Number(props.answer !== null)}
      />
      <p>
        <strong>
          {props.index + 1} / {props.numQuestion}{" "}
        </strong>{" "}
      </p>
      <p>
        <strong>
          {props.point} / {props.maxPointPossible}
        </strong>{" "}
        points
      </p>
    </header>
  );
};

export default Progress;
