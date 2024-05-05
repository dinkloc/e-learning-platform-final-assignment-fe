import { ReactTyped } from "react-typed";

const IntroPageComponent = () => {
  return (
    <div className="bg-white py-24 sm:py-32  ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 max-h-[388px] h-full">
        <div className="mx-auto max-w-2xl lg:text-center ">
          <h2 className="text-2xl font-semibold leading-7 text-indigo-600">
            <ReactTyped
              strings={["Learning Faster"]}
              typeSpeed={300}
              loop
              showCursor={false}
            />
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <ReactTyped
              strings={["Everything you need to learning computer science"]}
              typeSpeed={300}
              loop
              showCursor={false}
            />
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to learning computer science
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className=" flex flex-row justify-between">
              <dt className="text-base font-semibold leading-7 text-gray-900 pe-6">
                <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-800">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </div>
              </dt>
              <div>
                <dd className="text-base font-semibold leading-7 text-gray-900">
                  Push to deploy
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                  suspendisse semper morbi. Odio urna massa nunc massa.
                </dd>
              </div>
            </div>
            <div className=" flex flex-row justify-between">
              <dt className="text-base font-semibold leading-7 text-gray-900 pe-6">
                <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </div>
              </dt>
              <div>
                <dd className="text-base font-semibold leading-7 text-gray-900">
                  Push to deploy
                </dd>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                  suspendisse semper morbi. Odio urna massa nunc massa.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default IntroPageComponent;
