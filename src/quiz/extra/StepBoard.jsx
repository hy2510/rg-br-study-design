import { useEffect, useState } from "react";
import Gap from "../util/Gap";
import stylesPc from "./StepBoard.module.scss";

const style = stylesPc;

export const StepIntro = ({ stepOrder, quizType, comment, unit, onClick }) => {
  return (
    <div className={style.stepIntro}>
      <div
        className={`${style.container} animate__animated animate__bounceInRight`}
      >
        <div className={style.stepOrder}>Step{stepOrder}</div>
        <div className={style.quizType}>{quizType}</div>
        <div className={style.comment}>{comment}</div>
        <div className={style.readingUnit}>
          <img
            src={`https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/${unit}_13.png`}
            alt=""
          />
        </div>
        <div className={style.startButton} onClick={onClick}>
          Start
        </div>
      </div>
    </div>
  );
};

export const RevisionIntro = ({
  stepOrder,
  quizType,
  comment,
  revisionGoalNum,
  revisionCompletedNum,
  revisionCountNum,
  onClick,
}) => {
  return (
    <div className={style.revisionIntro}>
      <div
        className={`${style.container} animate__animated animate__bounceInRight`}
      >
        <div className={style.stepOrder}>Step{stepOrder}</div>
        <div className={style.quizType}>{quizType}</div>
        <div className={style.comment}>{comment}</div>
        <div className={style.revisionBoard}>
          <div className={style.txtLabel}>목표 첨삭:</div>
          <div className={style.txtCount}>{revisionGoalNum}</div>
          <div className={style.txtLabel}>남은 첨삭:</div>
          <div className={style.txtCount}>{revisionCountNum}</div>
          <div className={style.txtLabel}>첨삭 완료:</div>
          <div className={style.txtCount}>{revisionCompletedNum}</div>
        </div>
        <div className={style.startButton} onClick={onClick}>
          Start
        </div>
      </div>
    </div>
  );
};

export const RevisionFreeIntro = ({
  stepOrder,
  quizType,
  comment,
  revisionGoalNum,
  revisionCompletedNum,
  revisionCountNum,
  onClickPass,
  onClickGo,
}) => {
  return (
    <div className={style.revisionFreeIntro}>
      <div
        className={`${style.container} animate__animated animate__bounceInRight`}
      >
        <div className={style.stepOrder}>Step{stepOrder}</div>
        <div className={style.quizType}>{quizType}</div>
        <div className={style.comment}>{comment}</div>
        <div className={style.revisionBoard}>
          {/* <div className={style.txtLabel}>목표 첨삭:</div>
          <div className={style.txtCount}>{revisionGoalNum}</div> */}
          <div className={style.txtLabel}>남은 첨삭:</div>
          <div className={style.txtCount}>
            {revisionCountNum} / {revisionGoalNum}
          </div>
          <div className={style.txtLabel}>첨삭 완료:</div>
          <div className={style.txtCount}>{revisionCompletedNum}</div>
        </div>
        <div className={style.selectBox}>
          <div className={style.passButton} onClick={onClickPass}>
            Pass
          </div>
          <div className={style.goButton} onClick={onClickGo}>
            Go
          </div>
        </div>
      </div>
    </div>
  );
};
