// import React, { useState } from "react";

// const Toggle = () => {
//   const [isToggled, setIsToggled] = useState(true);

//   const toggle = () => {
//     setIsToggled(!isToggled);
//   };

//   return (
//     <div>
//       <label
//         htmlFor="toggleSwitch"
//         className={`relative cursor-pointer inline-block w-12 mr-2 align-middle select-none ${
//           isToggled ? "bg-Main" : "bg-Main/30"
//         } rounded-full p-1`}
//       >
//         <input
//           type="checkbox"
//           id="toggleSwitch"
//           checked={isToggled}
//           onChange={toggle}
//           className="hidden"
//         />
//         <span
//           className={`block w-6 h-6 rounded-full bg-white shadow-lg transform duration-300 ${
//             isToggled ? "-translate-x-4" : "translate-x-0"
//           }`}
//         ></span>
//       </label>
//     </div>
//   );
// };

// export default Toggle;



import React from "react";

const Toggle = ({ value, onChange }) => {
  return (
    <div>
      <label
        htmlFor="toggleSwitch"
        className={`relative cursor-pointer inline-block w-12 mr-2 align-middle select-none ${
          value ? "bg-Main" : "bg-Main/30"
        } rounded-full p-1`}
      >
        <input
          type="checkbox"
          id="toggleSwitch"
          checked={value}
          onChange={onChange}
          className="hidden"
        />
        <span
          className={`block w-6 h-6 rounded-full bg-white shadow-lg transform duration-300 ${
            value ? "-translate-x-4" : "translate-x-0"
          }`}
        ></span>
      </label>
    </div>
  );
};

export default Toggle;
