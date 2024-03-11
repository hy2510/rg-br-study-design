import stylesPc from "./QuizTemplate.module.scss";
import stylesMobile from "./QuizTemplate_m.module.scss";
import "../themes/theme.scss";
import { IcoHbgMenu, IcoHeart, IcoTimer } from "./Icons";
import SideMenu from "../../side-menu/SideMenu";
import { useState } from "react";
import QuizEndingPass from "../extra/QuizEndingPass";
import QuizEndingFail from "../extra/QuizEndingFail";
import { useMobileDetect } from "./isMobile";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

const theme = "theme-jungle";

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
  const [viewSideMenu, _viewSideMenu] = useState(false);
  const [isFullScreen, _isFullScreen] = useState(false);

  return (
    <>
      <div
        className={`${style.quizHeader} animate__animated animate__slideInDown`}
      >
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
            {/* <IcoTimer colorBlack width={24} height={24} /> */}
            <div className={style.icoTimer}></div>
            {quizTimer}
          </div>
        </div>
        <div className={style.quizHeaderCol3}>
          <div
            className={style.openMenuButton}
            onClick={() => {
              _viewSideMenu(true);
            }}
          >
            {/* <IcoHbgMenu colorBlack width={24} height={24} /> */}
          </div>
        </div>
      </div>
      {viewSideMenu && (
        <SideMenu
          isEBook={false}
          isEBookReadCompleted={true}
          isQuiz={true}
          isPbook={false}
          viewSideMenu={viewSideMenu}
          _viewSideMenu={_viewSideMenu}
          bookCode="EB-KA-001"
          bookTitle="Alligators Apples"
          stepTitle="Listening Activity"
        />
      )}
      {/* <div
        style={{
          position: "fixed",
          right: "10px",
          bottom: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          if (!isFullScreen) {
            document.body.requestFullscreen();
            _isFullScreen(true);
          } else {
            document.exitFullscreen();
            _isFullScreen(false);
          }
        }}
      >
        {!isFullScreen ? "Full Screen" : "Exit Full Screen"}
      </div> */}
      {/* GoodJob 화면 */}
      {/* <QuizEndingPass totalScore={70} earnPoint={30.3} /> */}
      {/* TryAgain 화면 */}
      {/* <QuizEndingFail totalScore={69} /> */}
    </>
  );
};

// 퀴즈바디
export const QuizBody = ({ children }) => {
  return (
    <div className={`${style.quizBody} animate__animated animate__fadeIn`}>
      <div className={style.container}>{children}</div>
    </div>
  );
};
