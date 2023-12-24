import stylesPc from "./QuizTemplate.module.scss";
import "../themes/theme.scss";
import { IcoHbgMenu, IcoHeart, IcoTimer } from "./Icons";

const style = stylesPc;
const theme = "theme-camping";

// 퀴즈템플릿
export const QuizTemplate = ({ children }) => {
  return <div className={`${style.quizTemplate} ${theme}`}>{children}</div>;
};

// 퀴즈헤더 (currentQuizNumber: 현재퀴즈넘버, totalQuizNumber: 총퀴즈갯수, quizTimer: 제한시간 )
export const QuizHeader = ({
  currentQuizNumber,
  totalQuizNumber,
  attempts,
  quizTimer,
}) => {
  return (
    <div className={style.quizHeader}>
      <div className={style.quizHeaderCol1}>
        <div className={style.quizNumber}>
          {currentQuizNumber}
          <span style={{ fontSize: "16px" }}>/</span>
          {totalQuizNumber}
          <div className={style.attempts}>
            <IcoHeart colorRed width={18} height={18} />
            <div className={style.txtL}>{attempts}</div>
          </div>
        </div>

        <div className={style.qMark}></div>
      </div>
      <div className={style.quizHeaderCol2}>
        <div className={style.quizTimer}>
          <IcoTimer colorBlack width={24} height={24} />
          {quizTimer}
        </div>
      </div>
      <div className={style.quizHeaderCol3}>
        <div className={style.openMenuButton}>
          <IcoHbgMenu colorBlack width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

// 퀴즈바디
export const QuizBody = ({ children }) => {
  return (
    <div className={style.quizBody}>
      <div className={style.container}>{children}</div>
    </div>
  );
};
