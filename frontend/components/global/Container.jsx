const Container = ({ children, className, parentClass, ...props }) => {
  return (
    <div className={`py-16 ${parentClass}`} {...props}>
      <div className={`mx-auto w-[90vw] max-w-[1114px] ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
