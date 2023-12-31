import Gap from "../util/Gap";
import stylesPc from "./TestResult.module.scss";

const style = stylesPc;

export const TestResult1 = ({
  quizType,
  correctNum,
  incorrectNum,
  totalScore,
  unit,
  stepNum,
  onClick,
}) => {
  return (
    <div className={style.testResult}>
      <div className={style.quizType}>
        Step{stepNum}. {quizType}
      </div>
      <div className={style.totalScoreContainer}>
        <div className={style.txtL}>SCORE: </div>
        <div className={`${style.totalScore} ${style.heartbeat}`}>
          {totalScore}
        </div>
      </div>
      <div className={style.container}>
        <div
          className={`${style.readingUnit} animate__animated animate__jackInTheBox`}
        >
          <img
            src={`https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/${unit}_10.png`}
            alt=""
          />
        </div>
        <div className={`${style.board1} animate__animated animate__fadeIn`}>
          <div className={style.correctScore}>
            <div className={style.title}>correct</div>
            <div className={style.number}>{correctNum}</div>
          </div>
          <div className={style.incorrectScore}>
            <div className={style.title}>incorrect</div>
            <div className={style.number}>{incorrectNum}</div>
          </div>
        </div>
        <div className={style.board2}>
          <div className={style.row}>
            <div>Q</div>
            <div>1st</div>
            <div>2nd</div>
          </div>
          {/* Test Result 결과가 들어가는 곳 */}
          <div className={style.row}>
            <div>1</div>
            <div>X</div>
            <div>O</div>
          </div>
          <div className={style.row}>
            <div>2</div>
            <div>X</div>
            <div>O</div>
          </div>
          <div className={style.row}>
            <div>3</div>
            <div>X</div>
            <div>O</div>
          </div>
          <div className={style.row}>
            <div>4</div>
            <div>X</div>
            <div>O</div>
          </div>
        </div>
        <Gap height={50} />
      </div>
      <div className={style.nextButton} onClick={onClick}>
        Next
      </div>
    </div>
  );
};

export const SubmitRevision = ({
  stepOrder,
  quizType,
  title,
  comment,
  revisionGoalNum,
  revisionCompletedNum,
  revisionCountNum,
  onClickNo,
  onClickYes,
}) => {
  return (
    <div className={style.submitRevision}>
      <div
        className={`${style.container} animate__animated animate__bounceInRight`}
      >
        <div className={style.stepOrder}>
          Step{stepOrder}. {quizType}
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.comment}>
          {revisionCountNum == 0
            ? "수고했어요! 이달의 남은 첨삭은 모두 사용했어요."
            : comment}
        </div>
        <div className={style.revisionBoard}>
          {/* <div className={style.txtLabel}>목표 첨삭:</div>
          <div className={style.txtCount}>{revisionGoalNum}</div> */}
          <div className={style.txtLabel}>남은 첨삭:</div>
          <div className={style.txtCount}>
            {revisionCountNum} / {revisionGoalNum}
          </div>
          <div className={style.txtLabel}>첨삭 완료:</div>
          <div className={style.txtCount}>{revisionCompletedNum}</div>
        </div>
        {revisionCountNum == 0 ? (
          <div className={`${style.selectBox} ${style.revisionDone}`}>
            <div className={style.noButton} onClick={onClickNo}>
              Done
            </div>
          </div>
        ) : (
          <div className={style.selectBox}>
            <div className={style.noButton} onClick={onClickNo}>
              No
            </div>
            <div className={style.yesButton} onClick={onClickYes}>
              Yes
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
