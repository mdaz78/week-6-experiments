/* eslint-disable react/prop-types */

const CardWrapper = ({ comp, children }) => {
  return (
    <div className="border-2 shadow-sm shadow-slate-300 rounded-md w-fit p-2">
      {comp}
      {children}
    </div>
  );
};

export default CardWrapper;
