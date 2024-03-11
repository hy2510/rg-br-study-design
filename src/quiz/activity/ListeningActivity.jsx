import stylesPc from "./ListeningActivity.module.scss";
import stylesMobile from "./ListeningActivity_m.module.scss";
import { useState } from "react";
import { QuizBody, QuizHeader, QuizTemplate } from "../util/QuizTemplate";
import { IcoPlay, IcoReturn, IcoStop } from "../util/Icons";
import Gap from "../util/Gap";
import { CorrectPopup, IncorrectPopup } from "../extra/CorrectSign";
import { StepIntro } from "../extra/StepBoard";
import { TestResult } from "../extra/TestResult";
import { useMobileDetect } from "../util/isMobile";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

const readingUnit = "goma"; // 리딩유닛이름

// 코멘트
const Comment = ({ text }) => {
  return (
    <div className={`${style.comment} animate__animated animate__fadeInLeft`}>
      {text}
    </div>
  );
};

// 단어듣기버튼1
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

// 단어듣기버튼2
const WordPlayButton2 = () => {
  const [isPlay, _isPlay] = useState(true);

  const buttonToggle = () => {
    isPlay ? _isPlay(false) : _isPlay(true);
  };

  return (
    <div className={style.wordPlayButton2} onClick={buttonToggle}>
      {isPlay ? (
        <IcoPlay colorRed width={44} height={44} />
      ) : (
        <IcoStop colorGray width={44} height={44} />
      )}
    </div>
  );
};

// 카드넘버
const CardNumber = ({ number }) => {
  return <div className={style.cardNumber}>{number}</div>;
};

// ListeningActivity-유형1(EB-KA)
export const ListeningActivity1 = () => {
  const [introOut, _introOut] = useState(false);
  const [startQuiz, _startQuiz] = useState(false);
  const [endQuiz, _endQuiz] = useState(false);

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
      <div className={style.listeningActivity1}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const WordCard = ({
    imgSrc,
    onClick,
    viewCorrectAct,
    viewIncorrectAct,
    word,
  }) => {
    const [showWord, _showWord] = useState(false);

    return (
      <div
        className={`
        ${style.wordCard} 
        ${viewCorrectAct && style.correct} 
        ${viewCorrectAct && "animate__animated animate__fadeIn"}
        ${viewIncorrectAct && style.incorrect}
        ${viewIncorrectAct && "animate__animated animate__headShake"}
        `}
        onClick={onClick}
      >
        <img src={imgSrc} />
        {showWord && (
          <>
            <div className={style.word}>{word}</div>
            <div
              className={`${style.wordBlock} animate__animated animate__fadeIn`}
            ></div>
          </>
        )}
      </div>
    );
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
        <StepIntro
          stepOrder={1}
          quizType={"Listening Activity"}
          comment={"Arrange the items in the correct order."}
          unit={readingUnit}
          onClick={() => {
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
        <Comment text={"Listening Activity"} />
        <QuizBody>
          <WordPlayButton />
          {isMobile ? <Gap height={10} /> : <Gap height={15} />}
          <Container>
            {/* 정답액션예시 */}
            <WordCard
              imgSrc={
                "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/apple.png"
              }
              viewCorrectAct={viewCorrectAct}
              onClick={runCorrectAct}
              word={"Apple"}
            />
            {/* 오답액션예시 */}
            <WordCard
              imgSrc={
                "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/ant.png"
              }
              viewIncorrectAct={viewIncorrectAct}
              onClick={runIncorrectAct}
              word={"Ant"}
            />
            <WordCard
              imgSrc={
                "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/ax.png"
              }
            />
            <WordCard
              imgSrc={
                "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/ox.png"
              }
            />
            <WordCard
              imgSrc={
                "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/alligator.png"
              }
            />
          </Container>
          <Gap height={15} />
        </QuizBody>
        {viewCorrectAct && <CorrectPopup unit={readingUnit} />}
        {viewIncorrectAct && <IncorrectPopup unit={readingUnit} />}
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
        <TestResult
          quizType={"Listening Activity"}
          totalScore={100}
          correctNum={4}
          incorrectNum={0}
          stepNum={1}
          unit={readingUnit}
        />
      </div>
    </QuizTemplate>
  );
};

// ListeningActivity-유형2(EB-KB,KC)
export const ListeningActivity2 = () => {
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
      <div className={style.listeningActivity2}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const WordCard = ({ word, onClick, viewCorrectAct, viewIncorrectAct }) => {
    return (
      <div
        className={`${style.wordCard} 
        ${viewCorrectAct && style.correct} 
        ${viewCorrectAct && "animate__animated animate__fadeIn"} 
        ${viewIncorrectAct && style.incorrect}
        ${viewIncorrectAct && "animate__animated animate__headShake"}
        `}
        onClick={onClick}
      >
        <div className={style.txtL}>{word}</div>
      </div>
    );
  };

  return (
    <QuizTemplate>
      <QuizHeader
        currentQuizNumber={1}
        totalQuizNumber={4}
        quizTimer={"20:00"}
      />
      <Comment text={"Listening Activity"} />
      <QuizBody>
        <WordPlayButton />
        {isMobile ? <Gap height={10} /> : <Gap height={15} />}
        <Container>
          {/* 정답액션예시 */}
          <WordCard
            word={"Ant"}
            viewCorrectAct={viewCorrectAct}
            onClick={runCorrectAct}
          />
          {/* 오답액션예시 */}
          <WordCard
            word={"Ax"}
            viewIncorrectAct={viewIncorrectAct}
            onClick={runIncorrectAct}
          />
          <WordCard word={"Alligaotr"} />
          <WordCard word={"Ox"} />
          <WordCard word={"Apple"} />
          <WordCard word={"Pupple"} />
        </Container>
        {isMobile ? <Gap height={10} /> : <Gap height={15} />}
      </QuizBody>
      {viewCorrectAct && <CorrectPopup unit={readingUnit} />}
      {viewIncorrectAct && <IncorrectPopup unit={readingUnit} />}
    </QuizTemplate>
  );
};

// ListeningActivity-유형3 (EB-1A,1B)
export const ListeningActivity3 = () => {
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
      <div className={style.listeningActivity3}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const ImageCard = ({
    imgSrc,
    number,
    onClick,
    viewCorrectAct,
    viewIncorrectAct,
  }) => {
    return (
      <div
        className={`${style.imageCard} 
        ${viewCorrectAct && style.correct} 
        ${viewCorrectAct && "animate__animated animate__fadeIn"} 
        ${viewIncorrectAct && style.incorrect}
        ${viewIncorrectAct && "animate__animated animate__headShake"}
        `}
        onClick={onClick}
      >
        <img
          src={imgSrc}
          width={isMobile ? "auto" : "100%"}
          height={isMobile ? "100%" : "auto"}
        />
        <div className={style.cardNumberPosition}>
          <CardNumber number={number} />
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
      <Comment text={"Listening Activity"} />
      <QuizBody>
        <WordPlayButton />
        {isMobile ? <Gap height={10} /> : <Gap height={15} />}

        <Container>
          {/* 정답액션예시 */}
          <ImageCard
            number={1}
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/br/eb/1a-003/eb-1a-003-1-2-a1.png"
            }
            viewCorrectAct={viewCorrectAct}
            onClick={runCorrectAct}
          />
          {/* 오답액션예시 */}
          <ImageCard
            number={2}
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/br/eb/1a-003/eb-1a-003-1-2-a2.png"
            }
            viewIncorrectAct={viewIncorrectAct}
            onClick={runIncorrectAct}
          />
        </Container>
        {isMobile ? <Gap height={0} /> : <Gap height={15} />}
      </QuizBody>
      {viewCorrectAct && <CorrectPopup unit={readingUnit} />}
      {viewIncorrectAct && <IncorrectPopup unit={readingUnit} />}
    </QuizTemplate>
  );
};

// ListeningActivity-유형4 (EB-1C)
export const ListeningActivity4 = () => {
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
      <div className={style.listeningActivity4}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const QuestionBox = ({ imgSrc }) => {
    return (
      <div className={style.questionBox}>
        <img
          src={imgSrc}
          width={isMobile ? "auto" : "250px"}
          height={isMobile ? "100%" : "auto"}
        />
      </div>
    );
  };

  const SoundCard = ({ number, onClick, viewCorrectAct, viewIncorrectAct }) => {
    return (
      <div
        className={`${style.soundCard} 
        ${viewCorrectAct && style.correct} 
        ${viewCorrectAct && "animate__animated animate__fadeIn"} 
        ${viewIncorrectAct && style.incorrect}
        ${viewIncorrectAct && "animate__animated animate__headShake"}
        `}
      >
        <div className={style.cardNumberPosition}>
          <CardNumber number={number} />
        </div>
        <div className={style.playSoundPosition}>
          <WordPlayButton2 />
        </div>
        <span className={style.enterButton} onClick={onClick}>
          <span>
            <IcoReturn width={15} height={15} />
          </span>
        </span>
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
      <Comment text={"Listening Activity"} />
      <QuizBody>
        {isMobile ? <Gap height={0} /> : <Gap height={15} />}
        <Container>
          <QuestionBox
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/br/eb/1b-010/eb-1b-010-s1-q1.jpg"
            }
          />
          <Gap height={15} />
          <Answers>
            {/* 정답액션예시 */}
            <SoundCard
              number={1}
              viewCorrectAct={viewCorrectAct}
              onClick={runCorrectAct}
            />
            {/* 오답액션예시 */}
            <SoundCard
              number={2}
              viewIncorrectAct={viewIncorrectAct}
              onClick={runIncorrectAct}
            />
            <SoundCard number={3} />
          </Answers>
        </Container>
        {isMobile ? <Gap height={5} /> : <Gap height={15} />}
      </QuizBody>
      {viewCorrectAct && <CorrectPopup unit={readingUnit} />}
      {viewIncorrectAct && <IncorrectPopup unit={readingUnit} />}
    </QuizTemplate>
  );
};
