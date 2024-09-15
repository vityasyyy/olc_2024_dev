
const Container = ({ children, className, ...props }) => {
    return (
        <div className={`mx-auto w-[90vw] max-w-[900px] py-6 ${className}`} {...props}>
            {children}
        </div>
    );
}

export default Container;