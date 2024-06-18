export default function Loading() {
  return (
    <div className="lg:mx-[100px] lg:my-14 m-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-7 mt-5 lg:mt-10">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate-pulse"
          >
            <div className="p-8 rounded-t-lg object-cover h-96 w-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="px-5 pb-5">
              <h5 className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></h5>
              <div className="flex items-center justify-between mt-4">
                <span className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></span>
                <button
                  type="button"
                  className="text-white bg-gray-300 dark:bg-gray-600 rounded-lg text-sm px-5 py-2.5 text-center"
                  disabled
                >
                  &nbsp;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
