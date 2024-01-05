import ico_delete from "./images/delete.svg";
import ico_book from "./images/book.svg";
import ico_repeat from "./images/repeat.svg";
import ico_quiz from "./images/check_board.svg";
import ico_movie from "./images/movie_book.svg";
import ico_speak from "./images/rec.svg";
import ico_exit from "./images/exite.svg";
import icoScoreItemCorrect from "./images/ico_score_item_correct.svg";
import icoScoreItemIncorrect from "./images/ico_score_item_incorrect.svg";
import stylePc from "./SideMenu.module.scss";
import { useState } from "react";

const style = stylePc;

// 학습 사이드 메뉴 (isQuiz: 퀴즈를 푸는 중인가?, isPbook: PB 학습인가?, isEBook: 이북을 보는 중인가?, isEBookReadCompleted: 이북을 마지막 페이지까지 보았는가? )
export default function SideMenu({
  isPbook,
  isEBook,
  isEBookReadCompleted,
  isQuiz,
  viewSideMenu,
  _viewSideMenu,
  bookCode,
  bookTitle,
  stepTitle,
  onClickRead,
  onClickQuiz,
  onClickExit,
  _scoreBoard,
}) {
  const [sideMenuAni, _sideMenuAni] = useState(
    "animate__animated animate__fadeIn"
  );
  const [sideMenuContainerAni, _sideMenuContainerAni] = useState(
    "animate__animated animate__slideInRight"
  );

  const CloseWindow = () => {
    _sideMenuAni("animate__animated animate__fadeOut");
    _sideMenuContainerAni("animate__animated animate__slideOutRight");
    setTimeout(() => {
      viewSideMenu && _viewSideMenu(false);
      _scoreBoard && _scoreBoard(false);
      _sideMenuAni("animate__animated animate__fadeIn");
      _sideMenuContainerAni("animate__animated animate__slideInRight");
    }, 300);
  };

  return (
    <div
      id="study-side-menu"
      className={`${style.study_side_menu} ${sideMenuAni}`}
    >
      <div
        id="study-side-menu-container"
        className={`${style.study_side_menu_container} ${sideMenuContainerAni}`}
      >
        <div className={style.study_side_menu_area_top}>
          <div className={style.close_side_menu}>
            <div className={style.btn_delete} onClick={CloseWindow}>
              <img src={ico_delete} alt="" />
            </div>
          </div>
          <div className={style.book_info}>
            <div className={style.book_code}>{bookCode}</div>
            <div className={style.book_title}>{bookTitle}</div>
          </div>
          <SelectStudyMenu
            isEBook={isEBook}
            isEBookReadCompleted={isEBookReadCompleted}
            isQuiz={isQuiz}
            isPbook={isPbook}
          />
          {isEBook && <div className={style.label}>추가 학습</div>}
          {/* 보고있는 화면이 이북인 경우 */}
          {isEBook && <EBookMoreActivity />}
          {/* 보고있는 화면이 퀴즈인 경우 */}
          {isQuiz && <StudySideMenuQuizScoreboard stepTitle={stepTitle} />}
        </div>
        <div className={style.study_side_menu_area_bottom}>
          <div
            className={style.btn_exit}
            onClick={() => {
              onClickExit;
            }}
          >
            <img src={ico_exit} alt="" />
            <div className={style.txt}>학습종료</div>
          </div>
        </div>
      </div>
      <div className={style.screen_block} onClick={CloseWindow}></div>
    </div>
  );
}

// 학습 사이드 메뉴 > 학습 선택
const SelectStudyMenu = ({
  isEBook,
  isEBookReadCompleted,
  isQuiz,
  isPbook,
}) => {
  return (
    <div className={style.select_study_menu}>
      {!isQuiz && (
        <>
          <div className={style.label}>필수 학습</div>
          <div style={{ height: 10 }}></div>
        </>
      )}
      {isEBook && !isEBookReadCompleted ? (
        <div className={`${style.select_study_menu_item} ${style.on}`}>
          <img src={ico_book} alt="" />책 읽기
        </div>
      ) : isEBook && isEBookReadCompleted ? (
        <div className={`${style.select_study_menu_item} ${style.completed}`}>
          <img src={ico_repeat} alt="" />
          다시 읽기
          <div class={style.pyro}>
            <div class={style.before}></div>
            <div class={style.after}></div>
          </div>
        </div>
      ) : (
        !isPbook && (
          <div className={style.select_study_menu_item}>
            <img src={ico_book} alt="" />책 읽기
          </div>
        )
      )}
      <div
        className={`${style.select_study_menu_item} ${
          isEBook && isEBookReadCompleted ? style.go_on : ""
        } ${isQuiz && style.on}`}
      >
        <img src={ico_quiz} alt="" />
        퀴즈 풀기
      </div>
    </div>
  );
};

// 학습 사이드 메뉴 > eBook 추가학습 보기
const EBookMoreActivity = () => {
  return (
    <>
      <div className={style.ebook_more_activity}>
        <div style={{ height: 10 }}></div>
        <div className={style.ebook_more_activity_item}>
          <img src={ico_movie} alt="" />
          무비 시청
        </div>
        <div className={style.ebook_more_activity_item}>
          <img src={ico_speak} alt="" />
          SPEAK (말하기)
        </div>
      </div>
    </>
  );
};

// 학습 사이드 메뉴 > Quiz 스토어보드
const StudySideMenuQuizScoreboard = ({ stepTitle }) => {
  const ScoreRow = ({ header, col1, col2, col3, col4 }) => {
    return (
      <div className={`${style.score_row} ${header && style.header}`}>
        {col1 && <div className={style.score_col}>{col1}</div>}
        {col2 && (
          <div className={style.score_col}>
            {col2 == "correct" ? (
              <img src={icoScoreItemCorrect} alt="" />
            ) : col2 == "incorrect" ? (
              <img src={icoScoreItemIncorrect} alt="" />
            ) : (
              col2
            )}
          </div>
        )}
        {col3 && (
          <div className={style.score_col}>
            {col3 == "correct" ? (
              <img src={icoScoreItemCorrect} alt="" />
            ) : col3 == "incorrect" ? (
              <img src={icoScoreItemIncorrect} alt="" />
            ) : (
              col3
            )}
          </div>
        )}
        {col4 && (
          <div className={style.score_col}>
            {col4 == "correct" ? (
              <img src={icoScoreItemCorrect} alt="" />
            ) : col4 == "incorrect" ? (
              <img src={icoScoreItemIncorrect} alt="" />
            ) : (
              col4
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={style.study_side_menu_quiz_scoreboard}>
      <div className={style.step_info}>
        {/* <div className="step on">Step1</div> */}
        <div className={`${style.step} ${style.on}`}>Step1</div>
        <div className={style.step}>2</div>
        <div className={style.step}>3</div>
        <div className={style.step}>4</div>
        <div className={style.step}>5</div>
      </div>
      <div className={style.score_info}>
        <div className={style.quiz_type}>{stepTitle}</div>
        <div>
          <ScoreRow header col1={"Q"} col2={"1st"} col3={"2nd"} />
          <ScoreRow col1={1} col2={"incorrect"} col3={"correct"} />
          <ScoreRow col1={2} col2={"correct"} col3={"-"} />
          <ScoreRow col1={3} col2={"correct"} col3={"-"} />
          <ScoreRow col1={4} col2={"correct"} col3={"-"} />
        </div>
      </div>
    </div>
  );
};

// 학습 사이드 메뉴 > Quiz 스코어보드 아이템
