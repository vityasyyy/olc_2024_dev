const PageNotFound = () => {
  return (
    <>
      <div className="fixed grid h-screen w-screen place-items-center">

        {/* 404 page not found */}
        <div className="flex flex-row items-center gap-6">
          <h1 className="font-logo text-9xl text-custom-blue-dark">404</h1>
          <div className="h-full border-r-2 border-custom-blue-dark" >tes</div>
          <p className="font-semibold text-custom-blue-dark">page not found</p>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
