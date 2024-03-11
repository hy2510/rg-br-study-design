import { useMobileDetect } from "../util/isMobile";
import stylesPc from "./CorrectSign.module.scss";
import stylesMobile from "./CorrectSign_m.module.scss";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export const CorrectPopup = ({ unit }) => {
  return (
    <>
      <div
        className={`${style.correctPopup} animate__animated animate__slideInUp`}
      >
        <div className={style.readingUnitArea}>
          <div className={style.txtL}>CORRECT!</div>
          <img
            src={`https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/${unit}_08.png`}
            alt=""
            className="animate__animated animate__tada"
          />
        </div>
      </div>
      <div className={style.screenBlock}></div>
    </>
  );
};

export const IncorrectPopup = ({ unit }) => {
  return (
    <>
      <div
        className={`${style.incorrectPopup} animate__animated animate__slideInUp`}
      >
        <div className={style.readingUnitArea}>
          <div className={style.txtL}>Oops...</div>
          <img
            src={`https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/${unit}_09.png`}
            alt=""
            className="animate__animated animate__pulse"
          />
        </div>
      </div>
      <div className={style.screenBlock}></div>
    </>
  );
};
