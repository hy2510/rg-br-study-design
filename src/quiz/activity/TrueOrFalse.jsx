import stylesPc from "./TrueOrFalse.module.scss";
import { useState } from "react";
import { QuizBody, QuizHeader, QuizTemplate } from "../util/QuizTemplate";
import { IcoPlay, IcoStop } from "../util/Icons";
import Gap from "../util/Gap";

const style = stylesPc;

// 코멘트
const Comment = ({ text }) => {
  return <div className={style.comment}>{text}</div>;
};

// TrueOrFalse
export const TrueOrFalse = () => {
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
        className={`${style.textCard} ${
          viewCorrectAct && "animate__animated animate__bounce"
        } ${viewIncorrectAct && "animate__animated animate__headShake"}
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
        <Gap height={15} />
        <Container>
          <Gap height={10} />
          <QuestionText text="Bears sleep for a long time in the winter." />
          <Gap height={10} />
          <Answers>
            <TextCard awnserText="True" />
            <TextCard awnserText="False" />
          </Answers>
        </Container>
        <Gap height={15} />
      </QuizBody>
    </QuizTemplate>
  );
};
