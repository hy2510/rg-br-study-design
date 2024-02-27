import aniDataScrollDown from "../../ani-data/scrolldown.json";
import aniDataRecord from "../../ani-data/record.json";
import aniDataUserSay from "../../ani-data/user-say.json";
import aniDataAudioPlay from "../../ani-data/audio-play.json";
import aniDataExcellent from "../../ani-data/excellent.json";
import aniDataGoodEffort from "../../ani-data/good-effort.json";
import Lottie from "react-lottie";

export function LottieScrollDownAni() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: aniDataScrollDown,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={300} width={300} />
    </>
  );
}

export function LottieRecordAni() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: aniDataRecord,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={40} width={40} />
    </>
  );
}

export function LottieUserSayAni() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: aniDataUserSay,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={80} width={98} />
    </>
  );
}

export function LottieAudioPlayAni() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: aniDataAudioPlay,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={40} width={50} />
    </>
  );
}

export function LottieExcellentAni() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: aniDataExcellent,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={400} width={400} />
    </>
  );
}

export function LottieGoodEffortAni() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: aniDataGoodEffort,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={300} width={400} />
    </>
  );
}
