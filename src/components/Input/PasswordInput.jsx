import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

function PasswordInput({
  onChange,
  value,
  name,
  className,
  hideTitle,
  top,
  placeholder,
}) {
  const [biShow, setBiShow] = useState(false);
  return (
    <div className="">
      <h1
        className={`${
          hideTitle ? "hidden" : ""
        } px-3 font-semibold text-start mx-4 mb-2 text-white`}
      >
        {placeholder || "كلمة السر"}
      </h1>
      <div className="relative">
        <input
          type={!biShow ? "password" : "text"}
          onChange={onChange}
          value={value}
          name={name}
          autoComplete="new-password"
          placeholder={placeholder || "كلمة السر"}
          className={`border bg-[#fff] text-black border-[#D2D2D2] m-1 py-[0.4rem] rounded-md ${className}`}
        />
        {biShow ? (
          <BiShow
            onClick={() => setBiShow(false)}
            size={22}
            className={`absolute text-black left-3 top-2 cursor-pointer ${top}`}
          />
        ) : (
          <BiHide
            onClick={() => setBiShow(true)}
            size={22}
            className={`absolute text-black left-3 top-2 cursor-pointer ${top}`}
          />
        )}
      </div>
    </div>
  );
}
export default PasswordInput;
