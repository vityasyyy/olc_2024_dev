const Tag = ({ children, className, image, blue = false, ...props }) => {
  return (
    <div className={`flex flex-row content-center gap-2 ${className}`}>
      <div
        className={`h-9 w-9 ${blue ? "bg-custom-blue-dark" : "bg-custom-brown-light"}`}
      ></div>
      <p
        className={`mt-1 text-xl font-semibold ${blue ? "text-custom-black" : "text-white"} ${className}`}
      >
        {children}
      </p>
    </div>
  );
};

export default Tag;
