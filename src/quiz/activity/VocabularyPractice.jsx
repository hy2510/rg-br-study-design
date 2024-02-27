import stylesPc from "./VocabularyPractice.module.scss";
import { useState } from "react";
import { QuizBody, QuizHeader, QuizTemplate } from "../util/QuizTemplate";
import {
  IcoChevLeft,
  IcoChevRight,
  IcoPlay,
  IcoReturn,
  IcoStop,
} from "../util/Icons";
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

// 단어듣기버튼1 (단어와 문장 표시)
const WordPlayButton = ({ word, sentence }) => {
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
      {word && <div className={style.txtL}>{word}</div>}
      {sentence && <div className={style.txtP}>{sentence}</div>}
    </div>
  );
};

// 단어듣기버튼2 (단어 음원만 듣기)
const WordPlayButton2 = () => {
  const [isPlay, _isPlay] = useState(false);

  const buttonToggle = () => {
    isPlay ? _isPlay(false) : _isPlay(true);
  };

  return (
    <div className={style.wordPlayButton2} onClick={buttonToggle}>
      {isPlay ? (
        <IcoPlay colorRed width={34} height={34} />
      ) : (
        <IcoStop colorGray width={34} height={34} />
      )}
    </div>
  );
};

// 다음스텝으로넘어가기버튼
const GoToTestButton = () => {
  return (
    <div className={`${style.goToTestButton} animate__animated animate__flash`}>
      Go to Test
    </div>
  );
};

// 단어학습다시시작하기버튼
const RetryButton = () => {
  return (
    <div className={`${style.reTryButton} animate__animated animate__flash`}>
      Retry
    </div>
  );
};

// VocabularyPractice-유형1 (EB-KA,EB-KB,EB-KC)
export const VocabularyPractice1 = () => {
  const Container = ({ children }) => {
    return (
      <div className={style.vocabularyPractice1}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const WordCard = ({ imgSrc, word }) => {
    return (
      <div
        className={`${style.wordCard} animate__animated animate__slideInRight`}
      >
        <div className={style.wordImage}>
          <img src={imgSrc} width={"100%"} />
        </div>
        <div className={style.wordText}>
          <WordPlayButton word={word} />
        </div>
      </div>
    );
  };

  const Indicator = ({ current, total, onClickLeft, onClickRight }) => {
    return (
      <div className={style.indicator}>
        <span onClick={onClickLeft}>
          <div className={style.icoChevLeft}></div>
          {/* <IcoChevLeft colorBlack width={28} height={28} /> */}
        </span>
        <span>
          {current} / {total}
        </span>
        <span onClick={onClickRight}>
          <div className={style.icoChevRight}></div>
          {/* <IcoChevRight colorBlack width={28} height={28} /> */}
        </span>
      </div>
    );
  };

  const GoNextStepBox = () => {
    return (
      <div className={style.goNextStepBox}>
        <RetryButton />
        <GoToTestButton />
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
      <Comment text={"Vocabulary Practice"} />
      <QuizBody>
        <Container>
          <WordCard
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-2-1.jpg"
            }
            word={"apple"}
          />
          <Indicator current={1} total={4} />
          {/* 모든 카드를 넘기면 다음 스텝으로 넘어가는 버튼이 숨겨져 있다가 나타나야 함 */}
          {/* <GoNextStepBox /> */}
        </Container>
      </QuizBody>
    </QuizTemplate>
  );
};

// VocabularyPractice-유형2 (EB-1A,EB-1B,EB-1C)
export const VocabularyPractice2 = () => {
  const Container = ({ children }) => {
    return (
      <div className={style.vocabularyPractice2}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const WordCard = ({ imgSrc, word, sentence }) => {
    return (
      <div
        className={`${style.wordCard} animate__animated animate__slideInRight`}
      >
        <div className={style.wordImage}>
          <img src={imgSrc} width={"100%"} />
        </div>
        <div className={style.wordText}>
          <WordPlayButton word={word} />
        </div>
        <div>
          <WordPlayButton sentence={sentence} />
        </div>
      </div>
    );
  };

  const Indicator = ({ current, total, onClickLeft, onClickRight }) => {
    return (
      <div className={style.indicator}>
        <span onClick={onClickLeft}>
          <div className={style.icoChevLeft}></div>
          {/* <IcoChevLeft colorBlack width={28} height={28} /> */}
        </span>
        <span>
          {current} / {total}
        </span>
        <span onClick={onClickRight}>
          <div className={style.icoChevRight}></div>
          {/* <IcoChevRight colorBlack width={28} height={28} /> */}
        </span>
      </div>
    );
  };

  const GoNextStepBox = () => {
    return (
      <div className={style.goNextStepBox}>
        <RetryButton />
        <GoToTestButton />
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
      <Comment text={"Vocabulary Practice"} />
      <QuizBody>
        <Container>
          <WordCard
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/br/eb/1a-003/eb-1a-003-s2-q1.jpg"
            }
            word={"soccer"}
            sentence={
              <div>
                They like to play{" "}
                <span style={{ color: "#f15144" }}>soccer</span>
              </div>
            }
          />
          <Indicator current={1} total={4} />
          {/* 모든 카드를 넘기면 다음 스텝으로 넘어가는 버튼이 숨겨져 있다가 나타나야 함 */}
          {/* <GoNextStepBox /> */}
        </Container>
      </QuizBody>
    </QuizTemplate>
  );
};

// VocabularyPractice-유형3 (EB-2A이상,PB-KC_A타입이상,PB-2A_B타입이상)
export const VocabularyPractice3 = () => {
  const Container = ({ children }) => {
    return (
      <div className={style.vocabularyPractice3}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const WordCard = ({ word, meaning, sentence, current, total }) => {
    return (
      <>
        <div className={style.wordCard}>
          <div className={style.wordTyping}>
            <WordPlayButton2 />
            <div className={style.textField}>
              <input className={style.inputField} type="text" />
              <div className={style.wordText}>{word}</div>
              <div className={style.count}>
                {current} / {total}
              </div>
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

  const GoNextStepBox = () => {
    return (
      <div className={style.goNextStepBox}>
        <RetryButton />
        <GoToTestButton />
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
      <Comment text={"Vocabulary Practice"} />
      <QuizBody>
        <Container>
          <Gap height={20} />
          <WordCard
            word="scared"
            meaning="n. 무서운"
            sentence={
              "n. something that has two levels or layers something that has two levels or layers"
            }
            current={1}
            total={2}
          />
          {/* 마지막 문제의 타이핑을 다 입력하면 다음 스텝으로 갈지 묻는 선택지가 나타남 */}
          {/* <GoNextStepBox /> */}
        </Container>
      </QuizBody>
    </QuizTemplate>
  );
};

// VocabularyPractice-유형4 (PB-KC,1A,1B,1C_B타입)
export const VocabularyPractice4 = () => {
  const Container = ({ children }) => {
    return (
      <div className={style.vocabularyPractice4}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const WordCard = ({ word, meaning, sentence }) => {
    return (
      <div
        className={`${style.wordCard} animate__animated animate__slideInRight`}
      >
        <div className={style.wordText}>
          <WordPlayButton word={word} />
        </div>
        <Gap height={10} />
        <div className={style.meaning}>{meaning}</div>
        <div className={style.sentence}>{sentence}</div>
      </div>
    );
  };

  const Indicator = ({ current, total, onClickLeft, onClickRight }) => {
    return (
      <div className={style.indicator}>
        <span onClick={onClickLeft}>
          <div className={style.icoChevLeft}></div>
          {/* <IcoChevLeft colorBlack width={28} height={28} /> */}
        </span>
        <span>
          {current} / {total}
        </span>
        <span onClick={onClickRight}>
          <div className={style.icoChevRight}></div>
          {/* <IcoChevRight colorBlack width={28} height={28} /> */}
        </span>
      </div>
    );
  };

  const GoNextStepBox = () => {
    return (
      <div className={style.goNextStepBox}>
        <RetryButton />
        <GoToTestButton />
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
      <Comment text={"Vocabulary Practice"} />
      <QuizBody>
        <Container>
          <WordCard
            word={"clever"}
            meaning="adj. 똑똑한, 명석한"
            sentence={"adj. intelligent and able to learn things quickly"}
          />
          <Indicator current={1} total={4} />
          {/* 모든 카드를 넘기면 다음 스텝으로 넘어가는 버튼이 숨겨져 있다가 나타나야 함 */}
          {/* <GoNextStepBox /> */}
        </Container>
      </QuizBody>
    </QuizTemplate>
  );
};
