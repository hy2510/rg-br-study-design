import BtnDelete from "../util/BtnDelete";
import stylesPc from "./QuizEndingPass.module.scss";
import "./QuizEndingPassImage.scss";

const style = stylesPc;

const unitImage = "baro";

export default function QuizEndingPass({ totalScore, earnPoint, onClick }) {
  return (
    <div className={style.quizEndingPass}>
      <div className={`${style.container} animate__animated animate__zoomIn`}>
        <div className={style.groupGoodJob} onClick={onClick}>
          <div className={`${style.imgUnit} pass_${unitImage}`}>
            <div className={style.imgPointCoin}>
              <span className={style.txtAchivePoint}>{earnPoint}</span>
            </div>
          </div>
          <div className={style.imgGoodJobRibbon}></div>
          <div className={style.imgConfetti}></div>
        </div>
        <div className={style.groupScore}>
          <span>{totalScore}</span>
          <span>/</span>
          <span>100</span>
        </div>
        <div className={style.txtMessage}>Points achived!</div>
        <BtnDelete onClick={onClick} />
      </div>
    </div>
  );
}
