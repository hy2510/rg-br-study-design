import stylesPc from "./SummaryTest.module.scss";
import { useState } from "react";
import { QuizBody, QuizHeader, QuizTemplate } from "../util/QuizTemplate";
import { IcoArrowUp, IcoPlay, IcoStop } from "../util/Icons";
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

// SummaryTest1 (EB-1A~,PB-KC 이상)
export const SummaryTest1 = () => {
  const Container = ({ children }) => {
    return (
      <div className={style.summaryTest1}>
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
          viewCorrectAct && "animate__animated animate__tada"
        } ${viewIncorrectAct && "animate__animated animate__shakeX"}
            `}
        onClick={onClick}
      >
        <CardNumber number={number} />
        <div className={style.awnserText}>{awnserText}</div>
      </div>
    );
  };

  const Answers = ({ children }) => {
    return <div className={style.answers}>{children}</div>;
  };

  const CorrectTextCard = ({ correctAnswer, incorrectAnswer }) => {
    return (
      <div
        className={`${style.correctTextCard} ${
          !correctAnswer && !incorrectAnswer && style.question
        }`}
      >
        {!correctAnswer && !incorrectAnswer && (
          <div className={style.questionMark}>?</div>
        )}
        {correctAnswer && (
          <div className={style.correctAnswer}>{correctAnswer}</div>
        )}
        {incorrectAnswer && (
          <div className={style.incorrectAnswer}>{incorrectAnswer}</div>
        )}
      </div>
    );
  };

  const CorrectOrders = ({ children }) => {
    return <div className={style.correctOrders}>{children}</div>;
  };

  const CorrectDirection = () => {
    return (
      <div className={style.correctDirection}>
        <IcoArrowUp colorBlack width={24} height={24} />
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
      <Comment text={"Arrange the sentences in the correct order."} />
      <QuizBody>
        <Container>
          {/* <WordPlayButton sentence={"Playback of the completed sentence"} /> */}
          <WordPlayButton sentence={"Playback (completed sentence)"} />
          <Gap height={0} />
          <CorrectOrders>
            <CorrectTextCard
              correctAnswer={
                "Ned became a big pig so his dad told him to help."
              }
            />
            <CorrectTextCard
              incorrectAnswer={"So Ned put his cup away, and mopped the floor."}
            />
            <CorrectTextCard />
          </CorrectOrders>
          <CorrectDirection />
          <Answers>
            <TextCard
              number={1}
              awnserText={"He fed the hens and the ducks, too."}
            />
            <TextCard
              number={2}
              awnserText={"Then he petted his puppy in the shed."}
            />
            <TextCard
              number={3}
              awnserText={"His dad said he was a good pig."}
            />
          </Answers>
        </Container>
      </QuizBody>
    </QuizTemplate>
  );
};
