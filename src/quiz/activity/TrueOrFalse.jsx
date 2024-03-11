import stylesPc from "./TrueOrFalse.module.scss";
import stylesMobile from "./TrueOrFalse_m.module.scss";
import { useState } from "react";
import { QuizBody, QuizHeader, QuizTemplate } from "../util/QuizTemplate";
import { IcoPlay, IcoStop } from "../util/Icons";
import Gap from "../util/Gap";
import { CorrectPopup, IncorrectPopup } from "../extra/CorrectSign";
import { TrueSentencePopup } from "../extra/TrueSentencePopup";
import { useMobileDetect } from "../util/isMobile";

const readingUnit = "baro";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

// 코멘트
const Comment = ({ text }) => {
  return (
    <div className={`${style.comment} animate__animated animate__fadeInLeft`}>
      {text}
    </div>
  );
};

// TrueOrFalse
export const TrueOrFalse = () => {
  const [viewCorrectAct, _viewCorrectAct] = useState(false);
  const [viewIncorrectAct, _viewIncorrectAct] = useState(false);

  const runCorrectAct = () => {
    _viewCorrectAct(true);
    setTimeout(() => {
      _viewCorrectAct(false);
    }, 2000);
  };

  const runIncorrectAct = () => {
    _viewIncorrectAct(true);
    setTimeout(() => {
      _viewIncorrectAct(false);
    }, 2000);
  };

  const Container = ({ children }) => {
    return (
      <div className={style.trueOrFalse}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const QuestionText = ({ text }) => {
    return <div className={style.questionText}>{text}</div>;
  };

  const TextCard = ({
    awnserText,
    onClick,
    viewCorrectAct,
    viewIncorrectAct,
  }) => {
    return (
      <div
        className={`${style.textCard} 
        ${viewCorrectAct && style.correct} 
        ${viewCorrectAct && "animate__animated animate__fadeIn"} 
        ${viewIncorrectAct && style.incorrect}
        ${viewIncorrectAct && "animate__animated animate__headShake"}
        `}
        onClick={onClick}
      >
        <div className={style.answer}>
          {awnserText === "True" && <div className={style.true}>O</div>}
          {awnserText === "False" && <div className={style.false}>X</div>}
          <div className={style.awnserText}>{awnserText}</div>
        </div>
      </div>
    );
  };

  const Answers = ({ children }) => {
    return <div className={style.answers}>{children}</div>;
  };

  const [viewTrueSentence, _viewTrueSentence] = useState(false);

  return (
    <QuizTemplate>
      <QuizHeader
        currentQuizNumber={1}
        totalQuizNumber={4}
        attempts={3}
        quizTimer={"20:00"}
      />
      <Comment text={"True or False"} />
      <QuizBody>
        {/* 퀴즈 문제 */}
        {!viewTrueSentence && (
          <>
            <Gap height={15} />
            <Container>
              <Gap height={10} />
              <QuestionText text="Bears sleep for a long time in the winter." />
              <Gap height={10} />
              <Answers>
                {/* 정답예시 */}
                <TextCard
                  awnserText="True"
                  onClick={runCorrectAct}
                  viewCorrectAct={viewCorrectAct}
                />
                {/* 오답예시 */}
                <TextCard
                  awnserText="False"
                  onClick={runIncorrectAct}
                  viewIncorrectAct={viewIncorrectAct}
                />
              </Answers>
            </Container>
            <Gap height={15} />
          </>
        )}
        {/* correct sentence popup */}
        {viewTrueSentence && (
          <TrueSentencePopup
            title={"True Sentence"}
            sentence={"Bears sleep for a long time in the winter."}
          />
        )}
      </QuizBody>
      {viewCorrectAct && <CorrectPopup unit={readingUnit} />}
      {viewIncorrectAct && <IncorrectPopup unit={readingUnit} />}
    </QuizTemplate>
  );
};
