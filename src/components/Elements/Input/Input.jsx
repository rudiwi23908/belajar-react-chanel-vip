export const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};
