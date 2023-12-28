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
import { SummaryTest1, SummaryTest2 } from "./activity/SummaryTest";
import { TrueOrFalse } from "./activity/TrueOrFalse";
import { WritingActivity1, WritingActivity2 } from "./activity/WritingActivity";
import { ClozeTest1, ClozeTest2 } from "./activity/ClozeTest";

const screenHeight = window.innerHeight + "px";

export default function Quiz() {
  return (
    <>
      <ListeningActivity1 />
      <ListeningActivity2 />
      <ListeningActivity3 />
      <ListeningActivity4 />
      <VocabularyPractice1 />
      <VocabularyTest1 />
      <VocabularyPractice2 />
      <VocabularyTest2 />
      <VocabularyPractice3 />
      <VocabularyTest3 />
      <VocabularyPractice4 />
      <VocabularyTest4 />
      <ReadingComprehension1 />
      <ReadingComprehension2 />
      <ReadingComprehension3 />
      <ReadingComprehension4 />
      <SummaryTest1 />
      <SummaryTest2 />
      <ClozeTest1 />
      <ClozeTest2 />
      <TrueOrFalse />
      <WritingActivity1 />
      <WritingActivity2 />
    </>
  );
}
