import { BsAward } from "react-icons/bs";
import {
  MdFolderSpecial,
  MdOutlineCalculate,
  MdPassword,
} from "react-icons/md";
import { TiHome, TiUpload } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { useContextHook } from "../../Context/ContextOPen";
import logoutIcon from "../../Svg/logout.svg";
import { Popup } from "../../components";
import logo from "../../images/Logo.png";
import "./SideBar.css";


function SideBar() {
  const { openMenu, changeMenu } = useContextHook();
  const sidebar = [
    { icon: TiHome, name: "الرئيسية", link: "/" },
    { icon: MdOutlineCalculate, name: "الحسابات", link: "/calculations" },
    { icon: BsAward, name: "المنح", link: "/awarded" },
    { icon: MdFolderSpecial, name: "الإختصاصات", link: "/specialties" },
    { icon: TiUpload, name: "مصادر الشهادات", link: "/certificates" }
  ];
  return (
    <>
      <div
        className={`w-[220px] ${
          openMenu
            ? "max-sm:!w-[250px] !max-lg:translate-x-10 !max-lg:w-3/4 -!right-10"
            : "max-lg:w-[0px]"
        } !max-lg:translate-x-full bg-Third sidebar lg:h-[95vh] h-[100vh] mt-0 lg:mt-5 lg:rounded-2xl sideBar max-lg:h-[100%] sticky max-lg:fixed lg:left-10 left-0 lg:right-10 right-0 top-0 transition-all overflow-y-auto py-4 z-40 max-lg:z-50 `}
      >
        <div className="px-3">
          <ul className="text-Third font-semibold space-y-2">
            <li className="">
              <Link to="/">
                <img
                  src={logo}
                  alt=""
                  className="m-2 mx-auto w-full object-contain"
                />
              </Link>
            </li>
            {sidebar.map((e, i) => (
              <li className="" key={i}>
                <NavLink
                  to={e.link}
                  className="flex items-center gap-2 py-2 px-2 rounded-lg text-sm text-white hover:bg-white hover:text-Secondary transition-all"
                >
                  <e.icon size={20} />
                  <p>{e.name}</p>
                </NavLink>
              </li>
            ))}
            <li>
              <Popup
                id={`logout`}
                link="/login"
                description="هل انت متأكد من تسجيل الخروج ؟"
                hover={true}
              >
                <div className="flex items-center gap-2 py-1 px-2 rounded-lg text-sm text-white hover:bg-white hover:text-Secondary transition-all cursor-pointer">
                  <img src={logoutIcon} alt="" className="mt-2" />
                  <p className="text-Secondary">تسجيل خروج</p>
                </div>
              </Popup>
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={changeMenu}
        style={{ transition: "0.4s" }}
        className={`${
          openMenu ? "" : "hidden"
        }  max-lg:w-full h-full bg-black/20 fixed -left-0 top-0 transition-all z-40`}
      />
    </>
  );
}

export default SideBar;
