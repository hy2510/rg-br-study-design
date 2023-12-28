import stylesPc from "./ClozeTest.module.scss";
import { useEffect, useState } from "react";
import { QuizBody, QuizHeader, QuizTemplate } from "../util/QuizTemplate";
import { IcoArrowUp, IcoPlay, IcoStop, IcoReturn } from "../util/Icons";
import Gap from "../util/Gap";

const style = stylesPc;

// 코멘트
const Comment = ({ text }) => {
  return <div className={style.comment}>{text}</div>;
};

// 듣기버튼 (문장 폰트 작게)
const WordPlayButton = ({ sentence }) => {
  const [isPlay, _isPlay] = useState(false);

  const buttonToggle = () => {
    isPlay ? _isPlay(false) : _isPlay(true);
  };

  return (
    <div className={style.wordPlayButton} onClick={buttonToggle}>
      {isPlay ? (
        <IcoPlay colorRed width={24} height={24} />
      ) : (
        <IcoStop colorGray width={24} height={24} />
      )}
      {sentence && <div className={style.txtL}>{sentence}</div>}
    </div>
  );
};

// 카드넘버
const CardNumber = ({ number }) => {
  return <div className={style.cardNumber}>{number}</div>;
};

// ClozeTest1
export const ClozeTest1 = () => {
  const Container = ({ children }) => {
    return (
      <div className={style.clozeTest1}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const AnswerBox = ({
    width,
    currentOrder,
    correctAnswer,
    incorrectAnswer,
  }) => {
    return (
      <span
        className={`${style.answerBox} ${currentOrder && style.currentOrder} ${
          correctAnswer && style.correctAnswer
        } ${incorrectAnswer && style.incorrectAnswer}`}
      >
        {!correctAnswer && !incorrectAnswer ? (
          currentOrder ? (
            <span className={style.currentInput}>
              <input
                id="textFild"
                style={{ width: width + 50 + "px" }}
                type="text"
              />
              <span className={style.enterButton}>
                <span>
                  <IcoReturn width={15} height={15} />
                </span>
              </span>
            </span>
          ) : (
            <span className={style.otherInput}>
              <input style={{ width: width + "px" }} disabled />
            </span>
          )
        ) : null}
        {correctAnswer}
        {incorrectAnswer}
      </span>
    );
  };

  const QuestionBox = ({ children }) => {
    return <div className={style.questionBox}>{children}</div>;
  };

  return (
    <QuizTemplate>
      <QuizHeader
        currentQuizNumber={1}
        totalQuizNumber={4}
        attempts={3}
        quizTimer={"20:00"}
      />
      <Comment text={"Cloze Test"} />
      <QuizBody>
        <Container>
          <Gap height={0} />
          <WordPlayButton sentence={"Playback"} />
          <QuestionBox>
            <span>London</span>
            <span>is</span>
            <span>the</span>
            <AnswerBox
              width={80}
              currentOrder={true}
              correctAnswer={""}
              incorrectAnswer={""}
            />
            <AnswerBox
              width={42}
              currentOrder={false}
              correctAnswer={""}
              incorrectAnswer={""}
            />
            <span>of</span>
            <span>the</span>
            <span>United</span>
            <span>Kingdom.</span>
          </QuestionBox>
        </Container>
      </QuizBody>
    </QuizTemplate>
  );
};

// ClozeTest2
export const ClozeTest2 = () => {
  const Container = ({ children }) => {
    return (
      <div className={style.clozeTest2}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const TextCard = ({
    number,
    awnserText,
    onClick,
    viewCorrectAct,
    viewIncorrectAct,
  }) => {
    return (
      <div
        className={`${style.textCard} ${
          viewCorrectAct && "animate__animated animate__bounce"
        } ${viewIncorrectAct && "animate__animated animate__headShake"}
              `}
        onClick={onClick}
      >
        <CardNumber number={number} />
        <div className={style.awnserText}>{awnserText}</div>
      </div>
    );
  };

  const Answers = ({ children }) => {
    return (
      <div className={style.answers}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const AnswerBox = ({ currentOrder, correctAnswer, incorrectAnswer }) => {
    return (
      <span
        className={`${style.answerBox} ${currentOrder && style.currentOrder} ${
          correctAnswer && style.correctAnswer
        } ${incorrectAnswer && style.incorrectAnswer}`}
      >
        {!correctAnswer && !incorrectAnswer ? (
          <span className={style.currentInput}></span>
        ) : (
          ""
        )}
        {correctAnswer}
        {incorrectAnswer}
      </span>
    );
  };

  const QuestionBox = ({ children }) => {
    return <div className={style.questionBox}>{children}</div>;
  };

  return (
    <QuizTemplate>
      <QuizHeader
        currentQuizNumber={1}
        totalQuizNumber={4}
        attempts={3}
        quizTimer={"20:00"}
      />
      <Comment text={"Summary Test"} />
      <QuizBody>
        <Container>
          <Gap height={0} />
          <WordPlayButton sentence={"Playback"} />
          <QuestionBox>
            <span>London</span>
            <span>is</span>
            <span>the</span>
            <AnswerBox correctAnswer={""} incorrectAnswer={""} />
            <span>city</span>
            <span>of</span>
            <span>the</span>
            <span>United</span>
            <span>Kingdom.</span>
          </QuestionBox>
          <Gap height={30} />
          <Answers>
            <TextCard number={1} awnserText={"capital"} />
            <TextCard number={2} awnserText={"sub"} />
            <TextCard number={3} awnserText={"apple"} />
            <TextCard number={4} awnserText={"ant"} />
          </Answers>
        </Container>
      </QuizBody>
    </QuizTemplate>
  );
};
