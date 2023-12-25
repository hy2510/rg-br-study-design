import stylesPc from "./ListeningActivity.module.scss";
import { useState } from "react";
import { QuizBody, QuizHeader, QuizTemplate } from "../util/QuizTemplate";
import { IcoPlay, IcoStop } from "../util/Icons";
import Gap from "../util/Gap";

const style = stylesPc;

// 코멘트
const Comment = ({ text }) => {
  return <div className={style.comment}>{text}</div>;
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
        <IcoPlay colorRed width={40} height={40} />
      ) : (
        <IcoStop colorGray width={40} height={40} />
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
      <div className={style.listeningActivity1}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const WordCard = ({ imgSrc, onClick, viewCorrectAct, viewIncorrectAct }) => {
    return (
      <div
        className={`${style.wordCard} ${
          viewCorrectAct && "animate__animated animate__tada"
        } ${viewIncorrectAct && "animate__animated animate__shakeX"}
        `}
        onClick={onClick}
      >
        <img src={imgSrc} />
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
      <Comment text={"Listen to the audio and choose the correct card."} />
      <QuizBody>
        <WordPlayButton />
        <Gap height={15} />
        <Container>
          {/* 정답액션예시 */}
          <WordCard
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/apple.png"
            }
            viewCorrectAct={viewCorrectAct}
            onClick={runCorrectAct}
          />
          {/* 오답액션예시 */}
          <WordCard
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/ant.png"
            }
            viewIncorrectAct={viewIncorrectAct}
            onClick={runIncorrectAct}
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
      <div className={style.listeningActivity2}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const WordCard = ({ word, onClick, viewCorrectAct, viewIncorrectAct }) => {
    return (
      <div
        className={`${style.wordCard} ${
          viewCorrectAct && "animate__animated animate__tada"
        } ${viewIncorrectAct && "animate__animated animate__shakeX"}
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
      <QuizBody>
        <WordPlayButton />
        <Gap height={15} />
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
          <WordCard word={"Oh My God"} />
        </Container>
        <Gap height={15} />
      </QuizBody>
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
        className={`${style.imageCard} ${
          viewCorrectAct && "animate__animated animate__tada"
        } ${viewIncorrectAct && "animate__animated animate__shakeX"}
        `}
        onClick={onClick}
      >
        <img src={imgSrc} width={"100%"} />
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
      <QuizBody>
        <WordPlayButton />
        <Gap height={15} />
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
        <Gap height={15} />
      </QuizBody>
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
      <div className={style.listeningActivity4}>
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
        className={`${style.imageCard} ${
          viewCorrectAct && "animate__animated animate__tada"
        } ${viewIncorrectAct && "animate__animated animate__shakeX"}
        `}
        onClick={onClick}
      >
        <img src={imgSrc} width={"100%"} />
        <div className={style.cardNumberPosition}>
          <CardNumber number={number} />
        </div>
      </div>
    );
  };

  const QuestionBox = ({ imgSrc }) => {
    return (
      <div className={style.questionBox}>
        <img src={imgSrc} width={250} />
      </div>
    );
  };

  const SoundCard = ({ number, onClick, viewCorrectAct, viewIncorrectAct }) => {
    return (
      <div
        className={`${style.soundCard} ${
          viewCorrectAct && "animate__animated animate__tada"
        } ${viewIncorrectAct && "animate__animated animate__shakeX"}
        `}
        onClick={onClick}
      >
        <div className={style.cardNumberPosition}>
          <CardNumber number={number} />
        </div>
        <div className={style.playSoundPosition}>
          <WordPlayButton2 />
        </div>
        <div className={style.checkAnswer}></div>
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
      <QuizBody>
        <Gap height={15} />
        <Container>
          <QuestionBox
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/br/eb/1b-010/eb-1b-010-s1-q1.jpg"
            }
          />
          <Gap height={20} />
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
        <Gap height={15} />
      </QuizBody>
    </QuizTemplate>
  );
};
