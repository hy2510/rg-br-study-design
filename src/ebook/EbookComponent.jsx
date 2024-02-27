import { useEffect, useState } from "react";
import ico_menu from "./images/ico_menu.svg";
import ico_home from "./images/ico_home.svg";
import ico_chev_white_left from "./images/ico_chev_white_left.svg";
import ico_chev_white_right from "./images/ico_chev_white_right.svg";
import ico_chev_down from "./images/ico_chev_down.svg";
import ico_full_size from "./images/ico_full_size.svg";
import ico_setting from "./images/ico_setting.svg";
import ico_setting2 from "./images/ico_setting2.svg";
import ico_delete_white from "./images/ico_delete_white.svg";
import ico_delete_black from "./images/ico_delete_black.svg";
import ico_printer from "./images/ico_printer.svg";
import ico_speaker from "./images/ico_speaker.svg";
import ico_full_screen from "./images/ico_full_screen.svg";
import ico_full_screen_out from "./images/ico_full_screen_out.svg";
import img_movie from "./images/img_movie.svg";
import img_play from "./images/btn_play.svg";
import img_pause from "./images/btn_pause.svg";
import img_rec from "./images/img_rec.svg";
import img_story from "./images/img_story.svg";
import img_study from "./images/img_study.svg";
import img_word from "./images/img_word.svg";
import ico_word from "./images/ico_word.svg";
import ico_speed_08 from "./images/ico_speed08.svg";
import ico_speed_10 from "./images/ico_speed10.svg";
import ico_speed_12 from "./images/ico_speed12.svg";
import ico_speed_15 from "./images/ico_speed15.svg";
import stylePc from "./EbookComponent.module.scss";
import {
  LottieAudioPlayAni,
  LottieExcellentAni,
  LottieGoodEffortAni,
  LottieRecordAni,
  LottieUserSayAni,
} from "../quiz/util/LottieAni";
import BtnDelete from "./util/BtnDelete";

const style = stylePc;

// eBook 헤더
export const EbookHeader = ({ _viewSideMenu }) => {
  return (
    <div className={style.ebook_header}>
      <div
        className={style.menu_button}
        onClick={() => {
          _viewSideMenu(true);
        }}
      >
        <img src={ico_menu} width={24} height={24} alt="" />
      </div>
    </div>
  );
};

// eBook 페이지
export const EbookPage = ({
  isMobile,
  pageWidth,
  pageHeight,
  pagesScale,
  pageStyle,
  pageContents,
  pageImage,
}) => {
  return (
    <div
      className={style.ebook_page}
      style={{
        width: isMobile ? pageWidth : pageWidth * pagesScale,
        height: isMobile ? pageHeight : pageHeight * pagesScale,
      }}
    >
      <div
        style={{
          transform: `scale(${pagesScale})`,
          transformOrigin: "top left",
        }}
      >
        <div className={style.text_wrapper}>
          <div dangerouslySetInnerHTML={pageStyle}></div>
          <div
            style={{
              transform: "scale(1.66)",
              transformOrigin: "top left",
              position: "absolute",
            }}
            dangerouslySetInnerHTML={pageContents}
          ></div>
        </div>
      </div>
      <img src={pageImage} alt="" />
    </div>
  );
};

// eBook 페이지 양쪽 화살표
export const EbookPageArrows = ({
  pageWidth,
  pagesScale,
  turnPageLeft,
  turnPageRight,
}) => {
  return (
    <div
      className={style.ebook_page_arrows}
      style={{ width: `${pageWidth * pagesScale * 2 + 140}px` }}
    >
      <div className={style.left_arrow}>
        <button
          onClick={() => {
            turnPageLeft();
          }}
        >
          <img src={ico_chev_white_left} width={60} alt="" />
        </button>
      </div>
      <div className={style.right_arrow}>
        <button
          onClick={() => {
            turnPageRight();
          }}
        >
          <img src={ico_chev_white_right} width={60} alt="" />
        </button>
      </div>
    </div>
  );
};

// eBook 플레이바 > 드롭다운 메뉴 (플레이 모드 설정)
export const EbookPlayBarDropdownMenu = ({ menuName, menuItems }) => {
  // 기능: 메뉴 팝업 띄우기 및 버튼 선택시 이벤트
  const [viewMenu, _viewMenu] = useState(false);
  const [readMode, _readMode] = useState(menuItems);
  let readModeSet = [...readMode];
  const selectedMode = readModeSet.find((a) => {
    return a.selected === "on";
  });

  return (
    <div className={style.ebook_play_bar_drop_down_menu}>
      <div
        className={style.read_mode_option}
        onClick={() => {
          viewMenu ? _viewMenu(false) : _viewMenu(true);
        }}
      >
        <span>{selectedMode.name}</span>
        <img src={ico_chev_down} width={15} alt="" />
      </div>
      {viewMenu && (
        <>
          <div className={style.read_mode_option_menu}>
            <div className={style.menu_name}>{menuName}</div>
            {readMode.map((a, i) => {
              return (
                <div
                  className={`${style.menu_item} ${
                    a.selected == "on" && style.on
                  }`}
                  onClick={() => {
                    readModeSet.map((b) => {
                      b.selected = "";
                    });
                    readModeSet[i].selected = "on";
                    _readMode(readModeSet);
                    _viewMenu(false);
                  }}
                >
                  {a.name}
                </div>
              );
            })}
          </div>
          <div
            className={style.light_box}
            onClick={() => {
              _viewMenu(false);
            }}
          ></div>
        </>
      )}
    </div>
  );
};

// eBook 플레이바 > 모바일용 플레이 모드 설정창
export const EbookPlayModeMobile = ({
  viewEbookPlayModeMobile,
  _viewEbookPlayModeMobile,
}) => {
  const Label = ({ text }) => {
    return <div className={style.label}>{text}</div>;
  };

  const SelectBox = ({ children }) => {
    return <div className={style.select_box}>{children}</div>;
  };

  const SelectButton = ({ name, active }) => {
    return (
      <div className={`${style.select_button} ${active && style.on}`}>
        <div className={style.radio}></div>
        {name}
      </div>
    );
  };

  const PageTurningMode = () => {
    const ChooseButton = ({ name, active }) => {
      return (
        <div className={`${style.choose_button} ${active && style.on}`}>
          {name}
        </div>
      );
    };

    return (
      <div className={style.page_turning_mode}>
        <ChooseButton name={"수동으로 넘기기"} active={false} />
        <ChooseButton name={"자동으로 넘기기"} active={true} />
      </div>
    );
  };

  const [windowSlideIn, _windowSlideIn] = useState(true);

  const windowSlideOut = () => {
    _windowSlideIn(false);
    setTimeout(() => {
      _viewEbookPlayModeMobile(false);
    }, 500);
  };

  return (
    <div
      className={`${style.ebook_play_mode_mobile}
      ${windowSlideIn ? style.slide_in_bottom : style.slide_out_bottom}`}
    >
      <div className={style.container}>
        <Label text={"읽기 모드"} />
        <SelectBox>
          <SelectButton name={"Basic"} active />
          <SelectButton name={"No Text"} />
          <SelectButton name={"No Highlight"} />
          <SelectButton name={"No Audio"} />
        </SelectBox>
        <Label text={"읽기 속도"} />
        <SelectBox>
          <SelectButton name={"0.8x"} />
          <SelectButton name={"1.0x"} active />
          <SelectButton name={"1.2x"} />
          <SelectButton name={"1.5x"} />
        </SelectBox>
        <Label text={"책장 넘기기"} />
        <PageTurningMode />
      </div>
      <div
        className={style.light_box}
        onClick={() => {
          windowSlideOut();
        }}
      ></div>
    </div>
  );
};

// eBook 플레이바
export const EbookPlayBar = ({
  progressWidth,
  turnPageLeft,
  turnPageRight,
  isAudioPlay,
  _isAudioPlay,
  isAudioPause,
  _isAudioPause,
  isFullScreen,
  _isFullScreen,
  _viewVocaList,
  IsMobile,
  _viewSideMenu,
}) => {
  const [viewEbookPlayModeMobile, _viewEbookPlayModeMobile] = useState(false);

  return (
    <>
      {/* 프로그레스바 */}
      <div className={style.ebook_progress_bar}>
        <div
          className={style.progress}
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
      {/* 플레이바 */}
      <div className={`${style.ebook_play_bar} ${IsMobile() && style.mobile}`}>
        {/* 플레이바 > 왼쪽 */}
        <div className={style.ebook_play_bar_pc_area_l}>
          {IsMobile() ? (
            <>
              <div
                className={style.read_mode_button}
                onClick={() => {
                  viewEbookPlayModeMobile
                    ? _viewEbookPlayModeMobile(false)
                    : _viewEbookPlayModeMobile(true);
                }}
              >
                <img src={ico_speed_10} width={30} height={30} />
              </div>
              {viewEbookPlayModeMobile && (
                <EbookPlayModeMobile
                  viewEbookPlayModeMobile={viewEbookPlayModeMobile}
                  _viewEbookPlayModeMobile={_viewEbookPlayModeMobile}
                />
              )}
            </>
          ) : (
            <>
              <EbookPlayBarDropdownMenu
                menuName="읽기 모드"
                menuItems={[
                  { name: "Basic", selected: "on" },
                  { name: "No Text", selected: "" },
                  { name: "No Audio", selected: "" },
                  { name: "No Highlight", selected: "" },
                ]}
              />
              <EbookPlayBarDropdownMenu
                menuName="재생 속도"
                menuItems={[
                  { name: "0.8x", selected: "" },
                  { name: "1x", selected: "on" },
                  { name: "1.2x", selected: "" },
                  { name: "1.5x", selected: "" },
                ]}
              />
              <EbookPlayBarDropdownMenu
                menuName="페이지 넘기기"
                menuItems={[
                  { name: "Auto", selected: "on" },
                  { name: "Manually", selected: "" },
                ]}
              />
            </>
          )}
        </div>
        {/* 플레이바 > 가운데 */}
        <div className={style.ebook_play_bar_pc_area_c}>
          <div
            className={style.backward}
            onClick={() => {
              turnPageLeft();
            }}
          >
            <img src={ico_chev_white_left} width={40} alt="" />
          </div>
          <div
            className={style.play}
            onClick={() => {
              isAudioPause ? _isAudioPause(false) : _isAudioPause(true);
              isAudioPlay ? _isAudioPlay(false) : _isAudioPlay(true);
            }}
          >
            {isAudioPause && <img src={img_play} width={40} />}
            {isAudioPlay && <img src={img_pause} width={40} />}
          </div>
          <div
            className={style.forward}
            onClick={() => {
              turnPageRight();
            }}
          >
            <img src={ico_chev_white_right} width={40} alt="" />
          </div>
        </div>
        {/* 플레이바 > 오른쪽 */}
        <div className={style.ebook_play_bar_pc_area_r}>
          <div
            className={style.word_button}
            onClick={() => {
              _viewVocaList(true);
            }}
          >
            <img src={ico_word} width={28} height={28} alt="" />
          </div>
          {IsMobile() ? (
            <div
              className={style.menu_button}
              onClick={() => {
                _viewSideMenu(true);
              }}
            >
              <img src={ico_menu} width={24} height={24} alt="" />
            </div>
          ) : (
            <div
              className={style.full_screen_button}
              onClick={() => {
                if (!isFullScreen) {
                  document.body.requestFullscreen();
                  _isFullScreen(true);
                } else {
                  document.exitFullscreen();
                  _isFullScreen(false);
                }
              }}
            >
              {isFullScreen ? (
                <img src={ico_full_screen_out} width={20} height={20} alt="" />
              ) : (
                <img src={ico_full_screen} width={20} height={20} alt="" />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// eBook 스피크바
export const EbookSpeakBar = ({ progressWidth }) => {
  const [isOn, _isOn] = useState(false);
  const [isReady, _isReady] = useState(true);
  const [isListening, _isListening] = useState(false);
  const [isRecording, _isRecording] = useState(false);
  const [isUserFilePlay, _isUserFilePlay] = useState(false);

  // 녹음대기, 음원재생
  const GroupRecord = () => {
    return (
      <div
        className={`${style.group_record} animate__animated ${
          isOn && "animate__slideInUp"
        }`}
      >
        <div
          className={style.btn_listen}
          onClick={() => {
            isListening ? _isListening(false) : _isListening(true);
            _isReady(false);
          }}
        >
          <div
            className={`${style.ico_listen} ${
              isListening ? style.listening : ""
            }`}
          ></div>
          <span>{isListening ? "Listening" : "Listen"}</span>
        </div>
        <span style={{ opacity: "0.15" }}>&</span>
        <div
          className={style.btn_speak}
          onClick={() => {
            isRecording ? _isRecording(false) : _isRecording(true);
            _isReady(false);
          }}
        >
          <div className={style.ico_rec}></div>
          <span>Speak!</span>
        </div>
      </div>
    );
  };

  // 음원 재생중 표시
  const GroupListening = ({ 음원길이 }) => {
    // let 길이 = 음원길이;
    let 길이 = 3000;

    useEffect(() => {
      isListening &&
        setTimeout(() => {
          _isListening(false);
          _isReady(true);
          _isOn(true);
          setTimeout(() => {
            _isOn(false);
          }, 300);
        }, 길이);
    }, [isListening]);

    return (
      <div
        className={`${style.group_listening} animate__animated animate__slideInUp`}
      >
        <LottieAudioPlayAni />
      </div>
    );
  };

  // 녹음중 표시
  const GroupRecording = ({ 음원길이 }) => {
    // let 녹음길이 = 음원길이 + 1000;
    let 녹음길이 = 2000 + 1000;

    useEffect(() => {
      isRecording &&
        setTimeout(() => {
          _isRecording(false);
          _isUserFilePlay(true);
        }, 녹음길이);
    }, [isRecording]);

    return (
      <div
        className={`${style.group_recording} animate__animated animate__slideInUp`}
      >
        <LottieRecordAni />
        <spna>REC</spna>
      </div>
    );
  };

  // 녹음후 재생 표시
  const GroupUserFilePlay = ({ 음원길이 }) => {
    // let 파일길이 = 음원길이 + 1000;
    let 파일길이 = 2000 + 1000;

    useEffect(() => {
      isUserFilePlay &&
        setTimeout(() => {
          _isUserFilePlay(false);
          _isReady(true);
          _isOn(true);
          setTimeout(() => {
            _isOn(false);
          }, 300);
        }, 파일길이);
    }, [isUserFilePlay]);

    return (
      <div
        className={`${style.group_user_file_play} animate__animated animate__slideInUp`}
      >
        <LottieUserSayAni />
      </div>
    );
  };

  return (
    <>
      {/* 페이지 프로그레스바 */}
      <div className={style.ebook_progress_bar}>
        <div
          className={style.progress}
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
      {/* 스피크바 */}
      <div className={style.ebook_speak_bar}>
        <div></div>
        {isReady && <GroupRecord />}
        {isListening && <GroupListening />}
        {isRecording && <GroupRecording />}
        {isUserFilePlay && <GroupUserFilePlay />}
        <div className={style.group_exit_speak}>
          <BtnDelete />
        </div>
      </div>
    </>
  );
};

// eBook 스피크 good job 메세지바
export const SpeakGoodJob = () => {
  return (
    <div
      className={`${style.speak_good_job} animate__animated animate__slideInUp`}
    >
      Good Job!
    </div>
  );
};

// eBook 스피크 try again 메세지바
export const SpeakTryAgain = ({ 틀린횟수 }) => {
  // let 횟수 = 틀릿횟수;
  let 횟수 = 3;

  return (
    <div
      className={`${style.speak_try_again} animate__animated animate__slideInUp`}
    >
      {`Try Again ${횟수} / 3`}
    </div>
  );
};

// eBook 스피크 결과 팝업 - Excellent
export const SpeakResultExcellent = () => {
  return (
    <div className={style.speak_result_excellent}>
      <div className={style.container}>
        <BtnDelete />
        <div>
          <LottieExcellentAni />
        </div>
        <div className={style.txt_caption}>Excellent!</div>
      </div>
    </div>
  );
};

// eBook 스피크 결과 팝업 - Good Effort
export const SpeakResultGoodEffort = () => {
  return (
    <div className={style.speak_result_good_effort}>
      <div className={style.container}>
        <BtnDelete />
        <div>
          <LottieGoodEffortAni />
        </div>
        <div className={style.txt_caption}>Good Effort</div>
      </div>
    </div>
  );
};

// eBook 콘텐츠 PC
export const EbookBodyPC = ({ pageWidth, pagesScale, pageAniFX, children }) => {
  return (
    <div
      className={style.ebook_body_pc}
      style={{ width: pageWidth * pagesScale * 2 }}
    >
      <div className={style.ebook_contents}>
        <div className={`${style.pages} ${pageAniFX}`}>{children}</div>
      </div>
    </div>
  );
};

// eBook 콘텐츠 모바일 세로
export const EbookBodyMobileP = ({
  pageAniFX,
  _touchStart,
  _touchEnd,
  children,
}) => {
  return (
    <div
      className={style.ebook_body_mobile_p}
      onTouchStart={(e) => {
        let x = e.changedTouches[0].pageX;
        _touchStart(x);
      }}
      onTouchEnd={(e) => {
        let x = e.changedTouches[0].pageX;
        _touchEnd(x);
      }}
    >
      <div className={pageAniFX}>{children}</div>
    </div>
  );
};

// eBook 콘텐츠 모바일 가로
export const EbookBodyMobileL = () => {
  return <>이북 모바일 가로</>;
};

// eBook 단어장 > 단어 리스트
export const EbookVocaList = ({ vocaListItem }) => {
  return (
    <div className={style.ebook_voca_list}>
      {vocaListItem.map((a, i) => {
        return (
          <div className={style.voca_item}>
            <div className={style.word_item}>
              <div className={style.word}>{a.word}</div>
              <img src={ico_speaker} alt="" />
            </div>
            <div className={style.mean}>{a.mean}</div>
          </div>
        );
      })}
    </div>
  );
};

// eBook 단어장
export const EbookVocabularyNote = (props) => {
  const [vocaNoteAni, _vocaNoteAni] = useState(
    "animate__animated animate__fadeIn"
  );
  const [vocaContainerAni, _vocaContainerAni] = useState(
    "animate__animated animate__slideInRight"
  );

  const CloseWindow = () => {
    _vocaNoteAni("animate__animated animate__fadeOut");
    _vocaContainerAni("animate__animated animate__slideOutRight");
    setTimeout(() => {
      props._viewVocaList(false);
      _vocaNoteAni("animate__animated animate__fadeIn");
      _vocaContainerAni("animate__animated animate__slideInRight");
    }, 300);
  };

  return (
    <>
      <div
        id="ebook-vocabulary-note"
        className={`${style.ebook_vocabulary_note} ${vocaNoteAni}`}
      >
        <div
          id="ebook-vocabulary-note-container"
          className={`${style.ebook_vocabulary_note_container} ${vocaContainerAni}`}
        >
          <div className={style.ebook_vocabulary_note_area_top}>
            <div className={style.close_vocabulary_note}>
              <div className={style.btn_print}>
                <img src={ico_printer} alt="" />
              </div>
              <div
                className={style.btn_delete}
                onClick={() => {
                  CloseWindow();
                }}
              >
                <img src={ico_delete_black} alt="" />
              </div>
            </div>
            <div className={style.book_info}>
              <div className={style.book_code}>EB-KA-001</div>
              <div className={style.book_title}>Aligators Apples</div>
            </div>
            <div className={style.line}></div>
            <div className={style.voca_list}>
              <EbookVocaList
                vocaListItem={[
                  { word: "apple", mean: "사과", audioSrc: "" },
                  { word: "ant", mean: "개미", audioSrc: "" },
                  { word: "alligator", mean: "악어", audioSrc: "" },
                  { word: "ax", mean: "도끼", audioSrc: "" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      {props.viewVocaList && (
        <div
          className={style.ebook_vocabulary_note_screen_block}
          onClick={() => {
            CloseWindow();
          }}
        ></div>
      )}
    </>
  );
};

export const MovieContents = ({ videoSrc, onClickDelete }) => {
  return (
    <div className={style.movieContents}>
      <div className={style.container}>
        <video width="100%" height="100%" controls="controls">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className={style.btnDelete} onClick={onClickDelete}></div>
      </div>
    </div>
  );
};
