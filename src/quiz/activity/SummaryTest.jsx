import stylesPc from "./SummaryTest.module.scss";
import { useState } from "react";
import { QuizBody, QuizHeader, QuizTemplate } from "../util/QuizTemplate";
import { IcoArrowUp, IcoPlay, IcoStop } from "../util/Icons";
import Gap from "../util/Gap";

const style = stylesPc;

// 코멘트
const Comment = ({ text }) => {
  return (
    <div className={`${style.comment} animate__animated animate__fadeInLeft`}>
      {text}
    </div>
  );
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

// 힌트버튼
const HintButton = ({ count, total }) => {
  return (
    <div className={style.hintButton}>
      Chance {count} / {total}
    </div>
  );
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
          viewCorrectAct && "animate__animated animate__fadeIn"
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
          <div className={style.questionMark}>
            Arrange the items in the correct order.
          </div>
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
      <Comment text={"Summary Test"} />
      <QuizBody>
        <Container>
          {/* <WordPlayButton sentence={"Playback of the completed sentence"} /> */}
          <WordPlayButton sentence={"Playback (completed sentence)"} />
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
          <HintButton count={1} total={2} />
        </Container>
      </QuizBody>
    </QuizTemplate>
  );
};

// SummaryTest2 (EB-1A~,PB-KC 이상)
export const SummaryTest2 = () => {
  const Container = ({ children }) => {
    return (
      <div className={style.summaryTest2}>
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
          viewCorrectAct && "animate__animated animate__fadeIn"
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
        {!correctAnswer && !incorrectAnswer ? (currentOrder ? "?" : "") : ""}
        {correctAnswer}
        {incorrectAnswer}
      </span>
    );
  };

  const QuestionBox = ({ children }) => {
    return <div className={style.questionBox}>{children}</div>;
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
      <Comment text={"Summary Test"} />
      <QuizBody>
        <Container>
          {/* <WordPlayButton sentence={"Playback of the completed sentence"} /> */}
          {/* <WordPlayButton sentence={"Playback (completed sentence)"} /> */}
          {/* <Gap height={0} /> */}
          <QuestionBox>
            Ray and Herbie were{" "}
            <AnswerBox
              currentOrder={false}
              correctAnswer={"sitting outside the house"}
              incorrectAnswer={""}
            />
            . Ray was busy{" "}
            <AnswerBox
              currentOrder={false}
              correctAnswer={""}
              incorrectAnswer={"picking ticks off"}
            />{" "}
            of Shadow and killing them when the girls walked by. They were on
            their way to the pet show, the prizes were Burger Paradise coupons.
            Yummy. Both Ray and Herbie wanted hamburgers, but they were not
            going to the pet show to participate. They just wanted to{" "}
            <AnswerBox
              currentOrder={true}
              correctAnswer={""}
              incorrectAnswer={""}
            />
            . They grabbed the baseball bank and made their way to the pet show.
            After they were there for a while, they decided it was{" "}
            <AnswerBox
              currentOrder={false}
              correctAnswer={""}
              incorrectAnswer={""}
            />{" "}
            . Herbie sat his bank on the counter and started sitting the
            <AnswerBox
              currentOrder={false}
              correctAnswer={""}
              incorrectAnswer={""}
            />{" "}
            . The manager came up to Herbie and told him he would have to go to
            the bank and change the
            <AnswerBox
              currentOrder={false}
              correctAnswer={""}
              incorrectAnswer={""}
            />{" "}
            , because they didn't take pennies. As they were leaving to change
            the money, they joined
            <AnswerBox
              currentOrder={false}
              correctAnswer={""}
              incorrectAnswer={""}
            />
            and got free hamburgers, fries, sodas, and crayons. The boys were
            happy, but they still went to the bank. Outside the bank they saw a
            dog sitting in the car. They thought to themselves that the dog must
            be hot, so they let the window down so the dog could get some air.
            When Herbie opened the door, the dog took off and
            <AnswerBox
              currentOrder={false}
              correctAnswer={""}
              incorrectAnswer={""}
            />{" "}
            . Inside the bank there was
            <AnswerBox
              currentOrder={false}
              correctAnswer={""}
              incorrectAnswer={""}
            />
            . The dog knocked the
            <AnswerBox
              currentOrder={false}
              correctAnswer={""}
              incorrectAnswer={""}
            />
            the robbery and Herbie's pennies flew everywhere. As the robber
            tried to make and escape he slipped on the pennies and was captured.
            Herbie and Hamburger Head were now heroes. The bank owner thanked
            them by taking them and their family to dinner. He also bought
            Hamburger Head a house. Herbie's dad finally decided that he
          </QuestionBox>
          <CorrectDirection />
          <Answers>
            <TextCard number={1} awnserText={"spy on all the other kids"} />
            <TextCard number={2} awnserText={"time to eat hamburgers"} />
            <TextCard number={3} awnserText={"pennies in rolls of ten"} />
            <TextCard number={4} awnserText={"a first grade party"} />
            <TextCard number={5} awnserText={"ran into the bank"} />
            <TextCard number={6} awnserText={"pennies into dollars"} />
            <TextCard number={7} awnserText={"a robbery going on"} />
            <TextCard number={8} awnserText={"water pistol away from"} />
            <TextCard number={9} awnserText={"could keep the dog"} />
          </Answers>
        </Container>
      </QuizBody>
    </QuizTemplate>
  );
};
