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
      <div className={style.container}>
        <div className={style.quizType}>
          Step{stepNum}. {quizType}
        </div>
        <div className={style.totalScoreContainer}>
          <div className={style.txtL}>SCORE: </div>
          <div className={`${style.totalScore} ${style.heartbeat}`}>
            {totalScore}
          </div>
        </div>

        <div
          className={`${style.readingUnit} animate__animated animate__fadeIn`}
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
        <div className={style.nextButton} onClick={onClick}>
          Next
        </div>
      </div>
    </div>
  );
};
