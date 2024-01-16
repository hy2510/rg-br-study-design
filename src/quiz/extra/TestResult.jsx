import Gap from "../util/Gap";
import stylesPc from "./TestResult.module.scss";

const style = stylesPc;
// 기본결과화면
export const TestResult = ({
  quizType,
  correctNum,
  incorrectNum,
  totalScore,
  unit,
  stepNum,
  passmark,
  viewWrongAnswers,
  onClick,
}) => {
  const ScoreBoard = () => {
    const Score = ({ quizNum }) => {
      return (
        <div className={style.score}>
          <div>{quizNum}</div>
          <div>X</div>
          <div>O</div>
        </div>
      );
    };

    return (
      <div className={style.scoreBoard}>
        <div className={style.row}>
          <div>Q</div>
          <div>1st</div>
          <div>2nd</div>
        </div>
        {/* Test Result 결과가 들어가는 곳 */}
        <Score quizNum={1} />
        <Score quizNum={2} />
        <Score quizNum={3} />
        <Score quizNum={4} />
      </div>
    );
  };

  const WrongAnswers = () => {
    const QuizQuestion = ({
      questionNum,
      questionText,
      correctAnswerNum,
      children,
    }) => {
      return (
        <div className={style.quizQuestion}>
          <div className={style.questionSentence}>
            <span className={style.questionNum}>{questionNum}. </span>
            <span className={style.questionText}>{questionText}</span>
          </div>
          <div className={style.answers}>{children}</div>
          {/* <div className={style.correctAnswer}>
            <div className={style.txtL}>Correct Answer</div>
            <div className={style.correctAnswerNum}>{correctAnswerNum}</div>
          </div> */}
        </div>
      );
    };

    const QuizAnswer = ({
      anserNum,
      answerText,
      correctAnswer,
      wrongAnswer,
    }) => {
      return (
        // <div className={style.quizAnswer}>
        //   <div className={`${style.answerNum} ${wrongAnswer && style.wrong}`}>
        //     {anserNum}
        //   </div>
        //   <div className={`${style.answerText} ${wrongAnswer && style.wrong}`}>
        //     {answerText}
        //   </div>
        // </div>
        <div className={style.quizAnswer}>
          <div className={style.answers}>
            <span className={style.correctIcon}></span>
            {/* <span className={style.label}>Correct:</span> */}
            <span className={style.correctAnswer}>{correctAnswer}</span>
          </div>
          <div className={style.answers}>
            <span className={style.incorrectIcon}></span>
            {/* <span className={style.label}>Wrong:</span> */}
            <div className={style.wrongAnswer}>{wrongAnswer}</div>
          </div>
        </div>
      );
    };

    return (
      <div className={style.wrongAnswers}>
        <div className={style.title}>Wrong Answers</div>
        <QuizQuestion
          questionNum={1}
          questionText={"How does Joon feel about the new teacher?"}
          correctAnswerNum={3}
        >
          <QuizAnswer
            correctAnswer={"He is joyfull."}
            wrongAnswer={"He is scared."}
          />
        </QuizQuestion>
        {/* <QuizQuestion
          questionNum={2}
          questionText={"How does Joon feel about the new teacher?"}
          correctAnswerNum={3}
        >
          <QuizAnswer anserNum={1} answerText={"He is joyfull."} />
          <QuizAnswer anserNum={2} answerText={"He is happy."} wrongAnswer />
          <QuizAnswer anserNum={3} answerText={"He is scared."} />
          <QuizAnswer anserNum={4} answerText={"He is scared."} />
          <div style={{ borderBottom: "1px dotted #00000050" }}></div>
        </QuizQuestion> */}
      </div>
    );
  };

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
        <div className={style.passmark}>Passmark: {passmark}</div>
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
          {!viewWrongAnswers && <ScoreBoard />}
          {/* ReadingComprehension4를 통과했을 때 보여줌 */}
          {viewWrongAnswers && <WrongAnswers />}
        </div>
        <Gap height={50} />
      </div>
      <div className={style.nextButton} onClick={onClick}>
        Next
      </div>
    </div>
  );
};

// 첨삭결과화면
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
