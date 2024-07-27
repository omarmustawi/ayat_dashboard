const Input = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  title,
  hideTitle,
  className,
  minValue
}) => {
  return (
    <div className="py-3 max-sm:w-full">
      <h1
        className={`${
          hideTitle ? "hidden" : ""
        } px-3 font-semibold text-start mx-4 mb-2 text-white`}
      >
        {placeholder || title}
      </h1>
      <input
        type={type || "text"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={minValue}
        className={`border bg-[#fff] border-[#D2D2D2] text-black m-1 py-[0.4rem] rounded-md ${className}`}
      />
    </div>
  );
};
export default Input;
