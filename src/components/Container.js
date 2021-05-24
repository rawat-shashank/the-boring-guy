export const Container = ({ children }) => {
  return (
    <div className="container mx-auto px-5 py-10 md:py-20 flex justify-center">
      {children}
    </div>
  );
};
