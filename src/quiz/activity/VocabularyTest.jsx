import stylesPc from "./VocabularyTest.module.scss";
import stylesMobile from "./VocabularyTest_m.module.scss";
import { useEffect, useState } from "react";
import { QuizBody, QuizHeader, QuizTemplate } from "../util/QuizTemplate";
import Gap from "../util/Gap";
import { IcoPlay, IcoReturn, IcoStop } from "../util/Icons";
import { CorrectPopup, IncorrectPopup } from "../extra/CorrectSign";
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

// 단어듣기버튼 (힌트)
const WordPlayButton = () => {
  const [isPlay, _isPlay] = useState(true);

  const buttonToggle = () => {
    isPlay ? _isPlay(false) : _isPlay(true);
  };

  return (
    <div className={style.wordPlayButton} onClick={buttonToggle}>
      {isPlay ? (
        <IcoPlay colorRed width={40} height={40} />
      ) : (
        <IcoStop colorGray width={40} height={40} />
      )}
      <span className={style.txtL}>Playback</span>
    </div>
  );
};

// 카드넘버
const CardNumber = ({ number }) => {
  return <div className={style.cardNumber}>{number}</div>;
};

// 힌트버튼
const HintButton = ({ count, total }) => {
  const [viewHintPopup, _viewHintPopup] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <div
        className={style.hintButton}
        onClick={() => {
          _viewHintPopup(true);
        }}
      >
        <span>
          Hint {count} / {total}
        </span>
      </div>
      {count != 0 && viewHintPopup && (
        <div
          style={{ position: "relative" }}
          className="animate__animated animate__fadeIn"
        >
          <div className={style.hintPopup}>
            <WordPlayButton />
          </div>
          <div
            className={style.screenBlock}
            onClick={() => {
              _viewHintPopup(false);
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

// 리뷰(페널티)
const TestReview = ({ title, children, onClick, active }) => {
  return (
    <div className={`${style.testReview}`}>
      <div className={style.title}>{title}</div>
      <div className={style.container}>
        <div className={style.sentence}>{children}</div>
      </div>
      <div
        className={`${active ? style.nextButton : style.deactNextButton} ${
          active && "animate__animated animate__bounce"
        }`}
        onClick={onClick}
      >
        Next
      </div>
    </div>
  );
};

// 리뷰(페널티)에 들어갈 빈칸
const ReviewAnswer = ({ id, currentOrder, correctAnswer }) => {
  const [inputVal, _inputVal] = useState("");
  const saveVal = (e) => {
    _inputVal(e.target.value);
  };

  return (
    <>
      {correctAnswer != inputVal && (
        <span
          className={`${style.reviewAnswer} ${
            currentOrder && style.currentOrder
          }`}
        >
          {currentOrder ? (
            <span className={style.currentInput}>
              <input
                id={`textFild${id}`}
                type="text"
                value={inputVal}
                onChange={saveVal}
                autoCapitalize="off"
                autocomplete="off"
                autocorrect="off"
                inputmode="search"
              />
              {/* <span className={style.enterButton}>
                <span>
                  <IcoReturn width={15} height={15} />
                </span>
              </span> */}
            </span>
          ) : (
            <span className={style.otherInput}>
              <input disabled />
            </span>
          )}
          <div className={style.hintText}>{correctAnswer}</div>
        </span>
      )}
      {correctAnswer == inputVal && (
        <span
          className={`${style.reviewAnswer} ${style.correctAnswer} animate__animated animate__flipInX`}
        >
          {correctAnswer}
        </span>
      )}
    </>
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
        ${viewCorrectAct && "animate__animated animate__fadeIn"} 
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
        {isMobile ? <></> : <Gap height={15} />}
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
        {isMobile ? <Gap height={5} /> : <Gap height={15} />}
      </QuizBody>
      {viewCorrectAct && <CorrectPopup unit={readingUnit} />}
      {viewIncorrectAct && <IncorrectPopup unit={readingUnit} />}
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
        ${viewCorrectAct && "animate__animated animate__fadeIn"} 
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
        {isMobile ? <></> : <Gap height={15} />}
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
        {isMobile ? <Gap height={5} /> : <Gap height={15} />}
      </QuizBody>
      {viewCorrectAct && <CorrectPopup unit={readingUnit} />}
      {viewIncorrectAct && <IncorrectPopup unit={readingUnit} />}
    </QuizTemplate>
  );
};

// VocabularyTest-유형3 (EB-2A이상,PB-KC_A타입이상,PB-2A_B타입이상)
export const VocabularyTest3 = () => {
  const [viewTestReview, _viewTestReview] = useState(true);

  const Container = ({ children }) => {
    return (
      <div className={style.vocabularyTest3}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const WordCard = ({ meaning, sentence, current, total, correctAnswer }) => {
    const [inputVal, _inputVal] = useState("");
    const saveVal = (e) => {
      _inputVal(e.target.value);
    };
    const [incorrectAct, _incorrectAct] = useState("");

    return (
      <div className={style.wordCard}>
        <div className={style.wordTyping}>
          <div style={{ width: isMobile ? 0 : 70 }}></div>
          <div
            className={`${style.textField} animate__animated ${incorrectAct} ${
              incorrectAct && style.incorrect
            }`}
          >
            {inputVal != correctAnswer && (
              <>
                <input
                  className={style.inputField}
                  type="text"
                  value={inputVal}
                  onChange={saveVal}
                  autoCapitalize="off"
                  autocomplete="off"
                  autocorrect="off"
                  inputmode="search"
                />
                <div className={style.wordText}></div>
              </>
            )}
            {inputVal == correctAnswer && (
              <div
                className={`${style.correctAnswer} animate__animated animate__flipInX`}
              >
                {correctAnswer}
              </div>
            )}
          </div>
          <div
            className={style.enterButton}
            onClick={() => {
              _incorrectAct("animate__headShake");
              setTimeout(() => {
                _incorrectAct("");
              }, 2000);
            }}
          >
            {inputVal != correctAnswer && (
              <div className={style.enterIcon}>
                <IcoReturn width={20} height={20} />
              </div>
            )}
            {inputVal == correctAnswer && <></>}
          </div>
        </div>
        <Gap height={isMobile ? 50 : 20} />
        <div className={style.meaning}>
          <div className={style.txtL}>{meaning}</div>
          <Gap height={10} />
          <div className={style.txtP}>{sentence}</div>
        </div>
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
      <Comment text={"Vocabulary Test"} />
      <QuizBody>
        {!viewTestReview && (
          <Container>
            <Gap height={20} />
            <WordCard
              meaning="abj. 겁에 질린, 무서워하는"
              sentence={"abj. afraid of something"}
              correctAnswer="scare"
            />
            <HintButton count={2} total={2} />
          </Container>
        )}
        {viewTestReview && (
          <TestReview title={"Test Review"} active={false}>
            <ReviewAnswer currentOrder={true} correctAnswer={"scare"} />
            <ReviewAnswer currentOrder={false} correctAnswer={"scare"} />
            <ReviewAnswer currentOrder={false} correctAnswer={"scare"} />
          </TestReview>
        )}
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
        ${viewCorrectAct && "animate__animated animate__fadeIn"} 
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
        {isMobile ? <></> : <Gap height={15} />}
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
        {isMobile ? <Gap height={5} /> : <Gap height={15} />}
      </QuizBody>
      {viewCorrectAct && <CorrectPopup unit={readingUnit} />}
      {viewIncorrectAct && <IncorrectPopup unit={readingUnit} />}
    </QuizTemplate>
  );
};
