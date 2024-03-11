export const Card = ({ owner, imageUrl }) => {
  return (
    <div className="w-full rounded-md overflow-hidden bg-white shadow-lg m-2 mt-2 cursor-pointer">
      <img className="w-full h-64 object-center" src={imageUrl} />
      <div className="px-6 py-4">
        <div className="font-regular text-xl mb-2">{owner}</div>
      </div>
    </div>
  );
};
