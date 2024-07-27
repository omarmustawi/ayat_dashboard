import Select from "react-select";
const MultipleSelect = ({
  text,
  title,
  onChange,
  name,
  isSearch,
  options,
  className,
  placeholder,
  defaultInputValue
}) => {
  return (
    <div className={`${className} my-1 max-sm:w-full`}>
      <div className="px-3 font-semibold text-white">{text || title}</div>
      <Select
        isSearchable={isSearch || true}
        className="w-full bg-[#E7E7E7] text-black mt-2 rounded-lg text-center placeholder:text-black"
        onChange={onChange}
        name={name}
        options={options?.map((e) => {
          return { value: e.id, label: e.name };
        })}
        placeholder={placeholder}
        defaultInputValue={defaultInputValue || ""}
      />
    </div>
  );
};

export default MultipleSelect;
