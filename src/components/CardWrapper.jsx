/* eslint-disable react/prop-types */

const CardWrapper = ({ children }) => {
  return (
    <div className="border-2 shadow-sm shadow-slate-300 rounded-md w-fit p-2">
      {children}
    </div>
  );
};

export default CardWrapper;
