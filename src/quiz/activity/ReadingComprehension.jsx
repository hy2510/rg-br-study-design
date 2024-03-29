import stylesPc from "./ReadingComprehension.module.scss";
import stylesMobile from "./ReadingComprehension_m.module.scss";
import { useState } from "react";
import { QuizBody, QuizHeader, QuizTemplate } from "../util/QuizTemplate";
import { IcoPlay, IcoReturn, IcoStop } from "../util/Icons";
import Gap from "../util/Gap";
import { CorrectPopup, IncorrectPopup } from "../extra/CorrectSign";
import { TestResult } from "../extra/TestResult";
import { StepIntro } from "../extra/StepBoard";
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

// 듣기버튼1 (문장 폰트 크게)
const WordPlayButton = ({ question }) => {
  const [isPlay, _isPlay] = useState(false);

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
      {question && <div className={style.txtL}>{question}</div>}
    </div>
  );
};

// 듣기버튼2 (문장 폰트 작게)
const WordPlayButton2 = ({ sentence }) => {
  const [isPlay, _isPlay] = useState(false);

  const buttonToggle = () => {
    isPlay ? _isPlay(false) : _isPlay(true);
  };

  return (
    <div className={style.wordPlayButton2} onClick={buttonToggle}>
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

// ReadingComprehension1 (EB-KA)
export const ReadingComprehension1 = () => {
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
      <div className={style.readingComprehension1}>
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
      <Comment text={"Reading Comprehension"} />
      <QuizBody>
        {isMobile ? <Gap height={0} /> : <Gap height={15} />}
        <WordPlayButton question={"The alligator has an ax!"} />
        {isMobile ? <Gap height={10} /> : <Gap height={15} />}
        <Container>
          {/* 정답액션예시 */}
          <ImageCard
            number={1}
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-3-1-a1.png"
            }
            viewCorrectAct={viewCorrectAct}
            onClick={runCorrectAct}
          />
          {/* 오답액션예시 */}
          <ImageCard
            number={2}
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-3-1-a2.png"
            }
            viewIncorrectAct={viewIncorrectAct}
            onClick={runIncorrectAct}
          />
        </Container>
        {isMobile ? <></> : <Gap height={15} />}
      </QuizBody>
      {viewCorrectAct && <CorrectPopup unit={readingUnit} />}
      {viewIncorrectAct && <IncorrectPopup unit={readingUnit} />}
    </QuizTemplate>
  );
};

// ReadingComprehension2 (EB-KB)
export const ReadingComprehension2 = () => {
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
      <div className={style.readingComprehension2}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const QuestionBox = ({ imgSrc }) => {
    return (
      <div className={style.questionBox}>
        <div className={style.wordImage}>
          <img
            src={imgSrc}
            width={isMobile ? "auto" : "100%"}
            height={isMobile ? "100%" : "auto"}
          />
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
      >
        <CardNumber number={number} />
        {awnserText}
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
      <Comment text={"Reading Comprehension"} />
      <QuizBody>
        {isMobile ? <Gap height={0} /> : <Gap height={15} />}
        <Container>
          <QuestionBox
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/br/eb/kb-001/eb-kb-001-3-1.jpg"
            }
          />
          <Gap height={15} />
          <Answers>
            {/* 정답액션예시 */}
            {/* 한번 누르면 소리가 재생되고 바로 한번더 누르면 정답을 함, 음원이 재생되고 1초후 다시 누르면 다시 음원을 재생함, 음원 재생중 누르면 정답을 체크함 */}
            <TextCard
              number={1}
              awnserText={
                <WordPlayButton2 sentence={"Ben hits the big goat."} />
              }
              viewCorrectAct={viewCorrectAct}
              onClick={runCorrectAct}
            />
            {/* 오답액션예시 */}
            <TextCard
              number={2}
              awnserText={<WordPlayButton2 sentence={"Dad gives Ben a bat."} />}
              viewIncorrectAct={viewIncorrectAct}
              onClick={runIncorrectAct}
            />
          </Answers>
        </Container>
        {isMobile ? <Gap height={5} /> : <Gap height={15} />}
      </QuizBody>
      {viewCorrectAct && <CorrectPopup unit={readingUnit} />}
      {viewIncorrectAct && <IncorrectPopup unit={readingUnit} />}
    </QuizTemplate>
  );
};

// ReadingComprehension3 (EB-KC,1A,1B,1C)
export const ReadingComprehension3 = () => {
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
      <div className={style.readingComprehension3}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const QuestionImage = ({ imgSrc }) => {
    return (
      <div className={style.questionImage}>
        <img
          src={imgSrc}
          width={isMobile ? "auto" : "100%"}
          height={isMobile ? "100%" : "auto"}
        />
      </div>
    );
  };

  const QuestionText = ({ text }) => {
    return <div className={style.questionText}>{text}</div>;
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
      >
        <CardNumber number={number} />
        {awnserText}
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
      <Comment text={"Reading Comprehension"} />
      <QuizBody>
        {isMobile ? <Gap height={0} /> : <Gap height={15} />}
        <Container>
          <QuestionImage
            // imgSrc={
            //   "https://wcfresource.a1edu.com/newsystem/image/br/eb/kc-001/eb-kc-001-3-1.jpg"
            // }
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/br/eb/1a-006/eb-1a-006-s3-q1.jpg"
            }
          />
          <Answers>
            {isMobile ? <></> : <Gap height={10} />}
            {/* 1A~1C의 경우 QuestionText가 사용됨 */}
            <QuestionText text={"What sport does Bobby play?"} />
            {isMobile ? <></> : <Gap height={10} />}
            {/* 정답액션예시 */}
            <TextCard
              number={1}
              awnserText={
                <WordPlayButton2 sentence={"Ben hits the big goat."} />
              }
              viewCorrectAct={viewCorrectAct}
              onClick={runCorrectAct}
            />
            {/* 오답액션예시 */}
            <TextCard
              number={2}
              awnserText={<WordPlayButton2 sentence={"Dad gives Ben a bat."} />}
              viewIncorrectAct={viewIncorrectAct}
              onClick={runIncorrectAct}
            />
            <TextCard
              number={3}
              awnserText={<WordPlayButton2 sentence={"Dad gives Ben a bat."} />}
            />
          </Answers>
        </Container>
        {isMobile ? <Gap height={5} /> : <Gap height={15} />}
      </QuizBody>
      {viewCorrectAct && <CorrectPopup unit={readingUnit} />}
      {viewIncorrectAct && <IncorrectPopup unit={readingUnit} />}
    </QuizTemplate>
  );
};

// ReadingComprehension4 (EB-2A~,PB-KC_A타입이상,PB-2A_B타입이상)
export const ReadingComprehension4 = () => {
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
      <div className={style.readingComprehension4}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const QuestionText = ({ text }) => {
    return <div className={style.questionText}>{text}</div>;
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
        }
        ${viewCorrectAct && style.correct}
        ${viewIncorrectAct && "animate__animated animate__headShake"}
        ${viewIncorrectAct && style.incorrect}
        `}
        onClick={onClick}
      >
        {/* <div className={style.cardNumberPosition}>
          </div> */}
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
          quizType={"Reading Comprehension"}
          comment={"Choose the best answer for each question."}
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
        <Comment text={"Reading Comprehension"} />
        <QuizBody>
          {isMobile ? <></> : <Gap height={15} />}
          <Container>
            <Answers>
              {isMobile ? <Gap height={5} /> : <Gap height={10} />}
              {/* 기본 Question */}
              <QuestionText text={"Where is London located?"} />
              {/* 4레벨 이상 음원 재생기능이 설정되어 있는 경우 */}
              {/* <WordPlayButton question={"Why did Ray like having a dog?"} /> */}
              {isMobile ? <Gap height={0} /> : <Gap height={10} />}
              {/* 정답액션예시 */}
              <TextCard
                number={1}
                awnserText={"It is located on the River Thames."}
                viewCorrectAct={viewCorrectAct}
                onClick={runCorrectAct}
              />
              {/* 오답액션예시 */}
              <TextCard
                number={2}
                awnserText={"It is the capital of Europe."}
                viewIncorrectAct={viewIncorrectAct}
                onClick={runIncorrectAct}
              />
              <TextCard
                number={3}
                awnserText={"It is the capital of Ireland."}
              />
              <TextCard
                number={4}
                awnserText={"It is the capital of the River Thames."}
              />
            </Answers>
          </Container>
          {isMobile ? <Gap height={5} /> : <Gap height={15} />}
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
          quizType={"Reading Comprehension"}
          totalScore={100}
          correctNum={7}
          incorrectNum={3}
          stepNum={1}
          passmark={70}
          viewWrongAnswers={true}
          unit={readingUnit}
        />
      </div>
    </QuizTemplate>
  );
};
