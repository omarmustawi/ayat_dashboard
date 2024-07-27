import deleted from "../../Svg/delete.svg";
import Popup from "../Popup/Popup";
const Delete = ({ deleteClick }) => {
  return (
    <div>
      <Popup
        text="حذف"
        description="هل انت متأكد من حذف هذا العنصر ؟"
        onClick={deleteClick}
        >
        <img src={deleted} alt="" className="text-red-600" />
      </Popup>
    </div>
  );
};

export default Delete;
