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
import { ClozeTest1, ClozeTest2 } from "./activity/ClozeTest";
import { WritingActivity1, WritingActivity2 } from "./activity/WritingActivity";

const screenHeight = window.innerHeight + "px";

export default function Quiz() {
  return (
    <>
      <ReadingComprehension4 />
      {/* <ListeningActivity1 />
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
      <TrueOrFalse />
      <ClozeTest2 />
      <ClozeTest1 />
      <WritingActivity1 />
      <WritingActivity2 /> */}
    </>
  );
}
