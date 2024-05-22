import { Editor } from "@monaco-editor/react";

const CodePlaygroundPageComponent = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen bg-gray-200">
      <div className="col-span-5 ps-6 pt-8">
        <div className="bg-white pt-6 px-6 h-5/6 rounded-xl">
          <div>
            <p className="text-2xl font-medium">1. Two Sum</p>
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <p className="text-sx">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              impedit sit rem expedita ex. Qui ut, quos id numquam molestiae
              debitis dolores voluptate iusto, inventore sapiente, expedita
              provident sed asperiores!
            </p>
            <p className="text-sx">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              impedit sit rem expedita ex. Qui ut, quos id numquam molestiae
              debitis dolores voluptate iusto, inventore sapiente, expedita
              provident sed asperiores!
            </p>
            <p className="text-sx">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              impedit sit rem expedita ex. Qui ut, quos id numquam molestiae
              debitis dolores voluptate iusto, inventore sapiente, expedita
              provident sed asperiores!
            </p>
          </div>
          <div className="mt-2">
            <p>Example</p>
          </div>
        </div>
      </div>
      <div className="col-span-7 px-6 pt-8">
        <div className="bg-white h-5/6 rounded-xl pt-4">
          <Editor height={`100%`} width={`100%`} theme={"oceanic-next"} />
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-green-800 text-white py-2 px-6 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodePlaygroundPageComponent;
