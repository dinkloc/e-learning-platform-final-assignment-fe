import Header from "../../layouts/Header/index";
import NavListComponent from "../NavListCourse";

const DetailCoursePageComponent = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12">
        <div className="bg-gray-300 h-[250px] w-full col-span-12"></div>
        <div className="grid grid-cols-12 col-span-8 col-start-3">
          <div className="col-span-8 border border-gray-100 p-4">
            <div>
              <dd>Trai Code 100: Introduction to Python Programming</dd>
            </div>
            <div>
              <NavListComponent />
            </div>
          </div>
          <div className="col-span-4  mt-[-100px]">
            <div className="p-6">
              <img
                src="/thumbnail-detail-course/cs-50-thumbnail.jpg"
                alt=""
                className="rounded-lg"
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-green-800 hover:bg-green-900 px-5 py-2 rounded-lg text-white">
                Start Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCoursePageComponent;
