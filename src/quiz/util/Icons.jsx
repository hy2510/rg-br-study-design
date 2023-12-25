import hbg_menu_black from "../images/hbg_menu_black.svg";
import play_button_red from "../images/play_red.svg";
import stop_button_gray from "../images/stop_gray.svg";
import timer from "../images/timer.svg";
import heart from "../images/heart.svg";
import chev_right from "../images/chev_right.svg";
import chev_left from "../images/chev_left.svg";
import returnIcon from "../images/return.svg";
import arrow_up from "../images/arrow_up.svg";

export const IcoHbgMenu = ({ width, height, colorBlack }) => {
  return (
    <>
      {colorBlack && <img src={hbg_menu_black} width={width} height={height} />}
    </>
  );
};

export const IcoPlay = ({ width, height, colorRed }) => {
  return (
    <>
      {colorRed && <img src={play_button_red} width={width} height={height} />}
    </>
  );
};

export const IcoStop = ({ width, height, colorGray }) => {
  return (
    <>
      {colorGray && (
        <img src={stop_button_gray} width={width} height={height} />
      )}
    </>
  );
};

export const IcoTimer = ({ width, height, colorBlack }) => {
  return <>{colorBlack && <img src={timer} width={width} height={height} />}</>;
};

export const IcoHeart = ({ width, height, colorRed }) => {
  return <>{colorRed && <img src={heart} width={width} height={height} />}</>;
};

export const IcoChevRight = ({ width, height }) => {
  return (
    <>
      <img src={chev_right} width={width} height={height} />
    </>
  );
};

export const IcoChevLeft = ({ width, height }) => {
  return (
    <>
      <img src={chev_left} width={width} height={height} />
    </>
  );
};

export const IcoReturn = ({ width, height }) => {
  return (
    <>
      <img src={returnIcon} width={width} height={height} />
    </>
  );
};

export const IcoArrowUp = ({ width, height, colorBlack }) => {
  return (
    <>{colorBlack && <img src={arrow_up} width={width} height={height} />}</>
  );
};
