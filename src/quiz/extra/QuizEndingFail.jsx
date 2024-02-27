import BtnDelete from "../util/BtnDelete";
import stylesPc from "./QuizEndingFail.module.scss";
import "./QuizEndingFailImage.scss";

const style = stylesPc;

const unitImage = "baro";

export default function QuizEndingFail({ totalScore, onClick }) {
  return (
    <div className={style.quizEndingFail}>
      <div className={`${style.container} animate__animated animate__zoomIn`}>
        <div className={style.groupTryAgin} onClick={onClick}>
          <div className={`${style.imgUnit} fail_${unitImage}`}></div>
          <div className={style.imgTryAgainRibbon}></div>
        </div>
        <div className={style.groupScore}>
          <span>{totalScore}</span>
          <span>/</span>
          <span>100</span>
        </div>
        <BtnDelete onClick={onClick} />
      </div>
    </div>
  );
}
