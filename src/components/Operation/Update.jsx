import { Link } from "react-router-dom";
import Updated from "../../Svg/update.svg";
import IconHover from "../IconHover/IconHover";

function Update({ edit }) {
  return (
    <>
      <IconHover text="تعديل">
        <div
          className={`w-10 h-10 rounded-full  flex justify-center items-center cursor-pointer hover:bg-Fourth transition-all`}
        >
          <Link to={edit || ""}>
            <img
              src={Updated}
              alt=""
              className="cursor-pointer text-green-600"
            />
          </Link>
        </div>
      </IconHover>
    </>
  );
}
export default Update;
