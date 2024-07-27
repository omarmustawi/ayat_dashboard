import { useState } from "react";
import { Col, Row } from "../../Tools/Grid-system";
import MainButton from "../Buttons/MainButton";
import IconHover from "../IconHover/IconHover";
const Popup = ({
  description,
  onClick,
  yes,
  cancel,
  children,
  id,
  text,
  desClass,
  hover,
  hide,
  className,
  link,
}) => {
  const [sure, setSure] = useState(false);

  return (
    <div>
      {sure && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-50"
            onClick={() => setSure(false)}
          ></div>
          <div
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg/black/60 z-50 flex justify-center items-center max-sm:w-full`}
          >
            <div
              className={`bg-white !z-[999] rounded-3xl w-fit h-fit py-7 max-h-[90vh] overflow-y-auto sidebar max-sm:mx-6 ${className}`}
            >
              <p
                className={`font-semibold text-2xl text-black text-center px-4 mb-9 ${desClass}`}
              >
                {description}
              </p>
              {hide ? (
                ""
              ) : (
                <Row justify="center">
                  <Col sm={3}>
                    <MainButton
                      link={link}
                      onClick={() => {
                        setSure(false);
                        onClick();
                      }}
                      name={yes || "نعم"}
                      className="!bg-Main hover:!bg-Main/60 transition-all"
                    />
                  </Col>
                  <Col sm={3}>
                    <MainButton
                      onClick={() => setSure(false)}
                      name={cancel || "إلغاء"}
                      className="!bg-Secondary hover:!bg-Secondary/60 transition-all"
                    />
                  </Col>
                </Row>
              )}
            </div>
          </div>
        </>
      )}

      <div
        onClick={() => {
          setSure(true);
          // setOpenMenu(false);
        }}
      >
        <IconHover id={id} text={text}>
          <div
            className={`${
              hover
                ? ""
                : "w-10 h-10 rounded-full hover:bg-Fourth transition-all flex cursor-pointer justify-center items-center"
            }`}
          >
            {children}
          </div>
        </IconHover>
      </div>
    </div>
  );
};

export default Popup;
