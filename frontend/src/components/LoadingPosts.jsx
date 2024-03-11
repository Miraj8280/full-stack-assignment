export const LoadingCard = () => {
  return (
    <div className="w-72 rounded overflow-hidden shadow-lg m-2">
      <div className="w-72 h-64 bg-gray-300 animate-pulse"></div>
      <div className="px-6 py-4 items-center">
        <div className="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  );
};

export const LoadingPosts = () => {
  const loadPages = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 content-start">
      {loadPages.map((num) => {
        return <LoadingCard key={num} />;
      })}
    </div>
  );
};
