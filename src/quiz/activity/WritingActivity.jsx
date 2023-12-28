import stylesPc from "./WritingActivity.module.scss";
import { useState } from "react";
import { QuizBody, QuizHeader, QuizTemplate } from "../util/QuizTemplate";
import { IcoArrowUp, IcoPlay, IcoStop } from "../util/Icons";
import Gap from "../util/Gap";

const style = stylesPc;

// 코멘트
const Comment = ({ text }) => {
  return <div className={style.comment}>{text}</div>;
};

// 단어듣기버튼
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

// WritingActivity1
export const WritingActivity1 = () => {
  const Container = ({ children }) => {
    return (
      <div className={style.writingActivity1}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const EnterBox = ({ children, correct, incorrect }) => {
    return (
      <div className={style.enterBox}>
        {!correct && !incorrect && <>{children}</>}
        {correct && (
          <div className={style.correctText}>
            {"Spring is a good time to see bears."}
          </div>
        )}
        {incorrect && (
          <div className={style.incorrectText}>
            {"Spring is a good time to see bears."}
          </div>
        )}
      </div>
    );
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
        <div className={style.awnserText}>{awnserText}</div>
      </div>
    );
  };

  const Answers = ({ children }) => {
    return <div className={style.answers}>{children}</div>;
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
      <Comment text={"Writing Activity"} />
      <QuizBody>
        <WordPlayButton />
        <Gap height={15} />
        <Container>
          <EnterBox>
            <TextCard awnserText="Spring" />
            <TextCard awnserText="is" />
          </EnterBox>
          <CorrectDirection />
          <Answers>
            <TextCard awnserText="a good" />
            <TextCard awnserText="time" />
            <TextCard awnserText="to see" />
            <TextCard awnserText="bears." />
          </Answers>
        </Container>
        <Gap height={15} />
      </QuizBody>
    </QuizTemplate>
  );
};

// WritingActivity2
export const WritingActivity2 = () => {
  const Container = ({ children }) => {
    return (
      <div className={style.writingActivity2}>
        <div className={style.container}>{children}</div>
      </div>
    );
  };

  const TabButton = ({ number, isSelected }) => {
    return (
      <div className={`${style.tabButton} ${isSelected && style.active}`}>
        {number}
      </div>
    );
  };

  const Tabs = ({ children }) => {
    return <div className={style.tabs}>{children}</div>;
  };

  const QuestionText = ({ text }) => {
    return <div className={style.questionText}>{text}</div>;
  };

  const WritingArea = ({ children }) => {
    return (
      <div className={style.writingArea}>
        <textarea placeholder="Please fill out within 30 to 300 characters." />
        {children}
      </div>
    );
  };

  const WordLimitIndicator = ({ limit, words }) => {
    return (
      <div className={style.wordLimitIndicator}>
        <div className={style.limit}>• Word Limit: {limit}</div>
        <div className={style.words}>• The number of words: {words}</div>
      </div>
    );
  };

  const SaveButton = () => {
    return <div className={style.saveButton}>Save</div>;
  };

  const SubmitButton = () => {
    return <div className={style.submitButton}>Submit</div>;
  };

  const GoNextStepBox = ({ children }) => {
    return <div className={style.goNextStepBox}>{children}</div>;
  };

  return (
    <QuizTemplate>
      <QuizHeader
        currentQuizNumber={1}
        totalQuizNumber={4}
        attempts={3}
        quizTimer={"20:00"}
      />
      <Comment text={"Writing Activity"} />
      <QuizBody>
        <Gap height={15} />
        <Container>
          <Tabs>
            <TabButton number={1} isSelected={true} />
            <TabButton number={2} isSelected={false} />
            <TabButton number={3} isSelected={false} />
          </Tabs>
          <QuestionText
            text={"Describe briefly what happens in the book or the main idea."}
          />
          <WritingArea />
          <GoNextStepBox>
            <WordLimitIndicator limit={"30~300"} words={0} />
            <SaveButton />
            <SubmitButton />
          </GoNextStepBox>
        </Container>
        <Gap height={15} />
      </QuizBody>
    </QuizTemplate>
  );
};
