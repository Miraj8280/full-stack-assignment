export const Card = ({ owner, imageUrl }) => {
  return (
    <div className="w-70 bg-white shadow-md rounded-xl duration-500 cursor-pointer hover:scale-105 hover:shadow-xl">
      <img className="h-80 w-72 object-cover rounded-t-xl" src={imageUrl} />
      <div className="px-4 py-3 w-72">
        <div className="font-regular text-xl mb-2">{owner}</div>
      </div>
    </div>
  );
};
