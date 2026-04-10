// src/pages/LessonPage.jsx

import { useParams } from "react-router-dom";
import lessons from "../data/lessons";
import Lesson from "../components/Lesson";
import BackgroundFrame from "../components/BackgroundFrame";
import TopNavigation from "../components/TopNavigation";

export default function LessonPage() {
  const { topic, part } = useParams();
  const currentPart = Number(part);

  const topicLessons = lessons[topic];
  const content = topicLessons?.[currentPart];

  if (!content) return <h1>Lesson not found</h1>;


  const hasPrev = topicLessons?.[currentPart - 1];
  const hasNext = topicLessons?.[currentPart + 1];

  const topics = Object.keys(lessons);
  const currentTopicIndex = topics.indexOf(topic);
  const nextTopic = topics[currentTopicIndex + 1];
  const nextLessonPath = nextTopic ? `/content/${nextTopic}/1` : null;

  return (
    <>
      <BackgroundFrame />

      <TopNavigation
        prevPath={hasPrev ? `/content/${topic}/${currentPart - 1}` : null}
        nextPath={hasNext ? `/content/${topic}/${currentPart + 1}` : null}
      />

      <Lesson
        key={`${topic}-${part}`}
        lessonNumber={content.lessonNumber}
        title={content.title}
        question={content.question}
        definition={content.definition}
        note={content.note}
        illustrationContent={
          content.illustration ? <img src={content.illustration} /> : null
        }
        videoContent={
          content.video ? (
            <video src={content.video} controls playsInline />
          ) : null
        }
        outro={content.outro}
        topic={topic}
        part={currentPart}
        nextLessonPath={nextLessonPath}
      />
    </>
  );
}
