import { useState } from "react";
import stylesPc from "./EbookRating.module.scss";

const style = stylesPc;

// 별 선택 버튼
const ChooseRating = () => {
  const [starOnCount, _starOnCount] = useState(3);
  const count = [1, 2, 3, 4, 5];

  return (
    <div className={style.chooseRating}>
      {count.map((a, i) => {
        const num = i + 1;

        return (
          <div
            key={i}
            className={starOnCount >= num ? style.btnStarOn : style.btnStarOff}
            onClick={() => {
              _starOnCount(num);
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default function EbookRating() {
  return (
    <div className={`${style.ebookRating}`}>
      <div className={`${style.container} animate__animated animate__zoomIn`}>
        <div className={style.groupBookcover}>
          <img
            className={style.imgBookcover}
            src="https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-ka-001.jpg"
          />
        </div>
        <div className={style.groupChoose}>
          <div className={style.txtQuestion}>How do you like this book?</div>
          <div className={style.groupChooseRating}>
            <ChooseRating />
          </div>
          <div className={style.groupConfirm}>
            <button className={`${style.btnConfirm} ${style.gray}`}>
              다시읽기
            </button>
            <button className={`${style.btnConfirm} ${style.blue}`}>
              학습하기
            </button>
          </div>
        </div>
        <div className={style.groupComment}>
          <span className={style.icoExclamationMark}></span>
          <span className={style.txtComment}>
            모든 학습을 완료하고 <b>평균 70점을 넘어야 포인트를 획득</b>할 수
            있습니다.
          </span>
        </div>
      </div>
    </div>
  );
}
