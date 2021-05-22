export const Container = ({ children }) => {
  return (
    // <div className="container px-5 py-24 mx-auto flex flex-wrap">
    //   <div className="lg:w-2/3 mx-auto">{children}</div>
    // </div>
    <div className="container mx-auto px-5 py-24 flex justify-center">
      {children}
    </div>
  );
};
