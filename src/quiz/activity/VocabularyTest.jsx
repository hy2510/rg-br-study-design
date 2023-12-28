import stylesPc from "./VocabularyTest.module.scss";
import { useState } from "react";
import { QuizBody, QuizHeader, QuizTemplate } from "../util/QuizTemplate";
import Gap from "../util/Gap";
import { IcoReturn } from "../util/Icons";

const style = stylesPc;

// 코멘트
const Comment = ({ text }) => {
  return <div className={style.comment}>{text}</div>;
};

// 카드넘버
const CardNumber = ({ number }) => {
  return <div className={style.cardNumber}>{number}</div>;
};

// 힌트버튼
const HintButton = ({ count, total }) => {
  return (
    <div className={style.hintButton}>
      Hint {count} / {total}
    </div>
  );
};

// VocabularyTest-유형1 (EB-KA,EB-KB,EB-KC)
export const VocabularyTest1 = () => {
  const [viewCorrectAct, _viewCorrectAct] = useState(false);
  const [viewIncorrectAct, _viewIncorrectAct] = useState(false);

  const runCorrectAct = () => {
    _viewCorrectAct(true);
    setTimeout(() => {
      _viewCorrectAct(false);
    }, 1000);
  };

  const runIncorrectAct = () => {
    _viewIncorrectAct(true);
    setTimeout(() => {
      _viewIncorrectAct(false);
    }, 1000);
  };

  const Container = ({ children }) => {
    return (
      <div className={style.vocabularyTest1}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const QuestionBox = ({ imgSrc }) => {
    return (
      <div className={style.questionBox}>
        <div className={style.wordImage}>
          <img src={imgSrc} width={"100%"} />
        </div>
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
        className={`${style.textCard} 
        ${viewCorrectAct && style.correct} 
        ${viewCorrectAct && "animate__animated animate__bounce"} 
        ${viewIncorrectAct && style.incorrect}
        ${viewIncorrectAct && "animate__animated animate__headShake"}
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

  return (
    <QuizTemplate>
      <QuizHeader
        currentQuizNumber={1}
        totalQuizNumber={4}
        attempts={3}
        quizTimer={"20:00"}
      />
      <Comment text={"Vocabulary Test"} />
      <QuizBody>
        <Gap height={15} />
        <Container>
          <QuestionBox
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-2-1.jpg"
            }
          />
          <Gap height={20} />
          <Answers>
            {/* 정답액션예시 */}
            <TextCard
              number={1}
              awnserText={"apple"}
              viewCorrectAct={viewCorrectAct}
              onClick={runCorrectAct}
            />
            {/* 오답액션예시 */}
            <TextCard
              number={2}
              awnserText={"alligator"}
              viewIncorrectAct={viewIncorrectAct}
              onClick={runIncorrectAct}
            />
            <TextCard number={3} awnserText={"ax"} />
          </Answers>
        </Container>
        <Gap height={15} />
      </QuizBody>
    </QuizTemplate>
  );
};

// VocabularyTest-유형2 (EB-1A,EB-1B,EB-1C)
export const VocabularyTest2 = () => {
  const [viewCorrectAct, _viewCorrectAct] = useState(false);
  const [viewIncorrectAct, _viewIncorrectAct] = useState(false);

  const runCorrectAct = () => {
    _viewCorrectAct(true);
    setTimeout(() => {
      _viewCorrectAct(false);
    }, 1000);
  };

  const runIncorrectAct = () => {
    _viewIncorrectAct(true);
    setTimeout(() => {
      _viewIncorrectAct(false);
    }, 1000);
  };

  const Container = ({ children }) => {
    return (
      <div className={style.vocabularyTest2}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const QuestionBox = ({ imgSrc, sentence }) => {
    return (
      <div className={style.questionBox}>
        <div className={style.wordImage}>
          <img src={imgSrc} width={"100%"} />
        </div>
        <div className={style.wordText}>{sentence}</div>
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
        className={`${style.textCard} 
        ${viewCorrectAct && style.correct} 
        ${viewCorrectAct && "animate__animated animate__bounce"} 
        ${viewIncorrectAct && style.incorrect}
        ${viewIncorrectAct && "animate__animated animate__headShake"}
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

  return (
    <QuizTemplate>
      <QuizHeader
        currentQuizNumber={1}
        totalQuizNumber={4}
        attempts={3}
        quizTimer={"20:00"}
      />
      <Comment text={"Vocabulary Test"} />
      <QuizBody>
        <Gap height={15} />
        <Container>
          <QuestionBox
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/br/eb/1a-003/eb-1a-003-s2-q2.jpg"
            }
            sentence={"Jack _____ the ball."}
          />
          <Gap height={20} />
          <Answers>
            {/* 정답액션예시 */}
            <TextCard
              number={1}
              awnserText={"kicks"}
              viewCorrectAct={viewCorrectAct}
              onClick={runCorrectAct}
            />
            {/* 오답액션예시 */}
            <TextCard
              number={2}
              awnserText={"catches"}
              viewIncorrectAct={viewIncorrectAct}
              onClick={runIncorrectAct}
            />
            <TextCard number={3} awnserText={"holds"} />
          </Answers>
        </Container>
        <Gap height={15} />
      </QuizBody>
    </QuizTemplate>
  );
};

// VocabularyTest-유형3 (EB-2A이상,PB-KC_A타입이상,PB-2A_B타입이상)
export const VocabularyTest3 = () => {
  const Container = ({ children }) => {
    return (
      <div className={style.vocabularyTest3}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const WordCard = ({ word, meaning, sentence, current, total }) => {
    return (
      <>
        <div className={style.wordCard}>
          <div className={style.wordTyping}>
            <div style={{ width: 70 }}></div>
            <div className={style.textField}>
              <input className={style.inputField} type="text" />
              <div className={style.wordText}>{word}</div>
            </div>
            <div className={style.enterButton}>
              <div className={style.enterIcon}>
                <IcoReturn width={20} height={20} />
              </div>
            </div>
          </div>
          <Gap height={20} />
          <div className={style.meaning}>
            <div className={style.txtL}>{meaning}</div>
            <Gap height={10} />
            <div className={style.txtP}>{sentence}</div>
          </div>
        </div>
      </>
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
      <Comment text={"Vocabulary Test"} />
      <QuizBody>
        <Container>
          <Gap height={20} />
          <WordCard
            word=""
            meaning="abj. 겁에 질린, 무서워하는"
            sentence={"abj. afraid of something"}
          />
          <HintButton count={2} total={2} />
        </Container>
      </QuizBody>
    </QuizTemplate>
  );
};

// VocabularyTest-유형4 (PB-KC,1A,1B,1C_B타입)
export const VocabularyTest4 = () => {
  const [viewCorrectAct, _viewCorrectAct] = useState(false);
  const [viewIncorrectAct, _viewIncorrectAct] = useState(false);

  const runCorrectAct = () => {
    _viewCorrectAct(true);
    setTimeout(() => {
      _viewCorrectAct(false);
    }, 1000);
  };

  const runIncorrectAct = () => {
    _viewIncorrectAct(true);
    setTimeout(() => {
      _viewIncorrectAct(false);
    }, 1000);
  };

  const Container = ({ children }) => {
    return (
      <div className={style.vocabularyTest4}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const QuestionBox = ({ imgSrc, meaning, sentence }) => {
    return (
      <div className={style.questionBox}>
        <div className={style.meaning}>{meaning}</div>
        <div className={style.sentence}>{sentence}</div>
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
        className={`${style.textCard} 
        ${viewCorrectAct && style.correct} 
        ${viewCorrectAct && "animate__animated animate__bounce"} 
        ${viewIncorrectAct && style.incorrect}
        ${viewIncorrectAct && "animate__animated animate__headShake"}
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

  return (
    <QuizTemplate>
      <QuizHeader
        currentQuizNumber={1}
        totalQuizNumber={4}
        attempts={3}
        quizTimer={"20:00"}
      />
      <Comment text={"Vocabulary Test"} />
      <QuizBody>
        <Gap height={15} />
        <Container>
          <QuestionBox
            meaning={"abj. 겁에 질린, 무서워하는"}
            sentence={"abj. afraid of something"}
          />
          <Gap height={20} />
          <Answers>
            {/* 정답액션예시 */}
            <TextCard
              number={1}
              awnserText={"kicks"}
              viewCorrectAct={viewCorrectAct}
              onClick={runCorrectAct}
            />
            {/* 오답액션예시 */}
            <TextCard
              number={2}
              awnserText={"catches"}
              viewIncorrectAct={viewIncorrectAct}
              onClick={runIncorrectAct}
            />
            <TextCard number={3} awnserText={"holds"} />
          </Answers>
        </Container>
        <Gap height={15} />
      </QuizBody>
    </QuizTemplate>
  );
};
