import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
const Add = ({ link, add }) => {
  return (
    <Link to={link || ""}>
      <MdAddCircle
        size={50}
        className={`${
          add ? "" : "fixed bottom-10 left-5"
        } z-10 active:-rotate-45 transition text-Secondary
         `}
      />
    </Link>
  );
};

export default Add;
