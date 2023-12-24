import "./fonts/custom-font.scss";
import {
  ListeningActivity1,
  ListeningActivity2,
  ListeningActivity3,
  ListeningActivity4,
} from "./activity/ListeningActivity";
import {
  VocabularyPractice1,
  VocabularyPractice2,
  VocabularyPractice3,
  VocabularyPractice4,
} from "./activity/VocabularyPractice";
import {
  VocabularyTest1,
  VocabularyTest2,
  VocabularyTest3,
  VocabularyTest4,
} from "./activity/VocabularyTest";
import {
  ReadingComprehension1,
  ReadingComprehension2,
  ReadingComprehension3,
  ReadingComprehension4,
} from "./activity/ReadingComprehension";

const screenHeight = window.innerHeight + "px";

export default function Quiz() {
  return (
    <>
      <ReadingComprehension4 />
      <ReadingComprehension3 />
    </>
  );
}
