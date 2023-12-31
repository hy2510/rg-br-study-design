import { useState } from "react";
import { IcoPlay, IcoStop } from "../util/Icons";
import stylesPc from "./TestReview.module.scss";

const style = stylesPc;

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

// TestReview3 (ClozeTest유형)
export const TestReview3 = ({ title, children, onClick }) => {
  return (
    <div className={style.testReview3}>
      <div className={style.title}>{title}</div>
      <div className={style.container}>
        <WordPlayButton sentence={"Playback"} />
        <div className={style.sentence}>{children}</div>
      </div>
      <div className={style.nextButton} onClick={onClick}>
        Next
      </div>
    </div>
  );
};
