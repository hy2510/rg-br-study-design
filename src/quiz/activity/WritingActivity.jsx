import stylesPc from "./WritingActivity.module.scss";
import stylesMobile from "./WritingActivity_m.module.scss";
import { useState } from "react";
import { QuizBody, QuizHeader, QuizTemplate } from "../util/QuizTemplate";
import { IcoArrowUp, IcoPlay, IcoStop } from "../util/Icons";
import Gap from "../util/Gap";
import { SubmitRevision, TestResult } from "../extra/TestResult";
import {
  RevisionFreeIntro,
  RevisionIntro,
  StepIntro,
} from "../extra/StepBoard";
import { useMobileDetect } from "../util/isMobile";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;
const readingUnit = "baro";

// 코멘트
const Comment = ({ text }) => {
  return (
    <div className={`${style.comment} animate__animated animate__fadeInLeft`}>
      {text}
    </div>
  );
};

// 단어듣기버튼
const WordPlayButton = () => {
  const [isPlay, _isPlay] = useState(true);

  const buttonToggle = () => {
    isPlay ? _isPlay(false) : _isPlay(true);
  };

  return (
    <div className={style.wordPlayButton} onClick={buttonToggle}>
      {isPlay ? (
        <IcoPlay colorRed width={34} height={34} />
      ) : (
        <IcoStop colorGray width={34} height={34} />
      )}
      <span className={style.txtL}>Playback</span>
    </div>
  );
};

// 다음문제로넘어가기버튼
const GoNextButton = () => {
  return (
    <div className={`${style.goNextButton} animate__animated animate__flash`}>
      Next
    </div>
  );
};

// WritingActivity1
export const WritingActivity1 = () => {
  const Container = ({ children }) => {
    return (
      <div className={style.writingActivity1}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const EnterBox = ({ children, correct, incorrect }) => {
    return (
      <div className={style.enterBox}>
        {!correct && !incorrect && <>{children}</>}
        {correct && (
          <div className={style.correctText}>
            {"Spring is a good time to see bears."}
          </div>
        )}
        {incorrect && (
          <div className={style.incorrectText}>
            {"Spring is a good time to see bears."}
          </div>
        )}
      </div>
    );
  };

  const TextCard = ({
    awnserText,
    onClick,
    viewCorrectAct,
    viewIncorrectAct,
    sendTop,
  }) => {
    return (
      <div
        className={`${style.textCard} ${sendTop && style.send} ${
          viewCorrectAct && "animate__animated animate__fadeIn"
        } ${viewIncorrectAct && "animate__animated animate__headShake"}
            `}
        onClick={onClick}
      >
        <div className={style.awnserText}>{awnserText}</div>
      </div>
    );
  };

  const Answers = ({ children }) => {
    return <div className={style.answers}>{children}</div>;
  };

  const CorrectDirection = () => {
    return (
      <div className={style.correctDirection}>
        <div className={style.icoArrowUp}></div>
        {/* <IcoArrowUp colorBlack width={24} height={24} /> */}
      </div>
    );
  };

  return (
    <QuizTemplate>
      <QuizHeader
        currentQuizNumber={1}
        totalQuizNumber={4}
        attempts={3}
        quizTimer={"20:00"}
      />
      <Comment text={"Writing Activity"} />
      <QuizBody>
        <WordPlayButton />
        <Gap height={15} />
        <Container>
          <EnterBox correct={false} incorrect={false}>
            <TextCard awnserText="Spring" />
            <TextCard awnserText="is" />
          </EnterBox>
          <CorrectDirection />
          <Answers>
            <TextCard awnserText="Spring" sendTop={true} />
            <TextCard awnserText="is" sendTop={true} />
            <TextCard awnserText="a good" />
            <TextCard awnserText="time" />
            <TextCard awnserText="to see" />
            <TextCard awnserText="bears." />
          </Answers>
          {/* 다음 문제로 넘어가기 전 활성화 됨 */}
          <GoNextButton />
        </Container>
        {isMobile ? <Gap height={5} /> : <Gap height={15} />}
      </QuizBody>
    </QuizTemplate>
  );
};

// WritingActivity2
export const WritingActivity2 = () => {
  const [introOut, _introOut] = useState(false);
  const [startQuiz, _startQuiz] = useState(false);
  const [endQuiz, _endQuiz] = useState(false);

  const Container = ({ children }) => {
    return (
      <div className={style.writingActivity2}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const TabButton = ({ number, isSelected }) => {
    return (
      <div className={`${style.tabButton} ${isSelected && style.active}`}>
        {number}
      </div>
    );
  };

  const Tabs = ({ children }) => {
    return <div className={style.tabs}>{children}</div>;
  };

  const QuestionText = ({ text }) => {
    return <div className={style.questionText}>{text}</div>;
  };

  const WritingArea = ({ children }) => {
    return (
      <div className={style.writingArea}>
        <textarea placeholder="Please fill out within 30 to 300 characters." />
        {children}
      </div>
    );
  };

  const WordLimitIndicator = ({ limit, words }) => {
    return (
      <div className={style.wordLimitIndicator}>
        <div className={style.limit}>• Word Limit: {limit}</div>
        <div className={style.words}>• The number of words: {words}</div>
      </div>
    );
  };

  const SaveButton = () => {
    return <div className={style.saveButton}>Save</div>;
  };

  const SubmitButton = () => {
    return (
      <div
        style={{ opacity: "0.5", cursor: "default" }}
        className={style.submitButton}
      >
        Submit
      </div>
    );
  };

  const GoNextStepBox = ({ children }) => {
    return <div className={style.goNextStepBox}>{children}</div>;
  };

  return (
    <QuizTemplate>
      {/* 퀴즈 인트로 */}
      <div
        className={`animate__animated ${
          !introOut ? "animate__bounceInRight" : "animate__bounceOutLeft"
        }`}
        style={
          startQuiz
            ? { display: "none" }
            : endQuiz
            ? { display: "none" }
            : { display: "block" }
        }
      >
        {/* No Revision일 때 */}
        {/* <StepIntro
          stepOrder={5}
          quizType={"Writing Activity"}
          comment={"Try writing in a way that fits the question."}
          unit={readingUnit}
          onClick={() => {
            {
              _introOut(true);
              setTimeout(() => {
                _startQuiz(true);
              }, 1000);
            }
          }}
        /> */}
        {/* All 또는 Limit일 때 */}
        {/* <RevisionIntro
          stepOrder={5}
          quizType={"Writing Activity"}
          comment={"글쓰기를 하고 첨삭을 받으세요."}
          revisionGoalNum={4}
          revisionCompletedNum={0}
          revisionCountNum={4}
          onClick={() => {
            {
              _introOut(true);
              setTimeout(() => {
                _startQuiz(true);
              }, 1000);
            }
          }}
        /> */}
        {/* Free일 때 */}
        <RevisionFreeIntro
          stepOrder={5}
          quizType={"Writing Activity"}
          comment={"글쓰기를 하시겠어요?"}
          revisionCountNum={0}
          revisionGoalNum={4}
          revisionCompletedNum={0}
          onClickGo={() => {
            {
              _introOut(true);
              setTimeout(() => {
                _startQuiz(true);
              }, 1000);
            }
          }}
        />
      </div>
      {/* 퀴즈 화면 */}
      <div
        style={
          startQuiz
            ? endQuiz
              ? { display: "none" }
              : { display: "block" }
            : { display: "none" }
        }
      >
        <QuizHeader
          currentQuizNumber={1}
          totalQuizNumber={4}
          attempts={3}
          quizTimer={"20:00"}
        />
        <Comment text={"Writing Activity"} />
        <QuizBody>
          {isMobile ? <></> : <Gap height={15} />}
          <Container>
            <Tabs>
              <TabButton number={1} isSelected={true} />
              <TabButton number={2} isSelected={false} />
              <TabButton number={3} isSelected={false} />
            </Tabs>
            <QuestionText
              text={
                "Describe briefly what happens in the book or the main idea."
              }
            />
            <WritingArea />
            <GoNextStepBox>
              <WordLimitIndicator limit={"30~300"} words={0} />
              <div className={style.groupButtons}>
                <SaveButton />
                <SubmitButton />
              </div>
            </GoNextStepBox>
          </Container>
          {isMobile ? <Gap height={5} /> : <Gap height={15} />}
        </QuizBody>
        {/* Test Result를 보기 위한 임시 버튼 */}
        <button
          onClick={() => {
            _endQuiz(true);
          }}
          style={{ position: "fixed", bottom: 0 }}
        >
          퀴즈종료
        </button>
      </div>
      {/* Test Result (퀴즈 종료) */}
      <div style={endQuiz ? { display: "block" } : { display: "none" }}>
        {/* <TestResult
          quizType={"Listening Activity"}
          totalScore={100}
          correctNum={4}
          incorrectNum={0}
          stepNum={1}
          unit={readingUnit}
        /> */}
        <SubmitRevision
          stepOrder={5}
          quizType={"Writing Activity"}
          title={"이달의 첨삭"}
          comment={"글쓰기 첨삭을 받으시겠어요?"}
          revisionCountNum={1}
          revisionGoalNum={4}
          revisionCompletedNum={0}
        />
      </div>
    </QuizTemplate>
  );
};
