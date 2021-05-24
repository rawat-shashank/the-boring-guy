export const Container = ({ children }) => {
  return (
    <div className="container lg:w-5/6 mx-auto px-5 py-10 md:py-20 flex justify-center">
      {children}
    </div>
  );
};
