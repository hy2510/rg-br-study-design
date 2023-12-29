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
