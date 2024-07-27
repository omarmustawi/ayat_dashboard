import { Tooltip } from "react-tooltip";

function IconHover({ children, id, text }) {
  return (
    <div>
      <div id={id || text}>
        {children}
        <Tooltip anchorSelect={`#${id || text}`} content={text} />
      </div>
    </div>
  );
}
export default IconHover;
