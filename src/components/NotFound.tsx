const NotFound = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-4">
      <div className="flex items-center w-full justify-center">
        <h1 className="text-xl md:text-4xl font-bold text-center">
          404 - This page could not be found
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
