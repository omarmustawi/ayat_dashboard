import { Link } from "react-router-dom";

const MainButton = ({ name, link, onClick, className }) => {
  return (
    <>
      {link ? (
        <Link to={`${link || ""}`}>
          <div
            className={`bg-Main rounded-xl hover:bg-opacity-70 text-center text-lg font-bold text-white cursor-pointer w-fit px-5 py-3 ${className}`}
            onClick={onClick}
          >
            {name}
          </div>
        </Link>
      ) : (
        <div>
          <div
            className={`bg-Main rounded-xl hover:bg-opacity-70 text-center text-lg font-bold text-white cursor-pointer w-fit px-5 py-3 ${className}`}
            onClick={onClick}
          >
            {name}
          </div>
        </div>
      )}
    </>
  );
};

export default MainButton;
