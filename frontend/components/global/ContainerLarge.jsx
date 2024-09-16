
const ContainerLarge = ({ children, className, parentClass, ...props }) => {
  return (
    <div className={`py-8 flex justify-center ${parentClass}`} {...props}>
      <div className={`w-full mx-[min(5vw,32px)]  ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default ContainerLarge;