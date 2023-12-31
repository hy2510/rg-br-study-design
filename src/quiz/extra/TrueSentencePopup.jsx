import { useState } from "react";
import Gap from "../util/Gap";
import { IcoPlay, IcoStop } from "../util/Icons";
import stylesPC from "./TrueSentencePopup.module.scss";

const style = stylesPC;

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

export const TrueSentencePopup = ({ title, sentence, onClick }) => {
  return (
    <div className={style.trueSentencePopup}>
      <div className={style.title}>{title}</div>
      <div className={style.container}>
        <WordPlayButton sentence={"Playback"} />
        <div className={style.sentence}>{sentence}</div>
      </div>
      <div className={style.nextButton} onClick={onClick}>
        Next
      </div>
    </div>
  );
};
