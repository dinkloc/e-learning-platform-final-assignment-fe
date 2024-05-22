export default function Loader() {
  return (
    <div className="flex flex-col items-center mt-16 gap-[1.6rem] text-[#ced4da] text-[1.4rem]">
      <div className="w-[50px] h-[24px] bg-[radial-gradient(circle_closest-side,_currentColor_90%,_#0000)_0%_50%,_radial-gradient(circle_closest-side,_currentColor_90%,_#0000)_50%_50%,_radial-gradient(circle_closest-side,_currentColor_90%,_#0000)_100%_50%] [background-size:calc(100%_/_3)_12px] bg-no-repeat animate-[loader_1s_infinite_linear]"></div>
      <p>Loading questions...</p>
    </div>
  );
}
