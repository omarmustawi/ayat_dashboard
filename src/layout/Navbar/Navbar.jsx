import { BiMenu } from "react-icons/bi";
import { useContextHook } from "../../Context/ContextOPen";
const Navbar = () => {
  const { changeMenu } = useContextHook();
  return (
    <>
      <BiMenu
        size={40}
        className="cursor-pointer text-Main lg:hidden"
        onClick={changeMenu}
      />
    </>
  );
};

export default Navbar;
